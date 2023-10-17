import { List, X } from '@phosphor-icons/react';

import { ButtonLink } from '../ButtonLink'

import Logo_MedBox from '../../assets/logo/MedBox.png';
import { HeaderConteiner } from './styles'

import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';


export function Header() {
  const [openMenu, setOpenMenu] = useState(false)

  function handleOpenMenu() {
    if (openMenu === true) {
      setOpenMenu(false)
      return
    }
    setOpenMenu(true)
  }

  const location = useLocation();
  let currentLocation = '';
  if (location.pathname === '/Produto') {
    currentLocation = location.pathname;
    console.log(`Deu certo a ${currentLocation}`)
  } else if (location.pathname === '/') {
    currentLocation = location.pathname;
  }
  console.log(location.pathname);


  return (
    <HeaderConteiner>

      <div className='mobile'>
        <div className='menu_logo'>
          <div>
            <Link to={'/'} ><img src={Logo_MedBox} /></Link>
          </div>
          <div>
            <button className={`${openMenu == true ? 'style-btn' : ''}`} onClick={handleOpenMenu}>
              {
                openMenu === true ? (
                  <X size={32} />
                ) : (
                  <List size={32} />
                )
              }
            </button>
          </div>
        </div>

        <div className={`${'options'} ${openMenu === true && 'open'}`}>
          <nav>
            <Link
              className={`${currentLocation === '/' ? 'selected' : ''}`}
              to={`${currentLocation === '/Produto' ? '/' : ''}`}>
              Home
            </Link>
            <Link
              className={`${currentLocation === '/Produto' ? 'selected' : ''}`}
              to={'/Produto'}>
              Produto
            </Link>
          </nav>
        </div>
      </div>

      <div className='desktop'>
        <div>
          <Link to={'/'} ><img src={Logo_MedBox} /></Link>
        </div>
        <div>
          <nav className='desktop-options'>

            <Link
              className={`${currentLocation === '/' ? 'selected' : ''}`}
              to={`${currentLocation === '/Produto' ? '/' : ''}`}>
              Home
            </Link>
            <Link
              className={`${currentLocation === '/Produto' ? 'selected' : ''}`}
              to={'/Produto'}>
              Produto
            </Link>

            <a href={`${currentLocation === '/Produto' ? '#components-section' : '/Produto'}`}> Componentes</a>
            <a href={`${currentLocation === '/Produto' ? '#bibliography-section' : '/Produto'}`}>Bibliografia</a>
            <a href={`${currentLocation === '/Produto' ? '#operating-section' : '/Produto'}`}>Funcionamento</a>
          </nav>
        </div>

        <div className='mode-and-order'>
          <ButtonLink
            title='encomendar'
            link='https://conta.olx.com.br/anuncios/publicados'
          />

        </div>
      </div>
    </HeaderConteiner >
  )
}