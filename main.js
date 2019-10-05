// function scrollBoton(){
//     var html = document.getElementsByTagName("body")[0];
//     var boton = document.getElementById("Principal");
//     document.addEventListener("wheel",function(){
//         var topVent = html.scrollTop;
//         for(i=0;i<boton.length){

//         }
//     })
// }


// $(document).ready(funtion(){
//     $('#Principal').click(funtion(){
//         $('body, html').animate({
//             scrollTop: '0px';
//         })
//     });
//     $(window).scroll(function(){
//         if($(this).scrollTop()>0){
//             $('.Principal').slideDown();

//         }else{
//             $('.Principal').slideUp();
//         }
//     });
// });

var button = document.getElementById("Principal");
window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop>50 || document.documentElement.scrollTop>50){
        button.style.display="block";
    } else {
        button.style.display="none";
    }
}
function topFunction(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}