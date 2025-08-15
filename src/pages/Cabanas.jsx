import "../pages/Cabanas.css"
import CardCabanas from "../componentes/Cardcabanas";
function Cabanas() {
    return (
        <>

            <div className="container">
                <div className="text-center mt-4">
                    <h1>Conheça nossas Cabanas</h1>
                    <p>Conheça um pouco mais sobre o nosso refúgio e o que nos motiva.</p>
                </div>
                <CardCabanas titulo="Casa Montanha" imagem="casamontanha.jpg" desc1=" Hospedagem ideal para quem busca conforto e natureza: Esta casa moderna oferece amplos espaços envidraçados que integram o interior ao jardim tropical, garantindo luminosidade natural, privacidade e uma experiência única de conexão com o ambiente. Perfeita para relaxar com estilo e tranquilidade." desc2="Proporcionar experiências únicas, unindo simplicidade, aconchego e respeito à natureza." />
                <hr />

            </div>
            <CardCabanas titulo="Casa de praia" imagem="casapraia.jpg" desc1="cabana exclusiva com suíte ampla e climatizada, cama king-size, piscina privativa, redes para descanso, jardim tropical, cozinha equipada, Wi-Fi, área externa com espreguiçadeiras, a poucos minutos da praia e cercada por natureza para garantir conforto, privacidade e momentos inesquecíveis." desc2="Proporcionar experiências únicas, unindo simplicidade, aconchego e respeito à natureza." />
        
            <footer className="bg-light text-center py-3 mt-4">
                &copy; 2025 Ariiam Hospedagem - Todos os direitos reservados.
            </footer>
        </>
    );
}

export default Cabanas;
