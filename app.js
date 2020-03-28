
  $('.ch').click(() => {
    if($('.glow').length) {
      $('#light').removeClass('glow');
      pauseSound('buzz')
    } else {
      $("#light").addClass('glow');
      playSound('buzz')
    }
  })


 function playSound(animal) {
  document.getElementById(animal).play();
};

function pauseSound(animal) {
  document.getElementById(animal).pause();
};