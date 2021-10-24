var rainMusic = new Audio('rain.mp3');
rainMusic.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);


var coffeeMusic = new Audio('coffee.mp3');
coffeeMusic.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);


var riverMusic = new Audio('river.mp3');
riverMusic.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);



function playNoMusic(){

    pauseRainMusic();
    pauseCoffeeMusic();
    pauseRiverMusic();

    }
function playRainMusic(){

    pauseCoffeeMusic();
    pauseRiverMusic();
    rainMusic.play();

    }
function playCoffeeMusic(){

    pauseRainMusic();
    pauseRiverMusic();
    coffeeMusic.play();

    }
function playRiverMusic(){

    pauseRainMusic();
    pauseCoffeeMusic();
    riverMusic.play();
    riverMusic.volume = 0.2;
    
    }

function pauseRainMusic(){
    rainMusic.pause();
    rainMusic.currentTime = 0;
}

function pauseCoffeeMusic(){
    coffeeMusic.pause();
    coffeeMusic.currentTime = 0;
}

function pauseRiverMusic(){
    riverMusic.pause();
    riverMusic.currentTime = 0;
}