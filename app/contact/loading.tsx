import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="h-[500px] w-full">
        <Skeleton className="h-full w-full" />
      </div>

      <div className="container grid gap-8 py-16 md:grid-cols-2">
        <div className="space-y-8">
          <div className="space-y-2">
            <Skeleton className="h-8 w-[200px]" />
            <Skeleton className="h-4 w-[300px]" />
          </div>

          <div className="space-y-6">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-2">
            <Skeleton className="h-8 w-[200px]" />
            <Skeleton className="h-4 w-[300px]" />
          </div>

          <div className="space-y-6">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-24 w-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

