export default function StatCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: number | string;
  accent?: "brand" | "amber" | "red";
}) {
  const valueColor =
    accent === "amber"
      ? "text-amber-600"
      : accent === "red"
      ? "text-red-600"
      : "text-ink";

  return (
    <div className="flex-1 rounded-2xl border border-gray-100 bg-white p-5">
      <p className={`text-3xl font-bold ${valueColor}`}>{value}</p>
      <p className="mt-1 text-sm text-gray-500">{label}</p>
    </div>
  );
}
