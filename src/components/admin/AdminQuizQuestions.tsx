import { useState, useEffect } from "react";
import { useAdminApi } from "@/hooks/use-admin-api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Plus, Pencil, Trash2, Loader2 } from "lucide-react";
import { toast } from "sonner";

const emptyQuestion = {
  game_type: "bible-quiz" as string,
  question_en: "", question_ar: "",
  options: [] as { en: string; ar: string }[],
  correct_index: 0, is_truth: true,
  explanation_en: "", explanation_ar: "",
};

const AdminQuizQuestions = () => {
  const { list, create, update, remove } = useAdminApi();
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<any | null>(null);
  const [form, setForm] = useState({ ...emptyQuestion });
  const [filter, setFilter] = useState("all");
  const [optEn, setOptEn] = useState("");
  const [optAr, setOptAr] = useState("");

  const load = async () => {
    setLoading(true);
    try { const data = await list("quiz_questions"); setItems(data || []); }
    catch (e: any) { toast.error(e.message); }
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const filtered = filter === "all" ? items : items.filter(i => i.game_type === filter);

  const openNew = () => { setEditing(null); setForm({ ...emptyQuestion }); setOpen(true); };
  const openEdit = (item: any) => {
    setEditing(item);
    setForm({
      game_type: item.game_type, question_en: item.question_en, question_ar: item.question_ar,
      options: item.options || [], correct_index: item.correct_index || 0,
      is_truth: item.is_truth ?? true, explanation_en: item.explanation_en || "",
      explanation_ar: item.explanation_ar || "",
    });
    setOpen(true);
  };

  const addOption = () => {
    if (!optEn) return;
    setForm(p => ({ ...p, options: [...p.options, { en: optEn, ar: optAr }] }));
    setOptEn(""); setOptAr("");
  };

  const removeOption = (idx: number) => {
    setForm(p => ({ ...p, options: p.options.filter((_, i) => i !== idx) }));
  };

  const handleSave = async () => {
    try {
      if (editing) { await update("quiz_questions", editing.id, form); toast.success("Updated"); }
      else { await create("quiz_questions", form); toast.success("Created"); }
      setOpen(false); load();
    } catch (e: any) { toast.error(e.message); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete?")) return;
    try { await remove("quiz_questions", id); toast.success("Deleted"); load(); }
    catch (e: any) { toast.error(e.message); }
  };

  const setField = (key: string, val: any) => setForm(prev => ({ ...prev, [key]: val }));

  if (loading) return <div className="flex justify-center p-8"><Loader2 className="animate-spin" /></div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Quiz Questions ({filtered.length})</h2>
        <div className="flex gap-2">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-40"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="bible-quiz">Bible Quiz</SelectItem>
              <SelectItem value="truth-vs-heresy">Truth vs Heresy</SelectItem>
            </SelectContent>
          </Select>
          <Button size="sm" onClick={openNew}><Plus className="w-4 h-4 mr-1" /> Add</Button>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader><DialogTitle>{editing ? "Edit" : "New"} Question</DialogTitle></DialogHeader>
          <div className="space-y-3">
            <Select value={form.game_type} onValueChange={v => setField("game_type", v)}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="bible-quiz">Bible Quiz</SelectItem>
                <SelectItem value="truth-vs-heresy">Truth vs Heresy</SelectItem>
              </SelectContent>
            </Select>
            <Input placeholder="Question (EN)" value={form.question_en} onChange={e => setField("question_en", e.target.value)} />
            <Input placeholder="Question (AR)" value={form.question_ar} onChange={e => setField("question_ar", e.target.value)} dir="rtl" />

            {form.game_type === "truth-vs-heresy" && (
              <div className="flex items-center gap-2">
                <Label>Is Truth?</Label>
                <Switch checked={form.is_truth} onCheckedChange={v => setField("is_truth", v)} />
              </div>
            )}

            {form.game_type === "bible-quiz" && (
              <div className="border rounded-md p-3 space-y-2">
                <p className="text-sm font-medium">Options</p>
                {form.options.map((opt, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <span className={`w-6 h-6 flex items-center justify-center rounded-full text-xs ${i === form.correct_index ? "bg-primary text-primary-foreground" : "bg-muted"}`}>{i + 1}</span>
                    <span className="flex-1 truncate">{opt.en}</span>
                    <Button variant="ghost" size="sm" onClick={() => setField("correct_index", i)}>✓</Button>
                    <Button variant="ghost" size="icon" onClick={() => removeOption(i)}><Trash2 className="w-3 h-3" /></Button>
                  </div>
                ))}
                <div className="grid grid-cols-2 gap-2">
                  <Input placeholder="Option (EN)" value={optEn} onChange={e => setOptEn(e.target.value)} />
                  <Input placeholder="Option (AR)" value={optAr} onChange={e => setOptAr(e.target.value)} dir="rtl" />
                </div>
                <Button variant="outline" size="sm" onClick={addOption}>Add Option</Button>
              </div>
            )}

            <Textarea placeholder="Explanation (EN)" value={form.explanation_en} onChange={e => setField("explanation_en", e.target.value)} rows={3} />
            <Textarea placeholder="Explanation (AR)" value={form.explanation_ar} onChange={e => setField("explanation_ar", e.target.value)} rows={3} dir="rtl" />
            <Button onClick={handleSave} className="w-full">{editing ? "Update" : "Create"}</Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Question</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="w-24">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map(item => (
              <TableRow key={item.id}>
                <TableCell className="font-medium max-w-md truncate">{item.question_en}</TableCell>
                <TableCell>{item.game_type}</TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" onClick={() => openEdit(item)}><Pencil className="w-4 h-4" /></Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(item.id)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {filtered.length === 0 && (
              <TableRow><TableCell colSpan={3} className="text-center text-muted-foreground py-8">No questions yet</TableCell></TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminQuizQuestions;
