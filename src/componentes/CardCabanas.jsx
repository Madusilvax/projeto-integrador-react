function CardCabanas({titulo,imagem,desc1}) {
    return (
        <>
            <div className="row align-items-center section-text">
                <div className="col-md-6">
                    <h2>{titulo}</h2>
                    <p>
                       {desc1}
                    </p>
                    <div className="mission-box">
                        <h5> Nossa Missão</h5>
                        <p>Proporcionar experiências únicas, unindo simplicidade, aconchego e respeito à natureza.</p>
                    </div>
                </div>
                <div className="col-md-6 text-center">
                    <img src={imagem} alt="Vista da pousada" className="img-fluid rounded shadow" />
                </div>
            </div>
        </>
    )
}
export default CardCabanas