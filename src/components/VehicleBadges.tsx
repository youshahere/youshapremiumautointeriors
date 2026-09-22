import { cn } from "@/lib/utils";

export function VehicleBadges({ items, tone = "light" }: { items: string[]; tone?: "light" | "dark" }) {
  return (
    <ul className="flex flex-wrap gap-3">
      {items.map((v) => (
        <li
          key={v}
          className={cn(
            "rounded-full border px-5 py-2.5 text-[0.95rem] font-medium",
            tone === "dark" ? "border-copper/50 text-paper" : "border-ink/25 bg-paper text-ink",
          )}
        >
          {v}
        </li>
      ))}
    </ul>
  );
}
