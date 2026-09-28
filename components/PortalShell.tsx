import Sidebar, { NavKey } from "./Sidebar";

export default function PortalShell({
  active,
  children,
}: {
  active: NavKey;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen min-w-[1024px] gap-4 bg-page p-4">
      <Sidebar active={active} />
      <main className="flex-1 overflow-y-auto rounded-[2rem] bg-white px-10 py-8">
        {children}
      </main>
    </div>
  );
}
