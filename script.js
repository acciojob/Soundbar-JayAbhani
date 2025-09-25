// List of sounds (place audio files inside "sounds/" folder)
const sounds = ['sound1', 'sound2', 'sound3', 'sound4'];

const buttons = document.getElementById('buttons');

// Create a button for each sound
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  // Play sound when button is clicked
  btn.addEventListener('click', () => {
    stopSounds();
    const audio = document.getElementById(sound);
    audio.play();
  });

  buttons.appendChild(btn);

  // Add hidden audio element for each sound
  const audio = document.createElement('audio');
  audio.src = `./sounds/${sound}.mp3`; // make sure files exist
  audio.id = sound;
  document.body.appendChild(audio);
});

// Add Stop button
const stopBtn = document.createElement('button');
stopBtn.classList.add('stop');
stopBtn.innerText = 'Stop';

stopBtn.addEventListener('click', stopSounds);

buttons.appendChild(stopBtn);

// Stop all sounds
function stopSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0; // reset
  });
}
