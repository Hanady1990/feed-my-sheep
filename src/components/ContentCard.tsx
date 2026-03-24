import { ReactNode, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface ContentCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  gold?: boolean;
  copyText?: string;
}

const ContentCard = ({ children, className, gold, copyText, ...props }: ContentCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (!copyText) return;
    await navigator.clipboard.writeText(copyText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [copyText]);

  return (
    <div
      className={cn(
        "rounded-lg border bg-card p-4 shadow-scripture transition-all relative group",
        gold ? "border-gold-light" : "border-border",
        className
      )}
      {...props}
    >
      {children}
      {copyText && (
        <button
          onClick={handleCopy}
          className="absolute top-2 end-2 p-1.5 rounded-md opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity text-muted-foreground hover:text-foreground hover:bg-muted"
          aria-label="Copy"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
        </button>
      )}
    </div>
  );
};

export default ContentCard;
