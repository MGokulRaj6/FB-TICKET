let peopleInFront = 15;
const peopleCount = document.getElementById('peopleCount');
const progressBar = document.getElementById('progressBar');

function updateQueue() {
  if (peopleInFront > 0) {
    peopleInFront--;
    peopleCount.innerText = peopleInFront;
    progressBar.style.width = ((15 - peopleInFront) / 15 * 100) + '%';
  } else {
    window.location.href = 'booking.html'; // Redirect to booking page
  }
}

setInterval(updateQueue, 2000); // Every 2 seconds, reduce queue
