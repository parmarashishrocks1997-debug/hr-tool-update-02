import PortalShell from "@/components/PortalShell";
import PageHeader from "@/components/PageHeader";
import StatCard from "@/components/StatCard";
import StatusPill from "@/components/StatusPill";
import { hires } from "@/lib/data";

function countByStatus(status: "awaiting_approval" | "escalated") {
  return hires.reduce(
    (sum, hire) =>
      sum + hire.tasks.filter((task) => task.status === status).length,
    0
  );
}

export default function DashboardPage() {
  const awaitingApproval = countByStatus("awaiting_approval");
  const escalated = countByStatus("escalated");

  return (
    <PortalShell active="dashboard">
      <PageHeader
        title="Onboarding dashboard"
        subtitle="Access provisioning status across active hires."
      />

      <div className="flex gap-4">
        <StatCard label="Active hires" value={hires.length} />
        <StatCard
          label="Tasks awaiting approval"
          value={awaitingApproval}
          accent="amber"
        />
        <StatCard label="Escalated" value={escalated} accent="red" />
      </div>

      <div className="mt-8 flex flex-col gap-6">
        {hires.map((hire) => (
          <div
            key={hire.name}
            className="rounded-2xl border border-gray-100 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-ink">{hire.name}</h3>
                <p className="text-sm text-gray-500">
                  {hire.department} · {hire.startLabel}
                </p>
              </div>
              <div className="w-48">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Readiness</span>
                  <span className="font-semibold text-ink">
                    {hire.readiness}%
                  </span>
                </div>
                <div className="mt-1.5 h-1.5 w-full rounded-full bg-gray-100">
                  <div
                    className="h-1.5 rounded-full bg-brand"
                    style={{ width: `${hire.readiness}%` }}
                  />
                </div>
              </div>
            </div>

            <table className="mt-5 w-full text-sm">
              <thead>
                <tr className="text-left text-xs font-medium text-gray-400">
                  <th className="pb-2 pr-4 font-medium">Tool</th>
                  <th className="pb-2 pr-4 font-medium">Scope</th>
                  <th className="pb-2 pr-4 font-medium">Approver</th>
                  <th className="pb-2 pr-4 font-medium">Status</th>
                  <th className="pb-2 font-medium">Last nudge</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {hire.tasks.map((task) => (
                  <tr key={task.tool}>
                    <td className="py-2.5 pr-4 font-medium text-ink">
                      {task.tool}
                    </td>
                    <td className="py-2.5 pr-4 text-gray-500">{task.scope}</td>
                    <td className="py-2.5 pr-4 text-gray-500">
                      {task.approver}
                    </td>
                    <td className="py-2.5 pr-4">
                      <StatusPill status={task.status} />
                    </td>
                    <td className="py-2.5 text-gray-500">{task.lastNudge}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </PortalShell>
  );
}
