export type TaskStatus =
  | "pending"
  | "awaiting_approval"
  | "escalated"
  | "provisioned"
  | "blocked";

const STATUS_STYLES: Record<
  TaskStatus,
  { label: string; bg: string; text: string; dot: string }
> = {
  pending: {
    label: "Pending",
    bg: "bg-gray-100",
    text: "text-gray-500",
    dot: "bg-gray-400",
  },
  awaiting_approval: {
    label: "Awaiting approval",
    bg: "bg-amber-50",
    text: "text-amber-700",
    dot: "bg-amber-500",
  },
  escalated: {
    label: "Escalated",
    bg: "bg-red-50",
    text: "text-red-700",
    dot: "bg-red-500",
  },
  provisioned: {
    label: "Provisioned",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    dot: "bg-emerald-500",
  },
  blocked: {
    label: "Blocked",
    bg: "bg-slate-200",
    text: "text-slate-700",
    dot: "bg-slate-500",
  },
};

export default function StatusPill({ status }: { status: TaskStatus }) {
  const style = STATUS_STYLES[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${style.bg} ${style.text}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
      {style.label}
    </span>
  );
}
