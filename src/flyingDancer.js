var FlyingDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  Dancer.apply(this, arguments);
  this.$node.addClass('crobat');

  this.$node.hover(function() {
    $(this).addClass('crobatHover');
  }, function() {
    $(this).removeClass('crobatHover');
  });
};

//Prototypes
FlyingDancer.prototype = Object.create(Dancer.prototype);

//Constructor
FlyingDancer.prototype.constructor = FlyingDancer;

FlyingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;
  //for when we deal with window
  var dancerHeight = this.$node.position();

  if (dancerHeight.top >= windowHeight - 200) {
    this.$node.css('top', '-=200');
  }

  if(dancerHeight.left >= windowWidth - 100) {
    this.$node.css('left', '-=400');
  }


  //changes position
  this.$node.addClass('fly');


};