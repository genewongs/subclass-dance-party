var FlyingDancer = function(top, left, timeBetweenSteps) {

};

//Prototypes
FlyingDancer.prototype = Object.create(Dancer.prototype);

//Constructor
FlyingDancer.prototype.constructor = FlyingDancer;

FlyingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  //changes position

};