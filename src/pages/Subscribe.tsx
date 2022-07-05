import classNames from 'classnames'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../component/Footer'

import { Logo } from '../component/Logo'
import { useCreateSubscriberMutation } from '../graphql'

export const Subscribe = () => {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [createSubscribe, { loading }] = useCreateSubscriberMutation()

  const emptyFields = !name || !email

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    createSubscribe({
      variables: {
        name,
        email
      }
    })

    navigate('/event')
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex flex-col lg:flex-row sm:items-center justify-between mt-20 mx-auto">
        <div className="flex flex-col items-center text-center mb-8 px-6 lg:mb-0 lg:items-start lg:text-left max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-[2rem] lg:text-[2.5rem] leading-tight">
            Costrua uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500" >React</strong>
          </h1>

          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gry-700 sm:border sm:border-gry-500 rounded">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
            <input
              className={classNames(
                ' bg-gray-900 rounded px-5 h-14 border-green-500 focus:outline-none focus:border',
                {
                  border: name
                }
              )}
              type="text"
              placeholder="Seu nome completo"
              onChange={event => setName(event.target.value)}
            />

            <input
              className={classNames(
                ' bg-gray-900 rounded px-5 h-14 border-green-500 focus:outline-none focus:border',
                {
                  border: name
                }
              )}
              type="email"
              placeholder="Digite seu e-mail"
              onChange={event => setEmail(event.target.value)}
            />

            <button
              className={classNames(
                'mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm disabled:opacity-50',
                {
                  'hover:bg-green-700 transition-colors': !emptyFields
                }
              )}
              type="submit"
              disabled={loading || emptyFields}
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img src="/src/assets/code-mockup.png" className="mt-8" alt="" />

      <div className='w-full bg-gray-700'>
        <Footer />
      </div>
    </div>
  )
}
