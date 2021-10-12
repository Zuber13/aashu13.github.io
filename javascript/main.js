$(document).ready(function () {

    $('a[href^="#"]').on("click", function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $("html,body").animate({
                scrollTop: $target.offset().top
            },
            1000,
            "swing"
        );
    });

    $("#menu-bar").on("click", function () {
        $('.menu').toggleClass('active');
    })
});

window.addEventListener('scroll',function(){
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
        goToTopButton.classList.add('addTopClass')
    }else{
        goToTopButton.classList.remove('addTopClass');
    }
})

function goToTop(){
    document.body.scrollTop = 0;
    document.documentElement = 0;
}


var i = 0;
var text = "Front-end developer, CodeNewbie, Free Code Camper, Wanna be full stack developer";

function typeWriter() {
    if (i < text.length) {
        document.getElementById('showText').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 150);
    }
}

window.addEventListener("load", typeWriter);