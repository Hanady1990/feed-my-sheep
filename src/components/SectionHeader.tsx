import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeader = ({ title, subtitle, className }: SectionHeaderProps) => (
  <div className={cn("mb-4", className)}>
    <h2 className="font-display text-xl tracking-wide text-foreground">{title}</h2>
    {subtitle && <p className="mt-1 font-body text-sm text-muted-foreground">{subtitle}</p>}
    <div className="mt-2 h-px w-12 bg-gold" />
  </div>
);

export default SectionHeader;
