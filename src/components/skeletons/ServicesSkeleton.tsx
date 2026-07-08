export default function ServicesSkeleton() {
  return (
    <section className="container py-20 animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        <div className="lg:col-span-5">
          <div className="h-6 w-32 rounded-full bg-muted-foreground/20" />
        </div>
        <div className="lg:col-span-7 space-y-4">
          <div className="h-8 w-full rounded-lg bg-muted-foreground/20" />
          <div className="h-8 w-2/3 rounded-lg bg-muted-foreground/15" />
        </div>
      </div>
      <div className="flex gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex-shrink-0 w-full sm:w-[420px] md:w-[450px] aspect-4/3 rounded-3xl bg-muted-foreground/10 border border-border/20"
          />
        ))}
      </div>
    </section>
  );
}
