document.addEventListener('DOMContentLoaded', function() {
  var flashContainer = document.getElementById('flash-messages')
  if (flashContainer) {
    setTimeout(function() { flashContainer.remove() }, 5000)
  }
})
