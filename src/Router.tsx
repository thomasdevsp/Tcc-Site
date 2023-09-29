import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Produto } from './pages/Produto'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Produto" element={<Produto />} />
      </Route >
    </Routes>
  )
}