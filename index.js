var button = document.getElementById("btt");

window.onscroll = function() { scrollfuncion() };

function scrollfuncion() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
    }

function backtotop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

