import logo from '../../assets/logo/logo.png';
import menu from '../../assets/menu.svg'
import { NavBar } from './styles'

export function Nav() {
  return (
    <NavBar>
      <div>
        <img src={logo} />
      </div>

      <div>
        <img src={menu} className='Reorder' />
      </div>
    </NavBar>
  )
}