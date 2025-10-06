var bouton = document.querySelector(".retour_en_haut");

window.onscroll = function() {scrollFunction()};

function scrollFunction () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        bouton.style.display = "block";
    } else {
        bouton.style.display = "none";
    }
}