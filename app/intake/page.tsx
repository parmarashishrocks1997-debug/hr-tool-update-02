import PortalShell from "@/components/PortalShell";
import PageHeader from "@/components/PageHeader";
import { ChevronDownIcon } from "@/components/icons";

function FieldLabel({
  children,
  hint,
}: {
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <label className="mb-2 block text-sm font-medium text-ink">
      {children}
      {hint && <span className="font-normal text-gray-400"> {hint}</span>}
    </label>
  );
}

function TextInput({ placeholder }: { placeholder: string }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-ink placeholder-gray-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
    />
  );
}

function SelectInput({
  placeholder,
  selected,
}: {
  placeholder: string;
  selected?: string;
}) {
  return (
    <div className="relative">
      <select
        defaultValue={selected ?? ""}
        className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {selected && <option value={selected}>{selected}</option>}
      </select>
      <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
    </div>
  );
}

function Section({
  label,
  description,
  children,
}: {
  label: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[220px_1fr] gap-10 border-b border-gray-100 py-8 first:pt-0 last:border-b-0">
      <div>
        <h2 className="text-base font-bold text-ink">{label}</h2>
        <p className="mt-1 text-xs text-gray-500">{description}</p>
      </div>
      <div className="grid max-w-2xl grid-cols-2 gap-6">{children}</div>
    </div>
  );
}

export default function IntakePage() {
  return (
    <PortalShell active="intake">
      <PageHeader
        title="New hire intake"
        subtitle="Confirm a new hire and generate their hire ID."
      />

      <div>
        <Section
          label="Candidate"
          description="Who is joining, and where to reach them today."
        >
          <div>
            <FieldLabel>Candidate name</FieldLabel>
            <TextInput placeholder="e.g. Jane Doe" />
          </div>
          <div>
            <FieldLabel hint="(official email isn't provisioned yet)">
              Candidate&apos;s personal email
            </FieldLabel>
            <TextInput placeholder="jane@example.com" />
          </div>
        </Section>

        <Section
          label="Assignment"
          description="Team, role and the manager who owns onboarding."
        >
          <div>
            <FieldLabel>Department</FieldLabel>
            <SelectInput placeholder="Select department" />
          </div>
          <div>
            <FieldLabel>Role</FieldLabel>
            <SelectInput placeholder="Select role" />
          </div>
          <div className="col-span-2">
            <FieldLabel>Manager</FieldLabel>
            <SelectInput placeholder="Select manager" selected="Priyal Jain" />
            <p className="mt-2 text-xs text-gray-400">priyal.jain@onboard.ai</p>
          </div>
        </Section>

        <Section label="Timing" description="Day one must be in the future.">
          <div>
            <FieldLabel>Start date</FieldLabel>
            <input
              type="date"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
            />
          </div>
        </Section>
      </div>

      <div className="mt-4 flex items-center justify-end gap-4">
        <span className="text-sm font-medium text-emerald-600">
          Hire confirmed and sent.
        </span>
        <button
          type="button"
          className="rounded-xl bg-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
        >
          Confirm hire
        </button>
      </div>
    </PortalShell>
  );
}
