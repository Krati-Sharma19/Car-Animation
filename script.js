var audio = document.createElement('audio');
audio.setAttribute('src', 'sound.mp3');
audio.loop = true;
// audio.play();
audio.play().catch(function(error) {
    console.log('Playback error:', error);
});