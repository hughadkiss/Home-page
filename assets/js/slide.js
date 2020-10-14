window.addEventListener('scroll', function() {
    if (window.scrollY > 99) {
        document.querySelector('.header_all-menu').classList.add('showbar');
    } else {
        document.querySelector('.header_all-menu').classList.remove('showbar');
    }
})

$(document).ready(function () {
    var stt = 0;
    starImg = $("img.header_img:first").attr("stt");
    endImg = $("img.header_img:last").attr("stt");
    $("img.header_img").each(function () { 
         if($(this).is(':visible'))
            stt = $(this).attr("stt");
    });


    var statusAni = true;
    $(".header_img").on('animationend', function() {
        statusAni = true;
    })

    $("#header_next").click(function () {
        if (statusAni == true) {
            if (stt == endImg) {
                stt = -1;
            }
            header_next = ++stt;
            $("img.header_img").addClass('header_hidden_left');
            $("img.header_img").removeClass('header_show_left header_show_right display-none');
            $("img.header_img").eq(header_next).addClass('header_show_left');
            $("img.header_img").eq(header_next).removeClass('header_hidden_left header_hidden_right');
            statusAni = false;
        }
        
    });
    $("#header_previous").click(function () { 
        if (statusAni == true) {
            if(stt == 0) {
                stt = endImg;
                header_previous = stt++;
            }
            header_previous = --stt;
            $("img.header_img").addClass('header_hidden_right');
            $("img.header_img").removeClass('header_show_left header_show_right display-none');
            $("img.header_img").eq(header_previous).addClass('header_show_right');
            $("img.header_img").eq(header_previous).removeClass('header_hidden_left header_hidden_right');
            statusAni = false;
        }
    });
});

