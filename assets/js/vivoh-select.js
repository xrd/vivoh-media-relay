const urls = [];
let player = undefined;

function play(index) {
    const url = urls[index];
    const canvas = document.getElementById('video-canvas');
    console.log( index, "Will play: ", url, "canvas", canvas )
    if (player) {
	player.destroy();
    }
    else {
	player = new JSMpeg.Player(url, {canvas: canvas});
    }
}

function writePlayer()  {
    let images = [];
    for( var i = 1; i < 6; i++ ) {
    const logo = `/images/${i}.png`;    
    const host = document.location.host;
    const url = `ws://${host}/239.0.0.${i}:1234`;
	urls.push(url)
	const image = document.createElement("img")
	image.src = logo;
	const j = i;
	image.onclick = function() { play(j-1) };
	images.push(image);
    }
    
    const parent = document.getElementById('buttons');
    parent.innerHTML = "";
    images.forEach( img => {
	parent.appendChild(img);
    })
}

document.addEventListener("DOMContentLoaded", (event) => {
    writePlayer()
})
