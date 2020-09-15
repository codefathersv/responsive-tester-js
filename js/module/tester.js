const d = document;
const w = window;

export default function tester(idform) {

    const $form = d.getElementById(idform);

    let tester;

    d.addEventListener("submit", (e) => {
        if (e.target === $form) {

            e.preventDefault();

            tester = w.open($form.direccion.value, "Tester", `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`);

        }
    })

    d.addEventListener("click", (e) => {

        if (e.target === $form.cerrar) {
            tester.close();

            $form.direccion.value = null;
            $form.ancho.value = null;
            $form.alto.value = null;
        }

    })

}