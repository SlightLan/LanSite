console.log('This is homepage with canvas');

function drawStar(cxt, x, y, scale, color = '#FFFFFF') {
    cxt.moveTo(0.45*scale + x, 0.45*scale + y);
    cxt.lineTo(0.5*scale + x, y);
    cxt.lineTo(0.55*scale + x, 0.45*scale + y);
    cxt.lineTo(scale + x, 0.5*scale + y);
    cxt.lineTo(0.55*scale + x, 0.55*scale + y);
    cxt.lineTo(0.5*scale + x, scale + y);
    cxt.lineTo(0.45*scale + x, 0.55*scale + y);
    cxt.lineTo(x, 0.5*scale + y);
    cxt.lineTo(0.45*scale + x, 0.45*scale + y);
    cxt.fillStyle = '#FFFFFF';
    cxt.fill();
    cxt.strokeStyle = color;
    cxt.stroke();
}

function drawNarrowStar(cxt, x, y, scale, color = '#FFFFFF') {

    cxt.moveTo(0.45*scale + x, 0.45*scale + y);
    cxt.lineTo(0.5*scale + x, y);
    cxt.lineTo(0.55*scale + x, 0.45*scale + y);
    cxt.lineTo(0.8*scale + x, 0.5*scale + y);
    cxt.lineTo(0.55*scale + x, 0.55*scale + y);
    cxt.lineTo(0.5*scale + x, scale + y);
    cxt.lineTo(0.45*scale + x, 0.55*scale + y);
    cxt.lineTo(0.2*scale + x, 0.5*scale + y);
    cxt.lineTo(0.45*scale + x, 0.45*scale + y);
    cxt.fillStyle = '#FFFFFF';
    cxt.fill();
    cxt.strokeStyle = color;
    cxt.stroke();
}

function starTwinkle(star, cxt) {
    let starCanvaColor = document.getElementById('star_canvas_color');
    let draw = function() {
        cxt.clearRect(0, 0, star.width, star.height);
        drawStar(cxt, 5, 5, 10, window.getComputedStyle(starCanvaColor).backgroundColor);
        requestAnimationFrame(draw);
        console.log('color is:', window.getComputedStyle(starCanvaColor).backgroundColor);
    };
    draw();
}

function initCanva() {
    let canvas = document.getElementsByClassName('background_star_sky');
    let bg = document.createElement('div');
    canvas[0].appendChild(bg);
    bg.style.width = window.innerWidth.toString()+'px';
    bg.style.height = window.innerHeight.toString()+'px';
    for(let starNum = 0; starNum < 30; starNum += 1) {
        let star = document.createElement('canvas');
        star.className = 'star_canvas';
        star.id = starNum.toString();
        star.width = 20;
        star.height = 20;
        let starCxt = star.getContext('2d');
        starTwinkle(star, starCxt);
        bg.appendChild(star);
    }
}

document.addEventListener('DOMContentLoaded', initCanva);

