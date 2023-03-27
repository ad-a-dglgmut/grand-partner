let headerHeight;
let loader = document.getElementById("preloader");
window.addEventListener("load", () => {
    loader.style.display = "none";
    headerHeight=$('#myCarousel').height();
})

let height = $(document).height();
let width = $(document).width();
let nav = document.getElementById("nav");
if(width<=998)
{
    $("#nav").css('background-color', '#da9f5b');
}else {
    window.onscroll = ()=> {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        if(top <= headerHeight) {
                $("#nav").css('background-color', 'transparent');
        }
        else {
           $("#nav").css('background-color', '#da9f5b');
        }
    }
}


