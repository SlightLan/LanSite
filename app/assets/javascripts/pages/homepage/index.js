console.log('This is homepage with canvas');

function drawStar(cxt, x, y, scale, color = '#FFFFFF') {
    cxt.moveTo(x, 0.5*scale + y)
    cxt.lineTo(0.45*scale + x, 0.45*scale + y);
    cxt.lineTo(0.5*scale + x, y);
    cxt.lineTo(0.55*scale + x, 0.45*scale + y);
    cxt.lineTo(scale + x, 0.5*scale + y);
    cxt.lineTo(0.55*scale + x, 0.55*scale + y);
    cxt.lineTo(0.5*scale + x, scale + y);
    cxt.lineTo(0.45*scale + x, 0.55*scale + y);
    cxt.lineTo(x, 0.5*scale + y);
    cxt.fillStyle = '#FFFFFF';
    cxt.fill();
    cxt.strokeStyle = color;
    cxt.stroke();
}

function drawNarrowStar(cxt, x, y, scale, color = '#FFFFFF') {
    cxt.moveTo(0.2*scale + x, 0.5*scale + y)
    cxt.lineTo(0.45*scale + x, 0.45*scale + y);
    cxt.lineTo(0.5*scale + x, y);
    cxt.lineTo(0.55*scale + x, 0.45*scale + y);
    cxt.lineTo(0.8*scale + x, 0.5*scale + y);
    cxt.lineTo(0.55*scale + x, 0.55*scale + y);
    cxt.lineTo(0.5*scale + x, scale + y);
    cxt.lineTo(0.45*scale + x, 0.55*scale + y);
    cxt.lineTo(0.2*scale + x, 0.5*scale + y);
    cxt.fillStyle = '#FFFFFF';
    cxt.fill();
    cxt.strokeStyle = color;
    cxt.stroke();
}

function initCanva() {
    var canvas = document.getElementById('background_star_sky');
    var cxt = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    cxt.fillStyle = '#66CCFF';
    cxt.fillRect(0, 0, canvas.width, canvas.height);
    drawStar(cxt, 0, 0, 80, '#FFFF00');
    drawNarrowStar(cxt, 540, 210, 40, '#FFFF00');
}

document.addEventListener('DOMContentLoaded', initCanva);

