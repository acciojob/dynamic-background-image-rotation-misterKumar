//your JS code here. If required.
function setScreenOrientationBackground() {
  const body = document.querySelector('body');

  if (window.innerHeight > window.innerWidth) {
    body.classList.remove('landscape');
    body.classList.add('portrait');
  } else {
    body.classList.remove('portrait');
    body.classList.add('landscape');
  }
}

// Call the function initially
setScreenOrientationBackground();

// Listen for screen orientation changes
window.addEventListener('resize', setScreenOrientationBackground);