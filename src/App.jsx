import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css'
import Menu from './Menu'
import Titulo from './Titulo'
import Carousel from './Carousel';
import Buton from './Buton'

function App() {


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

export default App
