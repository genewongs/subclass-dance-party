var FlyingDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  Dancer.apply(this, arguments);
};

//Prototypes
FlyingDancer.prototype = Object.create(Dancer.prototype);

//Constructor
FlyingDancer.prototype.constructor = FlyingDancer;

FlyingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  //for when we deal with window
  var dancerHeight = this.$node.position();
  //changes position
  this.$node.addClass('fly');
};