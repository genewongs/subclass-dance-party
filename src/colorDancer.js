var ColorDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  Dancer.apply(this, arguments);

};

//Prototypes
ColorDancer.prototype = Object.create(Dancer.prototype);
ColorDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  //move up and down

  var windowHeight = (window.innerHeight);
  //can use translateY or just inline css.
  var dancerHeight = this.$node.position();

  //if below screen height, bring it back up.
  if (dancerHeight.top >= windowHeight - 50) {
    this.$node.css('top', '-=200');
  }

  if (this.$node.hasClass('float')) {
    this.$node.removeClass('float ghost');
    // this.$node.css('top', '+=50')
  } else {
    this.$node.addClass('float');
    // this.$node.css('top', '-=50')
  }
  //on mouseover, fade in and out.

};


//Constructor
ColorDancer.prototype.constructor = ColorDancer;