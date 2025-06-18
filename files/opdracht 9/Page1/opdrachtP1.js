window.onload = function () {
    // Cookie melding
    if (document.cookie.indexOf("cookiesAccepted=true") === -1) {
        document.getElementById("cookieConsent").style.display = "block";
    }

    // Favorieten laden
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    document.querySelectorAll(".favorite-btn").forEach(button => {
        const pizza = button.dataset.pizza;

        if (favorites.includes(pizza)) {
            button.classList.add("favorited");
            button.textContent = "❤️ Verwijderd";
        }

        button.addEventListener("click", () => {
            toggleFavorite(pizza, button);
        });
    });

    // Bestelknoppen winkelmandje
    document.querySelectorAll(".order-btn").forEach(button => {
        button.addEventListener("click", () => {
            const pizza = button.dataset.pizza;
            const currentCount = parseInt(sessionStorage.getItem(pizza)) || 0;
            sessionStorage.setItem(pizza, currentCount + 1);
            alert(`${pizza} is toegevoegd aan je winkelmandje!`);
        });
    });
};

function toggleFavorite(pizza, button) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorites.includes(pizza)) {
        favorites = favorites.filter(f => f !== pizza);
        button.classList.remove("favorited");
        button.textContent = "❤️ Favoriet";
    } else {
        favorites.push(pizza);
        button.classList.add("favorited");
        button.textContent = "❤️ Verwijderd";
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
}

function acceptCookies() {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    document.cookie = "cookiesAccepted=true; expires=" + date.toUTCString();
    document.getElementById("cookieConsent").style.display = "none";
}

function declineCookies() {
    document.cookie = "cookiesAccepted=false; expires=Thu, 01 Jan 2026 00:00:00 UTC";
    document.getElementById("cookieConsent").style.display = "none";
}
