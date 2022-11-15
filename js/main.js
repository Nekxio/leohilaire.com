// paramètres de la page

$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
});
$(document).ready(function () {
    $(this).scrollTop(0);
});


// sticky menu

let nav_offset_top = $('.header_area').height() + 60;

function stickymenu() {
    if ($('.header_area').length) {
        $(window).scroll(function () {
            let scroll = $(window).scrollTop();
            if (scroll >= nav_offset_top) {
                $('.header_area .main-menu').addClass('sticky-menu');
            } else {
                $('.header_area .main-menu').removeClass('sticky-menu');
            }
        })
    }
}

stickymenu();

var mybutton = document.getElementById("backtop");

// Afficher le bouton retour vers le haut
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Bouton retour vers le haut remonte la page smoothly
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var image = document.getElementById("likes"),
    button = document.getElementById("pause");

if (image.classList && image && button) {
    button.onclick = function () {
        if (this.value == 'pause') {
            image.classList.add('pause');
            this.value = 'play';
        } else {
            image.classList.remove('pause');
            this.value = 'pause';
        }
    };
}

function alert_download_cv() {
    swal("Quelle version du CV souhaitez-vous ?", {
            buttons: {
                clair: "Version clair",
                sombre: "Version sombre",
                annuler: true,
            },
        })
        .then((value) => {
            switch (value) {

                case "clair":
                    swal("Merci !", "Pour avoir téléchargé mon CV", "success");
                    window.setTimeout(function () {
                        window.open('./cv_clair_leo_hilaire.html');
                    }, 1500);
                    break;

                case "sombre":
                    swal("Merci !", "Pour avoir téléchargé mon CV", "success");
                    window.setTimeout(function () {
                        window.open('./cv_sombre_leo_hilaire.html');
                    }, 1500);
                    break;

                default:
                    swal("Passez une bonne journée !", "", "success");
            }
        })
};