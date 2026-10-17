function BrandLockup() {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <img
        aria-hidden="true"
        className="h-11 w-11 shrink-0 sm:h-12 sm:w-12"
        src="/queryflow-database-icon.svg"
        alt=""
      />

      <div className="min-w-0">
        <div className="whitespace-nowrap text-2xl font-bold tracking-[-0.045em] text-[var(--lq-primary)] sm:text-[1.75rem]">
          QueryFlow
        </div>
      </div>
    </div>
  );
}

export default BrandLockup;
