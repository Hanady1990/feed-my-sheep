import { useState, useEffect } from "react";
import { useAdminApi } from "@/hooks/use-admin-api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Pencil, Trash2, Loader2 } from "lucide-react";
import { toast } from "sonner";

const emptySaint = {
  slug: "", name_en: "", name_ar: "", feast_en: "", feast_ar: "",
  years: "", image_url: "", bio_en: "", bio_ar: "", full_bio_en: "", full_bio_ar: "",
  patron_of_en: "", patron_of_ar: "", sayings: [] as any[], books: [] as any[],
};

const AdminSaints = () => {
  const { list, create, update, remove } = useAdminApi();
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<any | null>(null);
  const [form, setForm] = useState({ ...emptySaint });
  const [sayingEn, setSayingEn] = useState("");
  const [sayingAr, setSayingAr] = useState("");

  const load = async () => {
    setLoading(true);
    try { const data = await list("saints"); setItems(data || []); }
    catch (e: any) { toast.error(e.message); }
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const openNew = () => { setEditing(null); setForm({ ...emptySaint }); setOpen(true); };
  const openEdit = (item: any) => {
    setEditing(item);
    setForm({
      slug: item.slug, name_en: item.name_en, name_ar: item.name_ar,
      feast_en: item.feast_en, feast_ar: item.feast_ar, years: item.years || "",
      image_url: item.image_url || "", bio_en: item.bio_en, bio_ar: item.bio_ar,
      full_bio_en: item.full_bio_en, full_bio_ar: item.full_bio_ar,
      patron_of_en: item.patron_of_en || "", patron_of_ar: item.patron_of_ar || "",
      sayings: item.sayings || [], books: item.books || [],
    });
    setOpen(true);
  };

  const addSaying = () => {
    if (!sayingEn) return;
    setForm(p => ({ ...p, sayings: [...p.sayings, { en: sayingEn, ar: sayingAr }] }));
    setSayingEn(""); setSayingAr("");
  };

  const removeSaying = (idx: number) => {
    setForm(p => ({ ...p, sayings: p.sayings.filter((_, i) => i !== idx) }));
  };

  const handleSave = async () => {
    try {
      if (editing) { await update("saints", editing.id, form); toast.success("Updated"); }
      else { await create("saints", form); toast.success("Created"); }
      setOpen(false); load();
    } catch (e: any) { toast.error(e.message); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this saint?")) return;
    try { await remove("saints", id); toast.success("Deleted"); load(); }
    catch (e: any) { toast.error(e.message); }
  };

  const setField = (key: string, val: any) => setForm(prev => ({ ...prev, [key]: val }));

  if (loading) return <div className="flex justify-center p-8"><Loader2 className="animate-spin" /></div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Saints ({items.length})</h2>
        <Button size="sm" onClick={openNew}><Plus className="w-4 h-4 mr-1" /> Add</Button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader><DialogTitle>{editing ? "Edit" : "New"} Saint</DialogTitle></DialogHeader>
          <div className="space-y-3">
            <Input placeholder="Slug" value={form.slug} onChange={e => setField("slug", e.target.value)} />
            <div className="grid grid-cols-2 gap-3">
              <Input placeholder="Name (EN)" value={form.name_en} onChange={e => setField("name_en", e.target.value)} />
              <Input placeholder="Name (AR)" value={form.name_ar} onChange={e => setField("name_ar", e.target.value)} dir="rtl" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Input placeholder="Feast (EN)" value={form.feast_en} onChange={e => setField("feast_en", e.target.value)} />
              <Input placeholder="Feast (AR)" value={form.feast_ar} onChange={e => setField("feast_ar", e.target.value)} dir="rtl" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Input placeholder="Years (e.g. 1182-1226)" value={form.years} onChange={e => setField("years", e.target.value)} />
              <Input placeholder="Image URL" value={form.image_url} onChange={e => setField("image_url", e.target.value)} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Input placeholder="Patron of (EN)" value={form.patron_of_en} onChange={e => setField("patron_of_en", e.target.value)} />
              <Input placeholder="Patron of (AR)" value={form.patron_of_ar} onChange={e => setField("patron_of_ar", e.target.value)} dir="rtl" />
            </div>
            <Textarea placeholder="Short Bio (EN)" value={form.bio_en} onChange={e => setField("bio_en", e.target.value)} rows={3} />
            <Textarea placeholder="Short Bio (AR)" value={form.bio_ar} onChange={e => setField("bio_ar", e.target.value)} rows={3} dir="rtl" />
            <Textarea placeholder="Full Bio (EN)" value={form.full_bio_en} onChange={e => setField("full_bio_en", e.target.value)} rows={5} />
            <Textarea placeholder="Full Bio (AR)" value={form.full_bio_ar} onChange={e => setField("full_bio_ar", e.target.value)} rows={5} dir="rtl" />

            <div className="border rounded-md p-3 space-y-2">
              <p className="text-sm font-medium">Sayings</p>
              {form.sayings.map((s: any, i: number) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <span className="flex-1 truncate">{s.en}</span>
                  <Button variant="ghost" size="icon" onClick={() => removeSaying(i)}><Trash2 className="w-3 h-3" /></Button>
                </div>
              ))}
              <div className="grid grid-cols-2 gap-2">
                <Input placeholder="Saying (EN)" value={sayingEn} onChange={e => setSayingEn(e.target.value)} />
                <Input placeholder="Saying (AR)" value={sayingAr} onChange={e => setSayingAr(e.target.value)} dir="rtl" />
              </div>
              <Button variant="outline" size="sm" onClick={addSaying}>Add Saying</Button>
            </div>

            <Button onClick={handleSave} className="w-full">{editing ? "Update" : "Create"}</Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Feast</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead className="w-24">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map(item => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name_en}</TableCell>
                <TableCell>{item.feast_en}</TableCell>
                <TableCell className="text-muted-foreground">{item.slug}</TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" onClick={() => openEdit(item)}><Pencil className="w-4 h-4" /></Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(item.id)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {items.length === 0 && (
              <TableRow><TableCell colSpan={4} className="text-center text-muted-foreground py-8">No saints yet</TableCell></TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminSaints;
