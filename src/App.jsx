import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Layout from "./pages/Layout.jsx"
import Home from "./pages/Home.jsx"
import Sobrenos from "./pages/Sobrenos.jsx"
import Nopage from "./pages/Nopage.jsx"
import Areahospede from "./pages/Areahospede.jsx"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="Sobrenos" element={<Sobrenos />} />
                    <Route path="*" element={<Nopage />} />
                    <Route path="Areahospede" element={<Areahospede />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App