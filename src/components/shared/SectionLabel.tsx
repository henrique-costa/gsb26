import { cn } from "@/lib/utils";

interface SectionLabelProps {
  text: string;
  variant?: "light" | "dark";
}

export default function SectionLabel({
  text,
  variant = "light",
}: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-block text-xs font-medium uppercase tracking-[0.15em] px-4 py-1.5 rounded-full",
        variant === "light"
          ? "bg-[#C3002F]/10 text-[#C3002F]"
          : "bg-white/10 text-white/80",
      )}
    >
      {text}
    </span>
  );
}
