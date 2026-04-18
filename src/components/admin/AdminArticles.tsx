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

const SECTIONS = ["teachings", "fathers", "papal", "vatican", "heresies", "social", "saints"] as const;

const emptyMetadata = {
  topicCategory: "", topicCategoryAr: "",
  pope: "", year: "", docType: "",
  newsDate: "", summary: "", summaryAr: "",
  era: "",
};

const emptyArticle = {
  slug: "", section: "teachings" as string, title: "", title_ar: "",
  subtitle: "", subtitle_ar: "", author: "", date: "", read_time: "",
  content: "", content_ar: "", catechism_refs: [], related_ids: [], tags: [],
  metadata: { ...emptyMetadata },
};

const AdminArticles = () => {
  const { list, create, update, remove } = useAdminApi();
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<any | null>(null);
  const [form, setForm] = useState<any>({ ...emptyArticle });

  const load = async () => {
    setLoading(true);
    try {
      const data = await list("articles");
      setItems(data || []);
    } catch (e: any) { toast.error(e.message); }
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const openNew = () => { setEditing(null); setForm({ ...emptyArticle, metadata: { ...emptyMetadata } }); setOpen(true); };
  const openEdit = (item: any) => {
    setEditing(item);
    setForm({
      slug: item.slug, section: item.section, title: item.title, title_ar: item.title_ar,
      subtitle: item.subtitle || "", subtitle_ar: item.subtitle_ar || "",
      author: item.author || "", date: item.date || "", read_time: item.read_time || "",
      content: item.content, content_ar: item.content_ar,
      catechism_refs: item.catechism_refs || [], related_ids: item.related_ids || [], tags: item.tags || [],
      metadata: { ...emptyMetadata, ...(item.metadata || {}) },
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

  const setField = (key: string, val: any) => setForm((prev: any) => ({ ...prev, [key]: val }));
  const setMeta = (key: string, val: any) =>
    setForm((prev: any) => ({ ...prev, metadata: { ...prev.metadata, [key]: val } }));

  if (loading) return <div className="flex justify-center p-8"><Loader2 className="animate-spin" /></div>;

  const renderSectionFields = () => {
    switch (form.section) {
      case "social":
        return (
          <div className="rounded-md border border-dashed p-3 space-y-3">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Social topic</p>
            <div className="grid grid-cols-2 gap-3">
              <Input placeholder="Topic Category (EN) — e.g. Bioethics" value={form.metadata.topicCategory} onChange={e => setMeta("topicCategory", e.target.value)} />
              <Input placeholder="Topic Category (AR)" value={form.metadata.topicCategoryAr} onChange={e => setMeta("topicCategoryAr", e.target.value)} dir="rtl" />
            </div>
          </div>
        );
      case "papal":
        return (
          <div className="rounded-md border border-dashed p-3 space-y-3">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Papal document</p>
            <div className="grid grid-cols-3 gap-3">
              <Input placeholder="Pope — e.g. Francis" value={form.metadata.pope} onChange={e => setMeta("pope", e.target.value)} />
              <Input placeholder="Year — e.g. 2020" value={form.metadata.year} onChange={e => setMeta("year", e.target.value)} />
              <Input placeholder="Type — e.g. Encyclical" value={form.metadata.docType} onChange={e => setMeta("docType", e.target.value)} />
            </div>
          </div>
        );
      case "vatican":
        return (
          <div className="rounded-md border border-dashed p-3 space-y-3">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Vatican news</p>
            <Input placeholder="News Date — e.g. March 14, 2026" value={form.metadata.newsDate} onChange={e => setMeta("newsDate", e.target.value)} />
            <Textarea placeholder="Short summary (EN)" value={form.metadata.summary} onChange={e => setMeta("summary", e.target.value)} rows={2} />
            <Textarea placeholder="Short summary (AR)" value={form.metadata.summaryAr} onChange={e => setMeta("summaryAr", e.target.value)} rows={2} dir="rtl" />
          </div>
        );
      case "fathers":
        return (
          <div className="rounded-md border border-dashed p-3 space-y-3">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Church Father</p>
            <Input placeholder="Era / Years — e.g. 354–430 AD" value={form.metadata.era} onChange={e => setMeta("era", e.target.value)} />
          </div>
        );
      default:
        return null;
    }
  };

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
            <Input placeholder="Subtitle (EN)" value={form.subtitle} onChange={e => setField("subtitle", e.target.value)} />
            <Input placeholder="Subtitle (AR)" value={form.subtitle_ar} onChange={e => setField("subtitle_ar", e.target.value)} dir="rtl" />
            <div className="grid grid-cols-3 gap-3">
              <Input placeholder="Author" value={form.author} onChange={e => setField("author", e.target.value)} />
              <Input placeholder="Date" value={form.date} onChange={e => setField("date", e.target.value)} />
              <Input placeholder="Read time" value={form.read_time} onChange={e => setField("read_time", e.target.value)} />
            </div>

            {renderSectionFields()}

            <Textarea placeholder="Content (EN)" value={form.content} onChange={e => setField("content", e.target.value)} rows={6} />
            <Textarea placeholder="Content (AR)" value={form.content_ar} onChange={e => setField("content_ar", e.target.value)} rows={6} dir="rtl" />
            <Input placeholder="Tags (comma-separated)" value={Array.isArray(form.tags) ? form.tags.join(", ") : ""} onChange={e => setField("tags", e.target.value.split(",").map((t: string) => t.trim()).filter(Boolean))} />
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
