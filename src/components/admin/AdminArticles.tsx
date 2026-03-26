import { useState, useEffect } from "react";
import { useAdminApi } from "@/hooks/use-admin-api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Pencil, Trash2, Loader2 } from "lucide-react";
import { toast } from "sonner";

const SECTIONS = ["teachings", "fathers", "papal", "vatican", "heresies", "social", "saints"] as const;

const emptyArticle = {
  slug: "", section: "teachings" as string, title: "", title_ar: "",
  subtitle: "", subtitle_ar: "", author: "", date: "", read_time: "",
  content: "", content_ar: "", catechism_refs: [], related_ids: [], tags: [],
};

const AdminArticles = () => {
  const { list, create, update, remove } = useAdminApi();
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<any | null>(null);
  const [form, setForm] = useState({ ...emptyArticle });

  const load = async () => {
    setLoading(true);
    try {
      const data = await list("articles");
      setItems(data || []);
    } catch (e: any) { toast.error(e.message); }
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const openNew = () => { setEditing(null); setForm({ ...emptyArticle }); setOpen(true); };
  const openEdit = (item: any) => {
    setEditing(item);
    setForm({
      slug: item.slug, section: item.section, title: item.title, title_ar: item.title_ar,
      subtitle: item.subtitle || "", subtitle_ar: item.subtitle_ar || "",
      author: item.author || "", date: item.date || "", read_time: item.read_time || "",
      content: item.content, content_ar: item.content_ar,
      catechism_refs: item.catechism_refs || [], related_ids: item.related_ids || [], tags: item.tags || [],
    });
    setOpen(true);
  };

  const handleSave = async () => {
    try {
      if (editing) {
        await update("articles", editing.id, form);
        toast.success("Updated");
      } else {
        await create("articles", form);
        toast.success("Created");
      }
      setOpen(false);
      load();
    } catch (e: any) { toast.error(e.message); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this article?")) return;
    try { await remove("articles", id); toast.success("Deleted"); load(); }
    catch (e: any) { toast.error(e.message); }
  };

  const setField = (key: string, val: any) => setForm(prev => ({ ...prev, [key]: val }));

  if (loading) return <div className="flex justify-center p-8"><Loader2 className="animate-spin" /></div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Articles ({items.length})</h2>
        <Button size="sm" onClick={openNew}><Plus className="w-4 h-4 mr-1" /> Add</Button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader><DialogTitle>{editing ? "Edit" : "New"} Article</DialogTitle></DialogHeader>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Input placeholder="Slug" value={form.slug} onChange={e => setField("slug", e.target.value)} />
              <Select value={form.section} onValueChange={v => setField("section", v)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>{SECTIONS.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <Input placeholder="Title (EN)" value={form.title} onChange={e => setField("title", e.target.value)} />
            <Input placeholder="Title (AR)" value={form.title_ar} onChange={e => setField("title_ar", e.target.value)} dir="rtl" />
            <div className="grid grid-cols-3 gap-3">
              <Input placeholder="Author" value={form.author} onChange={e => setField("author", e.target.value)} />
              <Input placeholder="Date" value={form.date} onChange={e => setField("date", e.target.value)} />
              <Input placeholder="Read time" value={form.read_time} onChange={e => setField("read_time", e.target.value)} />
            </div>
            <Textarea placeholder="Content (EN)" value={form.content} onChange={e => setField("content", e.target.value)} rows={6} />
            <Textarea placeholder="Content (AR)" value={form.content_ar} onChange={e => setField("content_ar", e.target.value)} rows={6} dir="rtl" />
            <Input placeholder="Tags (comma-separated)" value={Array.isArray(form.tags) ? form.tags.join(", ") : ""} onChange={e => setField("tags", e.target.value.split(",").map(t => t.trim()).filter(Boolean))} />
            <Button onClick={handleSave} className="w-full">{editing ? "Update" : "Create"}</Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Section</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead className="w-24">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map(item => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>{item.section}</TableCell>
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
              <TableRow><TableCell colSpan={4} className="text-center text-muted-foreground py-8">No articles yet</TableCell></TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminArticles;
