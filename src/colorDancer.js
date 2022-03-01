var ColorDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  Dancer.apply(this, arguments);

};

//Prototypes
ColorDancer.prototype = Object.create(Dancer.prototype);
ColorDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  //move up and down
  var topH = this.top + 50;
  var topD = this.top - 50;

  this.$node.animate({ "top": "+=500px" }, "slow");
  this.$node.animate({ "top" : "-=500px" }, "slow");
  //on mouseover, fade in and out.s

};


//Constructor
ColorDancer.prototype.constructor = ColorDancer;