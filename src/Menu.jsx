import "./Menu.css"


function Menu() {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Ariiam Hospedagem</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                        aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="/Sobrenos">Sobre Nós</a></li>
                            <li className="nav-item"><a className="nav-link" href="/Cabanas">Cabanas</a></li>
                            <li className="nav-item"><a className="nav-link" href="/Areahospede">Área Hospede</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Menu