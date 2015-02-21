

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
$(document).ready(function(){
    $('.circle').each(function(i){
            console.log("in"+i);
            var time = 500*(i+1);
            setTimeout(function(){
                $('.circle').eq(i).addClass('open').animate({opacity: '1'}, i);
            }, time);
        });
       
    function fade() {    
        
        $('.circle').each(function(i){
            console.log("out"+i);
            var time = 7000+500*(i+1);
            setInterval(function(){
                $('.circle').eq(i).removeClass('open').animate({opacity: '0'}, i);
            }, time);
        });
         $('.circle').each(function(i){
            console.log("in"+i);
            if (i<=3) {
                var time=4000+500*(i+4);
            }else{
            var time = 5500+500*(i+1);}
            setInterval(function(){
                $('.circle').eq(i).addClass('open').animate({opacity: '1'}, i);
            }, time);
        });
    }
    fade();
    var f = document.getElementById('divider1');
    setInterval(function() {
        f.style.display = (f.style.display == 'none' ? '' : 'none');
    }, 3000); 
});

