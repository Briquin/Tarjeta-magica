
function openEnvelope() {
  const envelope = document.querySelector('.envelope-img');
  const message = document.getElementById('message');
  const sound = document.getElementById('chime-sound');
  
  envelope.style.transform = "rotateX(180deg)";
  setTimeout(() => {
    message.style.display = "block";
  }, 800);
  
  sound.play();
}
