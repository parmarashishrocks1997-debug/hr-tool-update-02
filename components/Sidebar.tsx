import Link from "next/link";
import {
  CheckCircleIcon,
  ClipboardIcon,
  GridIcon,
  SearchIcon,
} from "./icons";

export type NavKey = "dashboard" | "intake" | "approvals" | "audit";

const NAV_ITEMS: { key: NavKey; label: string; href: string; icon: typeof GridIcon }[] = [
  { key: "dashboard", label: "Dashboard", href: "/dashboard", icon: GridIcon },
  { key: "intake", label: "Intake form", href: "/intake", icon: ClipboardIcon },
  { key: "approvals", label: "Approvals", href: "/approvals", icon: CheckCircleIcon },
  { key: "audit", label: "Audit log", href: "/audit-log", icon: SearchIcon },
];

export default function Sidebar({ active }: { active: NavKey }) {
  return (
    <aside className="flex h-full w-72 shrink-0 flex-col justify-between bg-navy px-5 py-6">
      <div>
        <div className="mb-8 flex items-center gap-3 px-2">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand">
            <ClipboardIcon className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold text-white">HR Portal</span>
        </div>

        <nav className="flex flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = item.key === active;
            const Icon = item.icon;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-brand text-white"
                    : "text-gray-400 hover:bg-white/5 hover:text-gray-200"
                }`}
              >
                <Icon className="h-4.5 w-4.5" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex items-center gap-3 rounded-xl px-2 py-2">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
          SK
        </div>
        <div className="leading-tight">
          <p className="text-sm font-bold text-white">Suraj Khanna</p>
          <p className="text-xs text-gray-400">HR Manager</p>
        </div>
      </div>
    </aside>
  );
}
