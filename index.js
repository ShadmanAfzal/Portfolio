var button = document.getElementById("btt");

window.onscroll = function() { scrollfuncion() };

function scrollfuncion() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
    // if (document.documentElement.scrollTop > 2240) {
    //     console.log("reached");
    //     var bar = document.querySelectorAll(".skill-bar-in");
    //     for (let i = 0; i < 5; i++) {
    //        for (let j = 0; j < 90; j++) {
    //            console.log(i+"\n");
    //            bar[i].style.width = j+"%";
    //            console.log(j+"%");
    //        }
            
    //     }
    // }
}

function backtotop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

