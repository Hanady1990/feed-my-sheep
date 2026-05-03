import { useState, useEffect } from "react";
import { useAdminApi } from "@/hooks/use-admin-api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Pencil, Trash2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { PRAYER_CATEGORIES } from "@/data/prayers";

const empty = {
  slug: "", category: "general", title: "", title_ar: "",
  subtitle: "", subtitle_ar: "", content: "", content_ar: "", tags: [] as string[],
};

function slugify(input: string): string {
  return (input || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

const AdminPrayers = () => {
  const { list, create, update, remove } = useAdminApi();
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<any | null>(null);
  const [form, setForm] = useState<any>({ ...empty });

  const load = async () => {
    setLoading(true);
    try { setItems(await list("prayers") || []); }
    catch (e: any) { toast.error(e.message); }
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const openNew = () => { setEditing(null); setForm({ ...empty }); setOpen(true); };
  const openEdit = (item: any) => {
    setEditing(item);
    setForm({
      slug: item.slug, category: item.category, title: item.title, title_ar: item.title_ar,
      subtitle: item.subtitle || "", subtitle_ar: item.subtitle_ar || "",
      content: item.content, content_ar: item.content_ar, tags: item.tags || [],
    });
    setOpen(true);
  };

  const handleSave = async () => {
    try {
      if (editing) { await update("prayers", editing.id, form); toast.success("Updated"); }
      else { await create("prayers", form); toast.success("Created"); }
      setOpen(false); load();
    } catch (e: any) { toast.error(e.message); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this prayer?")) return;
    try { await remove("prayers", id); toast.success("Deleted"); load(); }
    catch (e: any) { toast.error(e.message); }
  };

  const setF = (k: string, v: any) => setForm((p: any) => ({ ...p, [k]: v }));

  if (loading) return <div className="flex justify-center p-8"><Loader2 className="animate-spin" /></div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Prayers ({items.length})</h2>
        <Button size="sm" onClick={openNew}><Plus className="w-4 h-4 mr-1" /> Add</Button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader><DialogTitle>{editing ? "Edit" : "New"} Prayer</DialogTitle></DialogHeader>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Input placeholder="Slug" value={form.slug} onChange={e => setF("slug", e.target.value)} />
              <Select value={form.category} onValueChange={v => setF("category", v)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>{PRAYER_CATEGORIES.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <Input placeholder="Title (EN)" value={form.title} onChange={e => setF("title", e.target.value)} />
            <Input placeholder="Title (AR)" value={form.title_ar} onChange={e => setF("title_ar", e.target.value)} dir="rtl" />
            <Input placeholder="Subtitle (EN)" value={form.subtitle} onChange={e => setF("subtitle", e.target.value)} />
            <Input placeholder="Subtitle (AR)" value={form.subtitle_ar} onChange={e => setF("subtitle_ar", e.target.value)} dir="rtl" />
            <Textarea placeholder="Content (EN)" value={form.content} onChange={e => setF("content", e.target.value)} rows={6} />
            <Textarea placeholder="Content (AR)" value={form.content_ar} onChange={e => setF("content_ar", e.target.value)} rows={6} dir="rtl" />
            <Input placeholder="Tags (comma-separated)" value={Array.isArray(form.tags) ? form.tags.join(", ") : ""}
              onChange={e => setF("tags", e.target.value.split(",").map((t: string) => t.trim()).filter(Boolean))} />
            <Button onClick={handleSave} className="w-full">{editing ? "Update" : "Create"}</Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead><TableHead>Category</TableHead><TableHead>Slug</TableHead><TableHead className="w-24">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map(item => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>{item.category}</TableCell>
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
              <TableRow><TableCell colSpan={4} className="text-center text-muted-foreground py-8">No prayers yet</TableCell></TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminPrayers;
