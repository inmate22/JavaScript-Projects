const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const progressBar = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');
let activeCircleLength = 1;

nextButton.addEventListener('click', () => {
  activeCircleLength++;
  if(activeCircleLength > circles.length)
    activeCircleLength = circles.length;
  updateProgress();
});

prevButton.addEventListener('click', () => {
  activeCircleLength--;
  if(activeCircleLength < 1)
    activeCircleLength = 1;
    updateProgress();
});

function updateProgress() {
  circles.forEach((circle, circleIndex) => {
    if(circleIndex < activeCircleLength)
      circle.classList.add('active');
    else
      circle.classList.remove('active');
  });

  const activeCircles = document.querySelectorAll('.active');
  progressBar.style.width = (activeCircles.length - 1) / (circles.length - 1) * 100 + '%';

  if(activeCircleLength === 1)
    prevButton.disabled = true;
  else if(activeCircleLength === circles.length)
    nextButton.disabled = true;
  else{
    prevButton.disabled = false;
    nextButton.disabled = false;
  }

};