import { cn } from "@/lib/utils";

export function VehicleBadges({ items, tone = "light" }: { items: string[]; tone?: "light" | "dark" }) {
  return (
    <ul className="flex flex-wrap gap-3">
      {items.map((v) => (
        <li
          key={v}
          className={cn(
            "rounded-full border px-5 py-2.5 text-[0.95rem] font-medium",
            tone === "dark" ? "border-thread/50 text-paper" : "border-hide/25 bg-paper text-hide",
          )}
        >
          {v}
        </li>
      ))}
    </ul>
  );
}
