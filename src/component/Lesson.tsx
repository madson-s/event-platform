import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CheckCircle, Lock } from 'phosphor-react'
import { Link, useParams } from 'react-router-dom'
import classNames from 'classnames'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

interface Params {
  slug: string;
}

export const Lesson = (props: LessonProps) => {
  const { slug } = useParams<keyof Params>()

  const isLessonAvailable = isPast(props.availableAt)
  const availableAtDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  })

  const isActiveLesson = slug === props.slug

  return (
    <Link to={`/event/lesson/${props.slug}`} className='group'>
      <span className="text-gray-300">
        {availableAtDateFormatted}
      </span>

      <div className={classNames('relative rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500', {
        'bg-green-500': isActiveLesson
      })}>
        <header className="flex items-center justify-between">
          {isActiveLesson && (
            <span className='absolute left-[-8px] rounded-[2px] w-4 h-4 bg-green-500 rotate-45' />
          )}
          {isLessonAvailable ? (
            <span className={classNames("text-sm text-blue-500 font-medium flex items-center gap-2", {
              'text-white': isActiveLesson
            })}>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className={classNames("text-xs rounded py-[0.125rem] px-2 border font-bold", {
            'text-white border-white': isActiveLesson,
            'text-green-300 border-green-300': !isActiveLesson,
          })}>
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>  
        <strong className={classNames('text-white mt-5 block', {
          'text-gray-200': !isActiveLesson
        })}>
          {props.title}
        </strong>
      </div>
    </Link>
  )
}
