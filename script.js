// Wait for the HTML page to load
    // Get the button by its ID
var button = document.querySelector('#contact');
var close = document.querySelector('.close-button')

// Add an event listener to the button
button.addEventListener('click', function() {
  // Get the pop-up element by its ID
  var popUp = document.querySelector('#popup');

  // Change the pop-up's display property to 'block'
  popUp.style.display = 'block';
});


    // Get the text element
    var text = document.querySelector('.goat');
  
    // Add an event listener that updates the text's position
    // when the user moves their mouse
    document.addEventListener('mousemove', function(event) {
      text.style.top = event.clientY + 'px';
      text.style.left = event.clientX + 'px';
    });
    const mouseFollow = document.querySelector('.goat');

document.addEventListener('mousemove', (e) => {
  mouseFollow.style.cssText = `
    left: ${e.clientX - 5}px;
    top:  ${e.clientY - 5}px;
  `;
});
    
  
  