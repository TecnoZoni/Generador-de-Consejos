const API_URL = "https://api.adviceslip.com/advice";
const button = document.getElementById('random');

const traerFrase = () => {
    fetch(`${API_URL}`)
        .then((response) => response.json())
        .then((device) => {
            //Traigo la informacion a mostrar
            const adviceID = device.slip.id;
            const advice = device.slip.advice;

            //Le digo donde mostrar la informacion
            document.getElementById('adviceID').textContent = "ADVICE #" + adviceID;
            document.getElementById('advice').textContent = '"' + advice + '"';
        })
        .catch(error => {
            console.log('Error', error);
        });
};

button.addEventListener("click", function () {
    traerFrase();
});

traerFrase();