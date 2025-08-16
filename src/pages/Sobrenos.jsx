import React from 'react';

function Sobrenos() {
    return (
        <>
            <div className="text-center mt-4">
                <h1>Sobre Nós</h1>
                <p>Conheça um pouco mais sobre o nosso refúgio e o que nos motiva.</p>
            </div>

            <div className="row align-items-center section-text">
                <div className="col-md-6">
                    <h2>Nossa História</h2>
                    <p>
                        A Ariiam Hospedagem nasceu do desejo de criar um espaço onde o conforto, a natureza e a hospitalidade se encontram.
                        Cada detalhe foi pensado para oferecer aos nossos hóspedes momentos de descanso e conexão com o ambiente ao redor.
                    </p>
                    <div className="mission-box">
                        <h5>🌿 Nossa Missão</h5>
                        <p>Proporcionar experiências únicas, unindo simplicidade, aconchego e respeito à natureza.</p>
                    </div>
                </div>
                <div className="col-md-6 text-center">
                    <img src="casamontanha.jpg" alt="Vista da pousada" className="img-fluid rounded shadow" />
                </div>
            </div>

            <div className="row section-text">
                <div className="col text-center">
                    <h2>Valores</h2>
                    <ul className="list-unstyled">
                        <li> Hospitalidade verdadeira</li>
                        <li> Respeito à natureza</li>
                        <li> Cuidado em cada detalhe</li>
                        <li> Sustentabilidade e responsabilidade</li>
                    </ul>
                </div>
            </div>
            <br />
            <footer className="bg-light text-center py-3">
                &copy; 2025 Ariiam Hospedagem - Todos os direitos reservados.
            </footer>
        </>
    );
}

export default Sobrenos;
