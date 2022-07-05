import { List, X } from 'phosphor-react'
import { Dispatch, SetStateAction } from 'react'
import { Logo } from './Logo'

interface HeaderProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export const Header = (props: HeaderProps) => {
  const toggleOpen = () => props.setOpen(prevState => !prevState)
  return (
    <header className="w-full p-5 flex items-center justify-between bg-gray-700 border-b border-gray-600 fixed z-10 xl:justify-center">
      <Logo />
      <div className='flex items-center xl:hidden'>
        <span className='pr-2'>Aulas</span>
        {props.open
          ? <X className='text-blue-500 cursor-pointer' size={32} onClick={toggleOpen} />
          : <List className='text-blue-500 cursor-pointer' size={32} onClick={toggleOpen} />
        }
      </div>
    </header>
  )
}
