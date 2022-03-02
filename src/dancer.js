// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top + 50, left);

  //add mouseover event here??
  // this.$node.on('mouseover', function() {
  //   toggleClass();
  //   this.$node.addClass('double');
  // }).on('mouseleave', function() {
  //   this.$node.removeClass('double');
  // });

  this.$node.hover(function() {
    $(this).addClass('double');
  }, function() {
    $(this).removeClass('double');
  });


  //   var styleSettings = {
  //     transform: scale()
  //   };
  // this.$node.css(styleSettings);
};

//Methods
Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;
  var dancerHeight = this.$node.position();

  if (dancerHeight.top >= windowHeight - 100) {
    this.$node.css('top', '-=200');
  }
  if (dancerHeight.left >= windowWidth - 100) {
    this.$node.css('left', '-=200');
  }

  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

//Idea for lining all dancers up
//have a method that is called when the button is pressed then sets either the x or y value of dancer to all be the same.
Dancer.prototype.lineUp = function(top, left) {
  var windowHeight = (window.innerHeight);
  var navHeight = $('.topbar').height();
  var styleSettings = {
    top: (windowHeight / 2) - navHeight,
    left: left
  };
  this.$node.css(styleSettings);
};



//Constructor
//no need to set a constructor here since it's already it's own, and we never over-wrote it.


//step 1, refactor all methods to be in it's prototype
//step 2 - since pseudoclassical implicitly creates this = Object.create(whatver) and returns it, we can erase those lines
//step 3 = refactor using 'this' keyword


//Below is the code where it started

// // Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };

