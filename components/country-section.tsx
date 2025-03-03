import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface CountrySectionProps {
  country: {
    code: string
    name: string
    universities?: Array<{
      name: string
      programs: string[]
      image?: string
    }>
    companies?: Array<{
      name: string
      type: string
    }>
    programs?: string[]
    majors?: string[]
    requirements?: string[]
    features?: string[]
  }
}

export default function CountrySection({ country }: CountrySectionProps) {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-4">
        <Image
          src={`/flags/${country.code}.svg`}
          alt={`${country.name} flag`}
          width={32}
          height={24}
          className="rounded"
        />
        <h2 className="text-2xl font-bold">Гадаад харилцаа - {country.name}</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {country.universities?.map((university) => (
          <Card key={university.name}>
            <CardHeader>
              <CardTitle className="text-lg">{university.name}</CardTitle>
            </CardHeader>
            <CardContent>
              {university.image && (
                <div className="mb-4 aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={university.image || "/placeholder.svg"}
                    alt={university.name}
                    width={400}
                    height={225}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              <div className="flex flex-wrap gap-2">
                {university.programs.map((program) => (
                  <Badge key={program} variant="secondary">
                    {program}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        {country.companies?.map((company) => (
          <Card key={company.name}>
            <CardHeader>
              <CardTitle className="text-lg">{company.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary">{company.type}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {(country.majors || country.requirements || country.features || country.programs) && (
        <Card>
          <CardContent className="pt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {country.majors && (
                <div>
                  <h3 className="mb-3 font-semibold">Мэргэжил</h3>
                  <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                    {country.majors.map((major) => (
                      <li key={major}>{major}</li>
                    ))}
                  </ul>
                </div>
              )}

              {country.requirements && (
                <div>
                  <h3 className="mb-3 font-semibold">Шаардлага</h3>
                  <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                    {country.requirements.map((req) => (
                      <li key={req}>{req}</li>
                    ))}
                  </ul>
                </div>
              )}

              {country.features && (
                <div>
                  <h3 className="mb-3 font-semibold">Онцлог</h3>
                  <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                    {country.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {country.programs && (
                <div>
                  <h3 className="mb-3 font-semibold">Хөтөлбөрүүд</h3>
                  <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                    {country.programs.map((program) => (
                      <li key={program}>{program}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </section>
  )
}

