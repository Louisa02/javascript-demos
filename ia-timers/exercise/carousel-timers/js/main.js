//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals#Active_learning_Creating_your_own_stopwatch!
let images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'];
let currentImage = 0;
//Add the global variable here.
let slideShow;

document.querySelector('.carousel>img').src = 'images/' + images[0]; 

document.querySelector('.carousel').addEventListener('click', function (evt){
    if (evt.target.className == 'control prev') {
        moveSlide(-1);
    } else if (evt.target.className == 'control next'){
        moveSlide(+1);
    }   
});

function moveSlide(dir) {
	currentImage += dir;
	if (currentImage < 0) {
		currentImage = images.length - 1;
	} else if (currentImage === images.length) {
		currentImage = 0;
	}
    document.querySelector('.carousel>img').src = 'images/' + images[currentImage];
}

//Add your code here to start the timer.
slideShow = setInterval (function () {
    moveSlide(+1)
}, 3000);