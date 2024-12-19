// Detect scroll and trigger the appearance of content
window.addEventListener('scroll', function() {
    let boxes = document.querySelectorAll('.box');
  
    boxes.forEach(box => {
      if (isInViewport(box)) {
        box.classList.add('visible');
      }
    });
  });
  
  // Helper function to check if element is in viewport
  function isInViewport(element) {
    let rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  }
  