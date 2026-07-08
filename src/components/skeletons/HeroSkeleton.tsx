export default function HeroSkeleton() {
  return (
    <section className="container pt-28 pb-10 animate-pulse">
      <div className="bg-muted rounded-[2.5rem] p-8 md:p-12 lg:p-16 border border-border/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            <div className="flex items-center space-x-3.5">
              <div className="flex -space-x-3.5">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-9 w-9 rounded-full bg-muted-foreground/20 ring-2 ring-background" />
                ))}
              </div>
              <div className="space-y-1.5">
                <div className="h-4 w-24 rounded-full bg-muted-foreground/20" />
                <div className="h-3 w-36 rounded-full bg-muted-foreground/15" />
              </div>
            </div>
            <div className="space-y-3 max-w-2xl">
              <div className="h-12 w-full rounded-lg bg-muted-foreground/20" />
              <div className="h-12 w-3/4 rounded-lg bg-muted-foreground/15" />
            </div>
            <div className="h-12 w-40 rounded-full bg-muted-foreground/20" />
            <div className="grid grid-cols-2 gap-8 md:gap-16 pt-8 border-t border-border/70 w-full max-w-md">
              {[1, 2].map((i) => (
                <div key={i} className="space-y-2">
                  <div className="h-8 w-16 rounded bg-muted-foreground/20" />
                  <div className="h-3 w-24 rounded bg-muted-foreground/15" />
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 h-[380px] sm:h-[480px] rounded-3xl bg-muted-foreground/10" />
        </div>
      </div>
    </section>
  );
}
