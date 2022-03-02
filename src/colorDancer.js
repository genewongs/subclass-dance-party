var ColorDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  Dancer.apply(this, arguments);
  this.$node.addClass('gastly');
};

//Prototypes
ColorDancer.prototype = Object.create(Dancer.prototype);
ColorDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  //move up and down

  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;
  var navHeight = $('.topbar').height();

  //can use translateY or just inline css.
  var dancerHeight = this.$node.position();

  //if below screen height, bring it back up.
  if (dancerHeight.top >= windowHeight - 200) {
    this.$node.css('top', '-=200');
  }

  if (dancerHeight.left >= windowWidth - 200) {
    this.$node.css('left', '-=200');
  }


  if (this.$node.hasClass('float')) {
    this.$node.removeClass('float ghost');
  } else {
    this.$node.addClass('float');
  }

};


//Constructor
ColorDancer.prototype.constructor = ColorDancer;