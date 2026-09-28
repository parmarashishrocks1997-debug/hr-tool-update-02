import PortalShell from "@/components/PortalShell";
import PageHeader from "@/components/PageHeader";
import { auditLog } from "@/lib/data";

export default function AuditLogPage() {
  return (
    <PortalShell active="audit">
      <PageHeader
        title="Audit log"
        subtitle="Every request, nudge, approval and refusal."
      />

      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-100 text-left text-xs font-medium text-gray-400">
            <th className="py-2 pr-4 font-medium">Timestamp</th>
            <th className="py-2 pr-4 font-medium">Actor</th>
            <th className="py-2 pr-4 font-medium">Action</th>
            <th className="py-2 font-medium">Detail</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {auditLog.map((row, i) => (
            <tr key={i} className={row.refused ? "bg-red-50" : undefined}>
              <td
                className={`whitespace-nowrap py-3 pr-4 align-top text-gray-500 ${
                  row.refused ? "text-red-700" : ""
                }`}
              >
                {row.timestamp}
              </td>
              <td className="whitespace-nowrap py-3 pr-4 align-top">
                <span
                  className={`font-medium ${
                    row.refused ? "text-red-700" : "text-ink"
                  }`}
                >
                  {row.actor}
                </span>
                {row.actorType === "agent" && (
                  <span className="ml-2 rounded-full bg-brand/10 px-2 py-0.5 text-[11px] font-medium text-brand">
                    agent
                  </span>
                )}
              </td>
              <td
                className={`whitespace-nowrap py-3 pr-4 align-top font-medium ${
                  row.refused ? "text-red-700" : "text-ink"
                }`}
              >
                {row.action}
              </td>
              <td
                className={`py-3 align-top ${
                  row.refused ? "text-red-700" : "text-gray-500"
                }`}
              >
                {row.detail}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </PortalShell>
  );
}
