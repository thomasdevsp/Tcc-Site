import { Outlet } from 'react-router-dom'
import { Nav } from '../components/Nav'
import { LayoutContainer } from './styles'
import { Footer } from '../components/Footer'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Nav />
      <Outlet />
      <Footer />
    </LayoutContainer>
  )
}