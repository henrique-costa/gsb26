import CountUp from "@/components/CountUp";

interface StatCounterProps {
  to: number;
  suffix?: string;
  label: string;
  className?: string;
}

export default function StatCounter({
  to,
  suffix = "",
  label,
  className = "",
}: StatCounterProps) {
  return (
    <div className={className}>
      <div className="font-heading text-3xl md:text-4xl font-bold text-[#0A0A0A]">
        <CountUp to={to} separator="." />
        {suffix}
      </div>
      <p className="text-sm text-[#4A473A] mt-1">{label}</p>
    </div>
  );
}
