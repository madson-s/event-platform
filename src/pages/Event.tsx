import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../component/Header'
import { Sidebar } from '../component/Sidebar'
import { Video } from '../component/Video'

interface Params {
  slug: string
}

export const Event = () => {
  const { slug } = useParams<keyof Params>()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [slug])
  return (
    <div className="flex flex-col min-h-screen ">
      <Header open={open} setOpen={setOpen} />
      <main className="relative flex flex-1 max-h-[calc(100vh-75px)] max-w-screen mt-[75px] overflow-hidden">
        {slug
          ? <Video lessonSlug={slug} />
          : <div className="flex-1"/> }
        <Sidebar open={open} />
      </main>
    </div>
  )
}
