import initCanva from './star_twinkle'

document.addEventListener('DOMContentLoaded', initCanva);

window.onresize = function(){
    let canvas = document.getElementsByClassName('background_star_sky');
    let bg = canvas[0].firstChild;
    bg.style.width = window.innerWidth.toString()+'px';
    bg.style.height = window.innerHeight.toString()+'px';
    console.log(bg.childNodes.length);
    for(let i = bg.childNodes.length-1; i >= 0; i--){
        let child = bg.childNodes[i];
        let size = child.width;
        let transX = Math.floor(Math.random() * window.innerWidth - size);
        let transY = Math.floor(Math.random() * window.innerHeight - size);
        child.style.left = transX+'px';
        child.style.top = transY+'px';
    }
};
