import Menu from '../Menu'
import Titulo from '../Titulo'
import { Outlet, Link } from 'react-router-dom'

function Layout() {


  return (
    <>

      <Menu />
      <div className='container'>
        <Outlet />

      </div>

    </>
  )
}

export default Layout