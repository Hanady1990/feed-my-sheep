import { Share2, Link2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

interface ShareMenuProps {
  title: string;
  text?: string;
  url?: string;
}

const ShareMenu = ({ title, text, url }: ShareMenuProps) => {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");
  const shareText = text || title;

  const handleNativeShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title, text: shareText, url: shareUrl });
        return;
      }
    } catch (err) {
      // user canceled or unsupported — fall through
      if ((err as Error).name === "AbortError") return;
    }
    handleCopy();
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    toast(language === "ar" ? "تم نسخ الرابط" : "Link copied to clipboard");
    setTimeout(() => setCopied(false), 1500);
  };

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedText = encodeURIComponent(shareText);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
    },
    {
      name: "Telegram",
      href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      name: "X (Twitter)",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
    },
    {
      name: language === "ar" ? "البريد الإلكتروني" : "Email",
      href: `mailto:?subject=${encodedTitle}&body=${encodedText}%20${encodedUrl}`,
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <Share2 className="h-4 w-4" />
          <span className="font-body text-xs">
            {language === "ar" ? "مشاركة" : "Share"}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52">
        {typeof navigator !== "undefined" && "share" in navigator && (
          <>
            <DropdownMenuItem onClick={handleNativeShare}>
              <Share2 className="h-4 w-4" />
              <span className="font-body text-xs">
                {language === "ar" ? "مشاركة عبر..." : "Share via..."}
              </span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </>
        )}
        {links.map((link) => (
          <DropdownMenuItem key={link.name} asChild>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <span className="font-body text-xs">{link.name}</span>
            </a>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleCopy}>
          {copied ? <Check className="h-4 w-4 text-green-500" /> : <Link2 className="h-4 w-4" />}
          <span className="font-body text-xs">
            {language === "ar" ? "نسخ الرابط" : "Copy link"}
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ShareMenu;
