$(document).ready(function() {
  window.dancers = [];

  var $navHeight = $('.topbar').height();
  var $navWidth = $('.topbar').width();

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    //implement the dancers into window array below.
    window.dancers.push(dancer);
  });

  //Line Up Function here?
  $('.lineUp').on('click', function(event) {
    //iterate through all dancers and call changePosition
    window.dancers.forEach(pokemon => {
      pokemon.lineUp();
    });
  });

  //MouseOver function
  window.dancers.forEach(pokemon => {
    pokemon.addEventListener('click', function(event) {
      console.log('hovered!');
    });
  });

});

//IDEAS
//on mousehover - make that pokemon grow huge in size?
//we can probably do this by forEach over window array and add event handler.
//then change the CSS property