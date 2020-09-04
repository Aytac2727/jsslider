var Prev = document.getElementById("prev");
var Next = document.getElementById("next");
var Slider = document.querySelectorAll(".slider-item");

var now = 0;

Next.onclick = function (){
    SliderShow(now+1);
}

Prev.onclick = function (){
    SliderShow(now-1);
}


function SliderShow(say) {
    Slider[now].classList.remove("slider-active");
    now = (now + 1 +Slider.length)%Slider.length;
    Slider[now].classList.add("slider-active");
}