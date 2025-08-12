import './Carousel'

function Carousel() {
    return (
        <>

            <div id="carouselCabanas" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <center>
                            <img src="casalago.jpg" className="d-block w-50 rounded" alt="Cabana rústica" />
                        </center>
                    </div>
                    <div className="carousel-item">
                        <center>
                            <img src="domosp.jpg" clasNames="d-block w-50 rounded" alt="Vista da cabana" />
                        </center>
                    </div>
                    <div className="carousel-item">
                        <center>
                            <img src="casamontanha.jpg" className="d-block w-50 rounded" alt="cabana aconchegante" />
                        </center>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselCabanas" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselCabanas" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Próximo</span>
                </button>
            </div>

        </>
    )
}

export default Carousel