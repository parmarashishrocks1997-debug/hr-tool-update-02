export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-6 border-b border-gray-100 pb-5">
      <h1 className="text-2xl font-bold text-ink">{title}</h1>
      <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
    </div>
  );
}
