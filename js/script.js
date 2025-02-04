var positionY;
var scrollTop;
var lastPositionX =0;

$( document ).ready(function() {
  var hauteurFenetre = $(window).width();
  var largeurFenetre = $(window).height();
  scrollTop = $(window).scrollTop();
  const svg = document.getElementById('masque');})

$(window).on('scroll', function (){
  var scrollTop = $(window).scrollTop();
// Définir les limites de scale
var minScale = 0.5;  // Taille minimale (ex: 80% de la taille initiale)
var maxScale = 1.5;  // Taille maximale (ex: 150% de la taille initiale)
// Convertir la valeur du scroll en un scale entre minScale et maxScale
var scaleValue = Math.max(minScale, Math.min(maxScale, scrollTop * 0.001 -0.2));  
  $(".pupil").css({
    "transform-origin": "center center",
    "transform": `scale(${scaleValue})`
  });

  $(".eye-svg").css({
    "transform-origin": "center center",
    "transform": `scale(${scaleValue})`
  });
})

document.addEventListener("DOMContentLoaded", () => {
  const eyes = document.querySelectorAll(".eye");
  const pupils = document.querySelectorAll(".pupil");

  document.addEventListener("mousemove", (event) => {
      eyes.forEach((eye, index) => {
          const pupil = pupils[index]; // Associe chaque pupille à son œil

          const eyeRect = eye.getBoundingClientRect(); // Prend en compte le positionnement absolu
          const eyeCenterX = eyeRect.left + eyeRect.width / 2;
          const eyeCenterY = eyeRect.top + eyeRect.height / 2;

          const deltaX = event.clientX - eyeCenterX;
          const deltaY = event.clientY - eyeCenterY;
          const angle = Math.atan2(deltaY, deltaX);

          // Limite le déplacement de la pupille
          const maxMove = 45;
          const pupilX = Math.cos(angle) * maxMove;
          const pupilY = Math.sin(angle) * maxMove;

          // Déplace la pupille
          pupil.style.transform = `translate(${pupilX - 50}%, ${pupilY - 50}%)`;
      });
  });
});

