document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('#tempForm').addEventListener('submit', function (event) {
        event.preventDefault();

        let c = parseFloat(document.querySelector('#celsius').value);
        let f = (c * 9/5) + 32;

        document.querySelector('#result').innerHTML = 
            `${c} °C = ${f.toFixed(1)} °F`;
    });

});
