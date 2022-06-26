import { useParams } from "react-router-dom"
import { Header } from "../component/Header"
import { Sidebar } from "../component/Sidebar"
import { Video } from "../component/Video"

interface Params {
  slug: string
}

export const Event = () => {
  const { slug } = useParams<keyof Params>()
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? (
          <Video lessonSlug={slug} /> 
        ) : ( 
          <div className="flex-1"/>
        )}
        <Sidebar />
      </main>
    </div>
  )
}
