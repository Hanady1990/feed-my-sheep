import { useState, useEffect } from "react";
import { useAdminApi } from "@/hooks/use-admin-api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Pencil, Trash2, Loader2 } from "lucide-react";
import { toast } from "sonner";

const emptyHeresy = {
  slug: "", name: "", name_ar: "", period: "", period_ar: "",
  founder: "", founder_ar: "", summary: "", summary_ar: "",
  council_response: "", council_response_ar: "",
  categorical_refs: [] as string[], key_figures: [] as string[], key_figures_ar: [] as string[],
  points: [] as any[],
};

const AdminHeresies = () => {
  const { list, create, update, remove } = useAdminApi();
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<any | null>(null);
  const [form, setForm] = useState({ ...emptyHeresy });

  const load = async () => {
    setLoading(true);
    try { const data = await list("heresies"); setItems(data || []); }
    catch (e: any) { toast.error(e.message); }
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const openNew = () => { setEditing(null); setForm({ ...emptyHeresy }); setOpen(true); };
  const openEdit = (item: any) => {
    setEditing(item);
    setForm({
      slug: item.slug, name: item.name, name_ar: item.name_ar,
      period: item.period || "", period_ar: item.period_ar || "",
      founder: item.founder || "", founder_ar: item.founder_ar || "",
      summary: item.summary, summary_ar: item.summary_ar,
      council_response: item.council_response || "", council_response_ar: item.council_response_ar || "",
      categorical_refs: item.categorical_refs || [], key_figures: item.key_figures || [],
      key_figures_ar: item.key_figures_ar || [], points: item.points || [],
    });
    setOpen(true);
  };

  const handleSave = async () => {
    try {
      if (editing) { await update("heresies", editing.id, form); toast.success("Updated"); }
      else { await create("heresies", form); toast.success("Created"); }
      setOpen(false); load();
    } catch (e: any) { toast.error(e.message); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete?")) return;
    try { await remove("heresies", id); toast.success("Deleted"); load(); }
    catch (e: any) { toast.error(e.message); }
  };

  const setField = (key: string, val: any) => setForm(prev => ({ ...prev, [key]: val }));

  if (loading) return <div className="flex justify-center p-8"><Loader2 className="animate-spin" /></div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Heresies ({items.length})</h2>
        <Button size="sm" onClick={openNew}><Plus className="w-4 h-4 mr-1" /> Add</Button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader><DialogTitle>{editing ? "Edit" : "New"} Heresy</DialogTitle></DialogHeader>
          <div className="space-y-3">
            <Input placeholder="Slug" value={form.slug} onChange={e => setField("slug", e.target.value)} />
            <div className="grid grid-cols-2 gap-3">
              <Input placeholder="Name (EN)" value={form.name} onChange={e => setField("name", e.target.value)} />
              <Input placeholder="Name (AR)" value={form.name_ar} onChange={e => setField("name_ar", e.target.value)} dir="rtl" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Input placeholder="Period" value={form.period} onChange={e => setField("period", e.target.value)} />
              <Input placeholder="Period (AR)" value={form.period_ar} onChange={e => setField("period_ar", e.target.value)} dir="rtl" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Input placeholder="Founder" value={form.founder} onChange={e => setField("founder", e.target.value)} />
              <Input placeholder="Founder (AR)" value={form.founder_ar} onChange={e => setField("founder_ar", e.target.value)} dir="rtl" />
            </div>
            <Textarea placeholder="Summary (EN)" value={form.summary} onChange={e => setField("summary", e.target.value)} rows={4} />
            <Textarea placeholder="Summary (AR)" value={form.summary_ar} onChange={e => setField("summary_ar", e.target.value)} rows={4} dir="rtl" />
            <Textarea placeholder="Council Response (EN)" value={form.council_response} onChange={e => setField("council_response", e.target.value)} rows={3} />
            <Textarea placeholder="Council Response (AR)" value={form.council_response_ar} onChange={e => setField("council_response_ar", e.target.value)} rows={3} dir="rtl" />
            <Input placeholder="Key Figures (comma-separated)" value={form.key_figures.join(", ")} onChange={e => setField("key_figures", e.target.value.split(",").map(t => t.trim()).filter(Boolean))} />
            <Input placeholder="Key Figures AR (comma-separated)" value={form.key_figures_ar.join(", ")} onChange={e => setField("key_figures_ar", e.target.value.split(",").map(t => t.trim()).filter(Boolean))} dir="rtl" />
            <Button onClick={handleSave} className="w-full">{editing ? "Update" : "Create"}</Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Period</TableHead>
              <TableHead>Founder</TableHead>
              <TableHead className="w-24">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map(item => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.period}</TableCell>
                <TableCell>{item.founder}</TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" onClick={() => openEdit(item)}><Pencil className="w-4 h-4" /></Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(item.id)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {items.length === 0 && (
              <TableRow><TableCell colSpan={4} className="text-center text-muted-foreground py-8">No heresies yet</TableCell></TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminHeresies;
