import PortalShell from "@/components/PortalShell";
import PageHeader from "@/components/PageHeader";
import { approvalRequests } from "@/lib/data";

export default function ApprovalsPage() {
  return (
    <PortalShell active="approvals">
      <PageHeader
        title="Approvals"
        subtitle="Items waiting on you, grouped into one request."
      />

      <div className="flex flex-col gap-5">
        {approvalRequests.map((request) => (
          <div
            key={request.approver}
            className="rounded-2xl border border-gray-100 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-ink">
                  {request.approver}
                </h3>
                <p className="text-sm text-gray-500">{request.email}</p>
              </div>
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                {request.items.length}{" "}
                {request.items.length === 1 ? "item" : "items"}
              </span>
            </div>

            <div className="mt-4 divide-y divide-gray-50">
              {request.items.map((item) => (
                <div
                  key={`${item.tool}-${item.hire}`}
                  className="flex items-center justify-between py-3"
                >
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="text-sm font-semibold text-ink">
                        {item.tool}{" "}
                        <span className="font-normal text-gray-500">
                          · {item.scope}
                        </span>
                      </p>
                      <p className="text-xs text-gray-500">
                        for {item.hire}
                      </p>
                    </div>
                    {item.sensitive && (
                      <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">
                        Needs manual approval
                      </span>
                    )}
                    {item.step && (
                      <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                        {item.step}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-gray-400">
                    {item.waiting}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-gray-100 p-6">
        <label className="mb-2 block text-sm font-medium text-ink">
          Reply as approver
        </label>
        <textarea
          rows={3}
          placeholder="e.g. approved for GroundCover"
          className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm text-ink placeholder-gray-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
        />
        <div className="mt-3 flex justify-end">
          <button
            type="button"
            className="rounded-xl bg-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
          >
            Send reply
          </button>
        </div>

        <div className="mt-6 border-t border-gray-100 pt-5">
          <p className="text-xs font-medium text-gray-400">
            Detected intent: <span className="text-ink">Approve</span>
          </p>
          <div className="mt-3 grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-emerald-50 p-4">
              <p className="text-xs font-medium text-emerald-700">Applied</p>
              <p className="mt-1 text-sm font-semibold text-ink">
                Databricks · prod write
              </p>
              <p className="text-xs text-gray-500">
                Arjun Mehta — Approved
              </p>
            </div>
            <div className="rounded-xl bg-red-50 p-4">
              <p className="text-xs font-medium text-red-700">
                Not authorised — you don&apos;t own this item
              </p>
              <p className="mt-1 text-sm font-semibold text-ink">
                GroundCover · standard
              </p>
              <p className="text-xs text-gray-500">Arjun Mehta</p>
            </div>
          </div>
        </div>
      </div>
    </PortalShell>
  );
}
