// async function getCryptoPrice() {
//     const cryptoName = document.getElementById("cryptoInput").value.toLowerCase();
//     const url = `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoName}&vs_currencies=eur`;
//
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//
//         if (data[cryptoName]) {
//             document.getElementById("result").innerHTML =
//                 `<h2>${cryptoName.toUpperCase()}</h2>
//                  <p>Prijs: €${data[cryptoName].eur}</p>`;
//         } else {
//             document.getElementById("result").innerHTML = `<p>Crypto niet gevonden.</p>`;
//         }
//     } catch (error) {
//         document.getElementById("result").innerHTML = `<p>Fout bij ophalen van gegevens.</p>`;
//     }
// }
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("searchButton").addEventListener("click", getCryptoPrice);
});

const ctx = document.getElementById("cryptoChart").getContext("2d");
const cryptoChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: [],
        datasets: [{
            label: "Crypto Prijs (€)",
            data: [],
            borderColor: "green",
            backgroundColor: "rgba(0, 255, 0, 0.2)",
            borderWidth: 2,
            fill: false
        }]
    }
});

async function getCryptoPrice() {
    const cryptoName = document.getElementById("cryptoInput").value.trim().toLowerCase();

    if (cryptoName === "") {
        document.getElementById("result").innerHTML = `<p>Voer een cryptonaam in.</p>`;
        return;
    }

    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoName}&vs_currencies=eur`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data[cryptoName]) {
            const price = data[cryptoName].eur;

            document.getElementById("result").innerHTML = `<h2>${cryptoName.toUpperCase()}</h2><p>Prijs: €${price}</p>`;

            cryptoChart.data.labels.push(cryptoName.toUpperCase());
            cryptoChart.data.datasets[0].data.push(price);
            cryptoChart.update();
        } else {
            document.getElementById("result").innerHTML = `<p>Crypto niet gevonden.</p>`;
        }
    } catch (error) {
        document.getElementById("result").innerHTML = `<p>Fout bij ophalen van gegevens.</p>`;
    }
}

