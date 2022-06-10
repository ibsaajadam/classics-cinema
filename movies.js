// Add Image of Movie on Click
$(".brigade .prices").click(function() {
  $('.brigade .movie').addClass('active');
  $('.movie').not('.brigade .movie').removeClass('active');
  document.getElementById("selected").innerHTML = "<img src='images/movie-1.jpeg' />";
  $('.show').addClass('all');
});

$(".blank .prices").click(function() {
  document.getElementById("selected").innerHTML = "<img src='images/movie-2.jpg' />";
  $('.show').addClass('all');
});

$(".pee .prices").click(function() {
  document.getElementById("selected").innerHTML = "<img src='images/movie-3.jpeg' />";
  $('.show').addClass('all');
});

$(".air .prices").click(function() {
  document.getElementById("selected").innerHTML = "<img src='images/movie-4.jpg' />";
  $('.show').addClass('all');
});

$(".meteor .prices").click(function() {
  document.getElementById("selected").innerHTML = "<img src='images/movie-5.jpeg' />";
  $('.show').addClass('all');
});

$(".johnny .prices").click(function() {
  document.getElementById("selected").innerHTML = "<img src='images/movie-6.jpg' />";
  $('.show').addClass('all');
});

$(".bud .prices").click(function() {
  document.getElementById("selected").innerHTML = "<img src='images/movie-7.jpg' />";
  $('.show').addClass('all');
});

$(".green .prices").click(function() {
  document.getElementById("selected").innerHTML = "<img src='images/movie-8.jpg' />";
  $('.show').addClass('all');
});

$(".brink .prices").click(function() {
  document.getElementById("selected").innerHTML = "<img src='images/movie-9.jpeg' />";
  $('.show').addClass('all');
});

$(".first .prices").click(function() {
  document.getElementById("selected").innerHTML = "<img src='images/movie-10.jpeg' />";
  $('.show').addClass('all');
});

$(".motor .prices").click(function() {
  document.getElementById("selected").innerHTML = "<img src='images/movie-11.jpg' />";
  $('.show').addClass('all');
});

$(".phantom .prices").click(function() {
  document.getElementById("selected").innerHTML = "<img src='images/movie-12.jpeg' />";
  $('.show').addClass('all');
});


// Movie Showtimes
const brigade = document.querySelector('.brigade');
const blank = document.querySelector('.blank');
const pee = document.querySelector('.pee');
const air = document.querySelector('.air');
const meteor = document.querySelector('.meteor');
const johnny = document.querySelector('.johnny');
const bud = document.querySelector('.bud');
const green = document.querySelector('.green');
const brink = document.querySelector('.brink');
const first = document.querySelector('.first');
const motor = document.querySelector('.motor');
const phantom = document.querySelector('.phantom');

const timesOne = document.querySelector('.times-one');
const timesTwo = document.querySelector('.times-two');
const timesThree = document.querySelector('.times-three');
const timesFour = document.querySelector('.times-four');
const timesFive = document.querySelector('.times-five');
const timesSix = document.querySelector('.times-six');
const timesSeven = document.querySelector('.times-seven');
const timesEight = document.querySelector('.times-eight');
const timesNine = document.querySelector('.times-nine');
const timesTen = document.querySelector('.times-ten');
const timesEleven = document.querySelector('.times-eleven');
const timesTwelve = document.querySelector('.times-twelve');

const movieOne = document.querySelector('.one');
const movieTwo = document.querySelector('.two');
const movieThree = document.querySelector('.three');
const movieFour = document.querySelector('.four');
const movieFive = document.querySelector('.five');
const movieSix = document.querySelector('.six');
const movieSeven = document.querySelector('.seven');
const movieEight = document.querySelector('.eight');
const movieNine = document.querySelector('.nine');
const movieTen = document.querySelector('.ten');
const movieEleven = document.querySelector('.eleven');
const movieTwelve = document.querySelector('.twelve');


// Paper Brigade
brigade.addEventListener('mouseover', function() {
   timesOne.style.display = 'block';
   movieOne.style.opacity = 0.2;

});

brigade.addEventListener('mouseout', function() {
   timesOne.style.display = 'none';
   movieOne.style.opacity = 1;
});


// Blank Check
blank.addEventListener('mouseover', function() {
  timesTwo.style.display = 'block';
  movieTwo.style.opacity = 0.2;
});

blank.addEventListener('mouseout', function() {
  timesTwo.style.display = 'none';
  movieTwo.style.opacity = 1;
});

// Pee Wee's Big Adventure
pee.addEventListener('mouseover', function() {
  timesThree.style.display = 'block';
  movieThree.style.opacity = 0.2;
});

pee.addEventListener('mouseout', function() {
  timesThree.style.display = 'none';
  movieThree.style.opacity = 1;
});

// The Air Up There
air.addEventListener('mouseover', function() {
  timesFour.style.display = 'block';
  movieFour.style.opacity = 0.2;
});

air.addEventListener('mouseout', function() {
  timesFour.style.display = 'none';
  movieFour.style.opacity = 1;
});

// The Meteor Man
meteor.addEventListener('mouseover', function() {
  timesFive.style.display = 'block';
  movieFive.style.opacity = 0.2;
});

meteor.addEventListener('mouseout', function() {
  timesFive.style.display = 'none';
  movieFive.style.opacity = 1;
});

// Johnny Tsunami
johnny.addEventListener('mouseover', function() {
  timesSix.style.display = 'block';
  movieSix.style.opacity = 0.2;
});

johnny.addEventListener('mouseout', function() {
  timesSix.style.display = 'none';
  movieSix.style.opacity = 1;
});

// Air Bud
bud.addEventListener('mouseover', function() {
  timesSeven.style.display = 'block';
  movieSeven.style.opacity = 0.2;
});

bud.addEventListener('mouseout', function() {
  timesSeven.style.display = 'none';
  movieSeven.style.opacity = 1;
});

// The Big Green
green.addEventListener('mouseover', function() {
  timesEight.style.display = 'block';
  movieEight.style.opacity = 0.2;
});

green.addEventListener('mouseout', function() {
  timesEight.style.display = 'none';
  movieEight.style.opacity = 1;
});

// Brink
brink.addEventListener('mouseover', function() {
  timesNine.style.display = 'block';
  movieNine.style.opacity = 0.2;
});

brink.addEventListener('mouseout', function() {
  timesNine.style.display = 'none';
  movieNine.style.opacity = 1;
});

// First Kid
first.addEventListener('mouseover', function() {
  timesTen.style.display = 'block';
  movieTen.style.opacity = 0.2;
});

first.addEventListener('mouseout', function() {
  timesTen.style.display = 'none';
  movieTen.style.opacity = 1;
});

// MotorCrossed
motor.addEventListener('mouseover', function() {
  timesEleven.style.display = 'block';
  movieEleven.style.opacity = 0.2;
});

motor.addEventListener('mouseout', function() {
  timesEleven.style.display = 'none';
  movieEleven.style.opacity = 1;
});

// Phantom of the Megaplex
phantom.addEventListener('mouseover', function() {
  timesTwelve.style.display = 'block';
  movieTwelve.style.opacity = 0.2;
});

phantom.addEventListener('mouseout', function() {
  timesTwelve.style.display = 'none';
  movieTwelve.style.opacity = 1;
});