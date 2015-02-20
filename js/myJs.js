var circleArray = document.getElementsByClassName("circle"),
    interfaceLock = false,
    angle = 0;
    
    //chargearray();

function chargearray () {
    //alert(currentContentNum)
    for (var i = 0, j = circleArray.length; i < j; i++) {
        var circle = circleArray[i];
        var circleAngle = parseInt (circle.dataset.angle);
        var totalAngle = angle + circleAngle
        var style = "rotate(" + totalAngle + "deg) translate(245px)";
        totalAngle = - totalAngle;
        style = style + " rotate(" + totalAngle + "deg)"
        circle.style.webkitTransform = style;
        circle.style.Transform = style;
    }
}

window.setInterval(function(){
   
        angle+=30;
        chargearray();
}, 2000);

$(function() {
      
$.fx.step['degree']=function(fx){
    if(! fx.deg){
        fx.deg=0;
        if($(fx.elem).data("degree")){
            fx.deg=$(fx.elem).data("degree")
        }   
    }
    $(fx.elem).css({"WebkitTransform":"rotate("+Math.floor(fx.deg+(fx.end*fx.pos))+"deg)","-moz-transform":"rotate("+Math.floor(fx.deg+(fx.end*fx.pos))+"deg)","-ms-transform":"rotate("+Math.floor(fx.deg+(fx.end*fx.pos))+"deg)"});
    $(fx.elem).data("degree",Math.floor(fx.deg+(fx.end*fx.pos)));
    }
rotate(Math.floor(Math.random()*720)-360);
function rotate(r){
           var random=Math.floor(Math.random()*720)-360;
          $(".img-thumbnail-logo").animate({"degree":r},3000,function(){rotate(random)});
      }
      console.log("dddd");
 });

$(document).ready(function() {
    var f = document.getElementById('divider1');
    setInterval(function() {
        f.style.display = (f.style.display == 'none' ? '' : 'none');
    }, 1000); 
    
});