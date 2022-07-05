import { RocketseatLogo } from './RocketseatLogo'

export const Footer = () => {
  return (
    <div className='w-full px-6 bg-transparent text-gray-300'>
      <div className='flex flex-col md:flex-row py-6 w-full justify-between items-center border-t border-gray-600'>
        <div className='flex flex-col md:flex-row items-center mb-6 md:mb-0'>
          <RocketseatLogo />
          <p className='mt-4 md:mt-0 md:ml-6'>
            Rocketseat - Todos os direitos reservados
          </p>
        </div>
        <a href="#">
          Políticas de privacidade
        </a>
      </div>
    </div>
  )
}
