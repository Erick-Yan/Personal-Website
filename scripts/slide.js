/*let slide = new Array();
        slide[0] = 'Images/Me2.jpg';
        slide[1] = 'Images/bIKE.jpg';
        slide[2] = 'Images/Leader2.jpg';
        let i = 0;

function slideFunc(){
        document.slide1.src = slide[i];

        if(i < slide.length-1){
                i++;
        } else{
                i = 0;
        }
        setTimeout("slideFunc()", 3000);
}

        window.onload=slideFunc;*/

document.addEventListener('DOMContentLoaded', function(e){
        var slide = document.getElementById("pbox");
        let slideInitial = function(e) {slide.appendChild(arr[0]);};
        var arr = slide.getElementsByTagName("img");

        for (let i = 0; i < arr.length; i++){
                arr[i].addEventListener("animationend", slideInitial, false);
        }
}, false);
