import { useEffect } from "react";

function Areahospede() {
    // useEffect(() => {
    //     const toastEl = document.getElementById("boasVindasToast");
    //     if (toastEl) {
    //         const toast = new window.bootstrap.Toast(toastEl);
    //         toast.show();
    //     }

    //     const form = document.getElementById("formReserva");
    //     const tipoCabana = document.getElementById("tipoCabana");
    //     const diariasInput = document.getElementById("diarias");
    //     const valorDisplay = document.getElementById("valorTotal");

    //     function calcularValor() {
    //         const tipo = tipoCabana.value;
    //         const diarias = parseInt(diariasInput.value);
    //         let valorNoite = 0;

    //         switch (tipo) {
    //             case "rustica":
    //                 valorNoite = 180;
    //                 break;
    //             case "moderna":
    //                 valorNoite = 250;
    //                 break;
    //             case "sustentavel":
    //                 valorNoite = 200;
    //                 break;
    //             default:
    //                 valorNoite = 0;
    //         }

    //         if (valorNoite > 0 && diarias > 0) {
    //             const total = valorNoite * diarias;
    //             valorDisplay.textContent = `R$ ${total
    //                 .toFixed(2)
    //                 .replace(".", ",")}`;
    //         } else {
    //             valorDisplay.textContent = "R$ 0,00";
    //         }
    //     }

    //     if (tipoCabana) tipoCabana.addEventListener("change", calcularValor);
    //     if (diariasInput) diariasInput.addEventListener("input", calcularValor);

    //     if (form) {
    //         form.addEventListener("submit", function (e) {
    //             e.preventDefault();
    //             const toastEl = document.getElementById("toastReserva");
    //             const toast = new window.bootstrap.Toast(toastEl);
    //             toast.show();
    //         });
    //     }

    //     return () => {
    //         if (tipoCabana) tipoCabana.removeEventListener("change", calcularValor);
    //         if (diariasInput) diariasInput.removeEventListener("input", calcularValor);
    //     };
    // }, []);

    return (
        <>
           

            <div className="container">
                <h2>Reserva de Cabanas</h2>

                <form id="formReserva">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nome completo"
                        required
                    />
                    <input
                        type="email"
                        className="form-control mt-2"
                        placeholder="E-mail"
                        required
                    />
                    <input
                        type="tel"
                        className="form-control mt-2"
                        placeholder="Telefone / WhatsApp"
                        required
                    />
                    <input type="date" className="form-control mt-2" required />
                    <input
                        type="number"
                        className="form-control mt-2"
                        placeholder="Número de pessoas"
                        min="1"
                        required
                    />
                    <select
                        className="form-control mt-2"
                        id="tipoCabana"
                        required
                    >
                        <option value="">Tipo de Cabana</option>
                        <option value="rustica">Rústica</option>
                        <option value="moderna">Moderna</option>
                        <option value="sustentavel">Sustentável</option>
                    </select>

                    <input
                        type="number"
                        id="diarias"
                        className="form-control mt-2"
                        placeholder="Número de diárias"
                        min="1"
                        required
                    />

                    <div className="mt-3">
                        <strong>Valor Total:</strong>{" "}
                        <span id="valorTotal">R$ 0,00</span>
                    </div>

                    <div className="d-flex align-items-center mt-3">
                        <i className="bi bi-credit-card"></i>
                        <span className="ms-2">
                            Pagamento seguro via PIX, cartão ou transferência
                        </span>
                    </div>

                    <button type="submit" className="btn btn-success mt-4">
                        Confirmar Reserva
                    </button>
                </form>
            </div>
            <div className="toast-container position-fixed bottom-0 end-0 p-3">
                <div
                    id="boasVindasToast"
                    className="toast align-items-center"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                >
                    <div className="d-flex">
                        <div className="toast-body">👋 Bem-vindo ao Refúgio ARIIAM!</div>
                        <button
                            type="button"
                            className="btn-close btn-close-white me-2 m-auto"
                            data-bs-dismiss="toast"
                        ></button>
                    </div>
                </div>

                <div
                    id="toastReserva"
                    className="toast align-items-center"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                >
                    <div className="d-flex">
                        <div className="toast-body">
                            Reserva enviada com sucesso! 🌿
                        </div>
                        <button
                            type="button"
                            className="btn-close btn-close-white me-2 m-auto"
                            data-bs-dismiss="toast"
                        ></button>
                    </div>
                </div>
            </div>

            <footer className="bg-light text-center py-3 mt-4">
                &copy; 2025 Ariiam Hospedagem - Todos os direitos reservados.
            </footer>
        </>
    );
}

export default Areahospede
