import "../pages/Cabanas.css"
import CardCabanas from "../componentes/CardCabanas";
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
            <hr />
            <CardCabanas titulo="Casa Lago" imagem="casalago.jpg" desc1="Aluguel para temporada esta encantadora casa sobre a água, equipada com cozinha completa, varanda com vista panorâmica, internet Wi-Fi e localizada em meio à natureza, perfeita para relaxar, pescar ou aproveitar momentos inesquecíveis em família e com amigos." desc2="Proporcionar experiências únicas, unindo simplicidade, aconchego e respeito à natureza." />
            <hr />

            <CardCabanas titulo="Domo" imagem="domosp.jpg" desc1="Viva uma experiência única alugando este domo geodésico para temporada, com vista panorâmica das montanhas, ambiente aconchegante todo em madeira, cama confortável, mesa para refeições, varanda ampla e contato direto com a natureza para dias de paz, inspiração e descanso." desc2="Proporcionar experiências únicas, unindo simplicidade, aconchego e respeito à natureza." />

            <footer className="bg-light text-center py-3 mt-4">
                &copy; 2025 Ariiam Hospedagem - Todos os direitos reservados.
            </footer>
        </>
    );
}

export default Cabanas;
