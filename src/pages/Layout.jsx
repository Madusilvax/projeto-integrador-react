import Menu from './Menu'
import Titulo from './Titulo'
import Carousel from './Carousel'
import Buton from './Buton'

function Layout() {


  return (
    <>

      <Menu />
      <div className='container'>
        <Titulo />
        <Carousel />
        <Buton />
      </div>
    </>
  )
}

export default Layout