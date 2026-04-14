export default function Loading() {
  return (
    <div
      className="pt-28 pb-20 px-6 mx-auto max-w-[900px]"
      aria-busy="true"
      aria-label="Chargement…"
    >
      {/* Breadcrumb skeleton */}
      <div className="flex items-center gap-2 mb-8">
        <div className="skeleton h-4 w-16 rounded-md" />
        <div className="skeleton h-4 w-4 rounded-full" />
        <div className="skeleton h-4 w-24 rounded-md" />
      </div>

      {/* Badge + Title */}
      <div className="mb-12">
        <div className="skeleton h-7 w-28 rounded-full mb-6" />
        <div className="skeleton h-10 w-3/4 rounded-lg mb-4" />
        <div className="skeleton h-5 w-full rounded-lg mb-2" />
        <div className="skeleton h-5 w-2/3 rounded-lg" />
      </div>

      {/* Content blocks */}
      <div className="space-y-6">
        <div className="rounded-[20px] p-8 border border-[#D2D2D7] dark:border-[#38383A]">
          <div className="skeleton h-6 w-48 rounded-lg mb-4" />
          <div className="skeleton h-4 w-full rounded-md mb-2" />
          <div className="skeleton h-4 w-5/6 rounded-md mb-2" />
          <div className="skeleton h-4 w-3/4 rounded-md" />
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="rounded-[16px] p-5 border border-[#D2D2D7] dark:border-[#38383A]"
            >
              <div className="skeleton h-5 w-2/3 rounded-md mb-3" />
              <div className="skeleton h-4 w-full rounded-md mb-2" />
              <div className="skeleton h-4 w-5/6 rounded-md" />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation skeleton */}
      <div className="mt-20 pt-10 border-t border-[#D2D2D7] dark:border-[#38383A] flex gap-4">
        <div className="flex-1 skeleton h-20 rounded-[16px]" />
        <div className="flex-1 skeleton h-20 rounded-[16px]" />
      </div>
    </div>
  );
}
