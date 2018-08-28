// http://www.stickpng.com/assets/images/590602570cbeef0acff9a633.png
var $ = require('jquery');
var amountRange = [5, 10];
var scaleRange = [0.4, 0.725];
var wiggleSpeedRange = [0.4, 2.5];

// Get a random integer from 0 to the number
// specified
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate the noses
function createNoses(amount) {
  var amount = amount || getRandom(amountRange[0], amountRange[1]);
  var pageWidth = $('body').width();
  var pageHeight = $('body').height();
  var noses = [];

  for (var i = 0; i < amount; i++) {
    var scale = getRandom(scaleRange[0] * 100, scaleRange[1] * 100) / 100;

    // The markup
    var el = $(
      '<img src="http://www.stickpng.com/assets/images/590602570cbeef0acff9a633.png" />'
    );

    // Positioning
    el.css({
      position: 'absolute',
      left: getRandom(0, pageWidth),
      top: getRandom(0, pageHeight)
    });

    // Scaling
    el.css('transform', 'scale(' + scale + ')');

    // Injection
    $('body').append(el);

    // Store the element
    noses.push({ el: el, scale: scale });
  }

  // Update the noses (animate them)
  setInterval(function() {
    for (var i = 0; i < noses.length; i++) {
      var nose = noses[i];
    }
  }, 1000 / 30);
}

module.exports = createNoses;
