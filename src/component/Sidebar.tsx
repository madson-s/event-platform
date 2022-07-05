import { Lesson } from './Lesson'
import { useGetLessonsQuery } from '../graphql'
import classNames from 'classnames'

interface SidebarProps {
  open: boolean
}

export const Sidebar = (props: SidebarProps) => {
  const { data } = useGetLessonsQuery()
  return (
    <aside className={classNames(
      'h-[calc(100vh-75px)] absolute left-[100vw] w-screen sm:w-[348px] xl:relative overflow-scroll no-scrollbar bg-gray-700 p-6 border-l border-gray-600 transition-all duration-300 xl:left-0',
      {
        'left-0  sm:left-[calc(100vw-348px)] ': props.open
      }
    )}>
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map(lesson => {
          return (
            <Lesson
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
            />
          )
        })}
      </div>
    </aside>
  )
}
