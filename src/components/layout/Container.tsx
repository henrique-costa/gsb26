import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("max-w-[1470px] mx-auto px-4 lg:px-[15px]", className)}>
      {children}
    </div>
  );
}
