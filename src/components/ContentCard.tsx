import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContentCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  gold?: boolean;
}

const ContentCard = ({ children, className, gold, ...props }: ContentCardProps) => (
  <div
    className={cn(
      "rounded-lg border bg-card p-4 shadow-scripture transition-all",
      gold ? "border-gold-light" : "border-border",
      className
    )}
    {...props}
  >
    {children}
  </div>
);

export default ContentCard;
