import initCanva from './star_twinkle'

document.addEventListener('DOMContentLoaded', initCanva);

window.onresize = function(){
    let canvas = document.getElementsByClassName('background_star_sky');
    let bg = canvas[0].firstChild;
    for(let i = bg.childNodes.length; i > 0; i--){
        bg.removeChild(bg.firstChild);
    }
    canvas[0].removeChild(bg);
    initCanva();
};
