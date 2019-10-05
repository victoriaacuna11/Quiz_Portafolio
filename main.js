// function scrollBoton(){
//     var html = document.getElementsByTagName("body")[0];
//     var boton = document.getElementById("Principal");
//     document.addEventListener("wheel",function(){
//         var topVent = html.scrollTop;
//         for(i=0;i<boton.length){

//         }
//     })
// }
var boton = document.getElementById("Principal");
var body = document.getElementsByName(body);
var htm = document.getElementsByName(html);

$(document).ready(funtion(){
    $(boton).click(funtion(){
        $(body, html).animate({
            scrollTop: '0px';
        })
    });
    $(window).scroll(function(){
        if($(this).scrollTop()>0){
            $('.Principal').slideDown();

        }else{
            $('.Principal').slideUp();
        }
    });
});

