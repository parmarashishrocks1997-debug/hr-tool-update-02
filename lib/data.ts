import type { TaskStatus } from "@/components/StatusPill";

export type AccessTask = {
  tool: string;
  scope: string;
  approver: string;
  status: TaskStatus;
  lastNudge: string;
};

export type Hire = {
  name: string;
  department: string;
  startLabel: string;
  readiness: number;
  tasks: AccessTask[];
};

export const hires: Hire[] = [
  {
    name: "Arjun Mehta",
    department: "Engineering",
    startLabel: "Starts Mon",
    readiness: 35,
    tasks: [
      {
        tool: "GitHub",
        scope: "eng team",
        approver: "—",
        status: "provisioned",
        lastNudge: "—",
      },
      {
        tool: "GroundCover",
        scope: "standard",
        approver: "Priya Nair",
        status: "awaiting_approval",
        lastNudge: "2 nudges",
      },
      {
        tool: "Databricks",
        scope: "prod write",
        approver: "Rohan Desai",
        status: "escalated",
        lastNudge: "3 nudges, escalated",
      },
    ],
  },
  {
    name: "Meera Iyer",
    department: "Product",
    startLabel: "Starts Wed",
    readiness: 40,
    tasks: [
      {
        tool: "Jira",
        scope: "product-pms",
        approver: "—",
        status: "provisioned",
        lastNudge: "—",
      },
      {
        tool: "Figma",
        scope: "editor seat",
        approver: "Kavya Rao",
        status: "awaiting_approval",
        lastNudge: "1 nudge",
      },
      {
        tool: "Databricks",
        scope: "read (common)",
        approver: "Rohan Desai",
        status: "pending",
        lastNudge: "—",
      },
    ],
  },
];

export type ApprovalItem = {
  tool: string;
  scope: string;
  hire: string;
  waiting: string;
  sensitive?: boolean;
  step?: string;
};

export type ApprovalRequest = {
  approver: string;
  email: string;
  items: ApprovalItem[];
};

export const approvalRequests: ApprovalRequest[] = [
  {
    approver: "Priya Nair",
    email: "priya.nair@company.com",
    items: [
      {
        tool: "GroundCover",
        scope: "standard",
        hire: "Arjun Mehta",
        waiting: "waiting 2 days",
      },
    ],
  },
  {
    approver: "Rohan Desai",
    email: "rohan.desai@company.com",
    items: [
      {
        tool: "Databricks",
        scope: "prod write",
        hire: "Arjun Mehta",
        waiting: "waiting 4 days",
        sensitive: true,
        step: "Step 1 of 2",
      },
      {
        tool: "Databricks",
        scope: "read (common)",
        hire: "Meera Iyer",
        waiting: "waiting 1 day",
      },
    ],
  },
  {
    approver: "Kavya Rao",
    email: "kavya.rao@company.com",
    items: [
      {
        tool: "Figma",
        scope: "editor seat",
        hire: "Meera Iyer",
        waiting: "waiting 1 day",
      },
    ],
  },
];

export type AuditActorType = "agent" | "person";

export type AuditRow = {
  timestamp: string;
  actor: string;
  actorType: AuditActorType;
  action: string;
  detail: string;
  refused?: boolean;
};

export const auditLog: AuditRow[] = [
  {
    timestamp: "Wed, 9:45 AM",
    actor: "Rohan Desai",
    actorType: "person",
    action: "Refused",
    detail:
      "Attempted to approve GroundCover for Arjun Mehta — refused: not the assigned approver.",
    refused: true,
  },
  {
    timestamp: "Wed, 9:00 AM",
    actor: "Orchestrator",
    actorType: "agent",
    action: "Escalated",
    detail:
      "Databricks prod write escalated after 3 nudges with no second approval.",
  },
  {
    timestamp: "Tue, 11:20 AM",
    actor: "Rohan Desai",
    actorType: "person",
    action: "Approval",
    detail:
      "Approved step 1 of 2 for Databricks prod write (Arjun Mehta); routed to second approver.",
  },
  {
    timestamp: "Tue, 10:05 AM",
    actor: "Follow-up agent",
    actorType: "agent",
    action: "Nudge sent",
    detail: "Reminder sent to Priya Nair re: GroundCover (2nd nudge).",
  },
  {
    timestamp: "Mon, 2:31 PM",
    actor: "Follow-up agent",
    actorType: "agent",
    action: "Nudge sent",
    detail:
      "Reminder sent to Rohan Desai re: Databricks prod write (1st nudge).",
  },
  {
    timestamp: "Mon, 2:30 PM",
    actor: "Follow-up agent",
    actorType: "agent",
    action: "Nudge sent",
    detail: "Reminder sent to Priya Nair re: GroundCover (1st nudge).",
  },
  {
    timestamp: "Mon, 9:15 AM",
    actor: "Provisioner",
    actorType: "agent",
    action: "Fallback to ticket",
    detail:
      "Opened approval requests for GroundCover (→ Priya Nair) and Databricks (→ Rohan Desai).",
  },
  {
    timestamp: "Mon, 9:12 AM",
    actor: "Provisioner",
    actorType: "agent",
    action: "Retry",
    detail: "Retried GroundCover grant 3 times over 10 minutes. Still failing.",
  },
  {
    timestamp: "Mon, 9:05 AM",
    actor: "Provisioner",
    actorType: "agent",
    action: "API failure",
    detail: "GroundCover provisioning API returned 503 Service Unavailable.",
  },
  {
    timestamp: "Mon, 9:03 AM",
    actor: "Provisioner",
    actorType: "agent",
    action: "Auto-grant",
    detail: "GitHub eng team access granted automatically.",
  },
  {
    timestamp: "Mon, 9:02 AM",
    actor: "Orchestrator",
    actorType: "agent",
    action: "Tasks fanned out",
    detail:
      "3 access tasks created: GitHub (eng team), GroundCover (standard), Databricks (prod write).",
  },
  {
    timestamp: "Mon, 9:02 AM",
    actor: "Orchestrator",
    actorType: "agent",
    action: "Hire created",
    detail:
      "Intake submitted for Arjun Mehta — Engineering, starts Mon. Hire ID HR-2291 generated.",
  },
];
