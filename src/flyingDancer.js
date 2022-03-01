var FlyingDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  Dancer.apply(this, arguments);
  this.$node.addClass('crobat');
};

//Prototypes
FlyingDancer.prototype = Object.create(Dancer.prototype);

//Constructor
FlyingDancer.prototype.constructor = FlyingDancer;

FlyingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  var windowHeight = (window.innerHeight);
  //for when we deal with window
  var dancerHeight = this.$node.position();

  if (dancerHeight.top >= windowHeight - 70) {
    this.$node.css('top', '-=100');
  }
  //changes position
  this.$node.addClass('fly');


};