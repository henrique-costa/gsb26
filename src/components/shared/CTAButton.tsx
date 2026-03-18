import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function CTAButton({
  children,
  variant = "primary",
  href,
  onClick,
  className,
}: CTAButtonProps) {
  const baseClasses = cn(
    "btn-text-slide inline-flex items-center justify-center rounded-[4px] px-[35px] py-[13px] pb-[11px] text-sm font-semibold tracking-wide transition-colors cursor-pointer",
    variant === "primary" && "bg-[#C3002F] text-white hover:bg-[#A00025]",
    variant === "secondary" && "bg-black text-white hover:bg-black/90",
    variant === "outline" &&
      "border-2 border-black text-black hover:bg-black hover:text-white",
    className,
  );

  const content = (
    <>
      <span className="btn-text">{children}</span>
      <span className="btn-text-hover">{children}</span>
    </>
  );

  if (href) {
    return (
      <Link to={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
}
