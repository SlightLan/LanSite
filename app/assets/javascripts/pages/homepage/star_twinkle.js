window.requestAnimationFrame = (function(){
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function (callback) { window.setTimeout(callback, 1000 / 60); };
})();

let starList = [];
let vertexList = [];
let opacityList = [];

let fps = 5;
let now;
let before = Date.now();
let interval = 1000/fps;
let past;

function playTwinkle() {
    requestAnimationFrame(playTwinkle);
    now = Date.now();
    past = now - before;
    if(past > interval){
        before = now - (past % interval);
        starTwinkle();
    }
}

function starTwinkle() {
    for(let i = 0; i < starList.length; i++){
        let star = starList[i];
        let cxt = star.getContext('2d');
        let size = star.width;
        cxt.clearRect(0,0,size,size);
        cxt.save();
        cxt.globalAlpha = (Math.random() + opacityList[i] * 2) / 3.0;
        drawStar(cxt, vertexList[i], size);
        cxt.restore();
    }
}

let starInit = function(star, cxt, vertexNum, size) {
    let transX = Math.floor(Math.random() * window.innerWidth - size);
    let transY = Math.floor(Math.random() * window.innerHeight - size);
    star.style.position ='absolute';
    star.style.left = transX+'px';
    star.style.top = transY+'px';
    cxt.globalCompositeOperation = 'lighter';
    cxt.save();
    cxt.restore();
    drawStar(cxt, vertexNum, size);
};

function drawStar(cxt, vertexNum, size) {
    cxt.clearRect(0,0,size,size);
    let radius = size * 0.5;
    for(let i = 0, count = vertexNum * 2; i < count; i++) {
        let r = i % 2 ? radius * 0.1 : radius;
        let a = Math.PI * 2 * i / count;
        cxt[ i === 0 ? 'moveTo' : 'lineTo'](radius + r * Math.cos(a), radius + r * Math.sin(a));
    }
    cxt.fill();
}

export default function initCanva() {
    let canvas = document.getElementsByClassName('background_star_sky');
    let bg = document.createElement('div');
    canvas[0].appendChild(bg);
    bg.style.width = window.innerWidth.toString()+'px';
    bg.style.height = window.innerHeight.toString()+'px';

    for(let starNum = 0; starNum < 60; starNum += 1) {
        let star = document.createElement('canvas');
        star.className = 'star_canvas';
        star.id = starNum.toString();
        let size = Math.floor(Math.random() * (16 - 1)+ 1);

        if(size >= 6){
            vertexList.push(Math.floor((Math.random() * ( 5 - 3) + 3)) * 2);
        } else {
            vertexList.push(Math.floor((Math.random() * ( 4 - 2) + 2)) * 2);
        }
        opacityList.push(1);
        star.width = star.height = size;
        let starCxt = star.getContext('2d');
        starCxt.fillStyle = '#FFFFFF';
        starInit(star, starCxt, vertexList[starNum],size);
        bg.appendChild(star);
        starList.push(star);
    }
    playTwinkle();
}
