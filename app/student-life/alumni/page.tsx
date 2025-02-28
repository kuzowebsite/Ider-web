import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BackButton from "../components/back-button"

const alumniContent = {
  graduation: {
    title: "Оюутны төгсөлт",
    items: [
      {
        title: "2023 оны төгсөлт",
        image: "/placeholder.svg?height=300&width=400",
        description: "2023 оны төгсөгчдийн баярын ёслол",
      },
      {
        title: "2022 оны төгсөлт",
        image: "/placeholder.svg?height=300&width=400",
        description: "2022 оны төгсөгчдийн баярын ёслол",
      },
    ],
  },
  reunions: {
    title: "Төгсөгчдийн уулзалт",
    items: [
      {
        title: "Төгсөгчдийн эргэх холбоо",
        image: "/placeholder.svg?height=300&width=400",
        description: "Төгсөгчдийн уулзалт, туршлага солилцох арга хэмжээ",
      },
      {
        title: "Alumni уулзалт 2023",
        image: "/placeholder.svg?height=300&width=400",
        description: "Төгсөгчдийн жилийн уулзалт",
      },
    ],
  },
}

export default function AlumniPage() {
  return (
    <div>
      <BackButton />
      <div className="container py-16">
        <h1 className="mb-12 text-center text-4xl font-bold">Төгсөгчид</h1>

        <Tabs defaultValue="graduation" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="graduation">Төгсөлт</TabsTrigger>
            <TabsTrigger value="reunions">Төгсөгчдийн уулзалт</TabsTrigger>
          </TabsList>

          <TabsContent value="graduation">
            <div className="grid gap-8 sm:grid-cols-2">
              {alumniContent.graduation.items.map((item) => (
                <Card key={item.title} className="overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reunions">
            <div className="grid gap-8 sm:grid-cols-2">
              {alumniContent.reunions.items.map((item) => (
                <Card key={item.title} className="overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

