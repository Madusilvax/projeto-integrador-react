import { useState, useEffect } from "react";
import { Modal, Button } from 'react-bootstrap';
import "./Areahospede.css";

function Areahospede() {
    // Definindo o estado para mostrar o modal
    const [mostrarModal, setMostrarModal] = useState(false);
    const [valorTotal, setValorTotal] = useState(0);
    const [tipoCabana, setTipoCabana] = useState("");
    const [diarias, setDiarias] = useState(1);

    const [show, setShow] = useState(false);
    const [imagemSelecionada, setImagemSelecionada] = useState('');

    const handleClose = () => setShow(false);

    const handleShow = (src) => {
        setImagemSelecionada(src);
        setShow(true);
    };

    // Função para calcular o valor total da reserva
    function calcularValor() {
        let valorNoite = 0;

        switch (tipoCabana) {
            case "rustica":
                valorNoite = 180;
                break;
            case "moderna":
                valorNoite = 250;
                break;
            case "sustentavel":
                valorNoite = 200;
                break;
            case "praia":
                valorNoite = 200;
                break;
            default:
                valorNoite = 0;
        }

        const total = valorNoite * diarias;
        setValorTotal(total);
    }

    // Função para abrir o modal
    const handleConfirmarReserva = () => {
        setMostrarModal(true);
    };

    // Função para fechar o modal
    const handleFecharModal = () => {
        setMostrarModal(false);
    };

    // useEffect para recalcular valor total toda vez que `tipoCabana` ou `diarias` mudar
    useEffect(() => {
        calcularValor();
    }, [tipoCabana, diarias]);

    return (
        <div className="container py-5">
            <div className="card-reserva mx-auto">
                <div className="card-reserva__header">
                    <div>
                        <h2 className="card-reserva__title">Reserva de Cabanas</h2>
                        <p className="card-reserva__subtitle">
                            Escolha o tipo, informe as diárias e veja o total automaticamente.
                        </p>
                    </div>
                    <span className="card-reserva__tag">ARIIAM</span>
                </div>

                <form id="formReserva" className="card-reserva__body">
                    <div className="grid-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nome completo"
                            required
                        />
                        <input
                            type="email"
                            className="form-control"
                            placeholder="E-mail"
                            required
                        />
                        <input
                            type="tel"
                            className="form-control"
                            placeholder="Telefone / WhatsApp"
                            required
                        />
                        <input type="date" className="form-control" required />
                    </div>

                    <div className="grid-3 mt-3">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Número de pessoas"
                            min="1"
                            required
                        />

                        <select
                            className="form-control"
                            value={tipoCabana}
                            onChange={(e) => setTipoCabana(e.target.value)}
                            required
                        >
                            <option value="">Tipo de Cabana</option>
                            <option value="rustica">Rústica — R$ 180/noite</option>
                            <option value="moderna">Moderna — R$ 250/noite</option>
                            <option value="sustentavel">Sustentável — R$ 200/noite</option>
                            <option value="praia">Praia — R$ 230/noite</option>
                        </select>

                        <input
                            type="number"
                            value={diarias}
                            onChange={(e) => setDiarias(e.target.value)}
                            className="form-control"
                            placeholder="Número de diárias"
                            min="1"
                            required
                        />
                    </div>

                    <div className="valor-box mt-4">
                        <div>
                            <strong>Valor Total:</strong>
                            <span className="valor-box__pill">
                                R$ {valorTotal.toFixed(2).replace(".", ",")}
                            </span>
                        </div>
                        <small className="text-muted">
                            * valores por diária. taxas ou descontos podem ser aplicados.
                        </small>
                    </div>

                    <div className="pagamento mt-3">
                        <i className="bi bi-credit-card"></i>
                        <span>Pagamento seguro via PIX, cartão ou transferência</span>
                    </div>

                    <button
                        type="button"
                        className="btn-confirmar mt-4"
                        onClick={() => handleShow('aaa')}
                    >
                        Confirmar Reserva
                    </button>


                    {/* Modal */}
                    {mostrarModal && (
                        <div className="modal-overlay">
                            <div className="modal">
                                <h3>Confirmação da Reserva</h3>
                                <p>Sua reserva foi enviada com sucesso!</p>
                                <button onClick={handleFecharModal} className="btn-fechar">
                                    Fechar
                                </button>
                            </div>
                        </div>
                    )}

                </form>
            </div>

            <footer className="text-center mt-5 text-muted">
                &copy; 2025 Ariiam Hospedagem — Todos os direitos reservados.
            </footer>

            <Modal show={show} onHide={handleClose} centered>

                <Modal.Body className="text-center">
                    <h1>pix</h1>
                    <br></br>
                    <h1>Cartão Debito ou Crédito</h1>
                    <br></br>
                    <h1>Boleto</h1>



                </Modal.Body>

            </Modal>
        </div>
    );
}

export default Areahospede;
