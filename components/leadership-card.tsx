import Image from "next/image"

interface LeadershipCardProps {
  name: string
  position: string
  bio: string
  image: string
}

export default function LeadershipCard({ name, position, bio, image }: LeadershipCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={300}
          height={300}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="mb-1 text-xl font-bold">{name}</h3>
        <p className="mb-3 text-sm font-medium text-primary">{position}</p>
        <p className="text-sm text-muted-foreground">{bio}</p>
      </div>
    </div>
  )
}

