export function OrderDescriptionWrapper({ title, children }) {
  return (
    <section className="mb-4">
      <div className="flex items-center gap-2">
        <h4 className="whitespace-nowrap">{title}</h4>
        <div className="h-px w-full bg-Grey1000" />
      </div>
      <div className="flex flex-col gap-3 px-2 py-2">{children}</div>
    </section>
  );
}
