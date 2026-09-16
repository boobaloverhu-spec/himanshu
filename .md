let player;
let isPlaying = false;
let currentTrack = 0;
let progressInterval;

const tracks = [
  { id: 'dQw4w9WgXcQ', title: 'Never Gonna Give You Up', artist: 'Rick Astley', thumb: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/default.jpg' },
  { id: '9bZkp7q19f0', title: 'Gangnam Style', artist: 'PSY', thumb: 'https://i.ytimg.com/vi/9bZkp7q19f0/default.jpg' }
];

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '0',
    width: '0',
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    isPlaying = true;
    document.querySelector('#play-btn i').className = 'fas fa-pause';
    startProgress();
  } else {
    isPlaying = false;
    document.querySelector('#play-btn i').className = 'fas fa-play';
    clearInterval(progressInterval);
  }
}

function playTrack(index) {
  currentTrack = index;
  const track = tracks[index];
  document.getElementById('track-title').textContent = track.title;
  document.getElementById('track-artist').textContent = track.artist;
  document.getElementById('album-art').src = track.thumb;
  
  if (player && player.loadVideoById) {
    player.loadVideoById(track.id);
  }
}

function playSample(index) {
  playTrack(index);
}

function togglePlay() {
  if (!player) return;
  if (isPlaying) {
    player.pauseVideo();
  } else {
    if (player.getPlayerState() === YT.PlayerState.ENDED) {
      playTrack(currentTrack);
    } else {
      player.playVideo();
    }
  }
}

function prevTrack() {
  let newIndex = currentTrack - 1;
  if (newIndex < 0) newIndex = tracks.length - 1;
  playTrack(newIndex);
}

function nextTrack() {
  let newIndex = currentTrack + 1;
  if (newIndex >= tracks.length) newIndex = 0;
  playTrack(newIndex);
}

function startProgress() {
  clearInterval(progressInterval);
  progressInterval = setInterval(() => {
    if (player && player.getCurrentTime && player.getDuration) {
      const current = player.getCurrentTime();
      const duration = player.getDuration();
      if (duration > 0) {
        const percent = (current / duration) * 100;
        document.getElementById('progress').style.width = percent + '%';
      }
    }
  }, 1000);
}

function seek(event) {
  const container = document.querySelector('.progress-container');
  const clickX = event.offsetX;
  const width = container.offsetWidth;
  const percent = clickX / width;
  
  if (player && player.getDuration) {
    const duration = player.getDuration();
    player.seekTo(duration * percent);
  }
}

function searchYouTube() {
  const query = document.getElementById('search').value;
  if (!query) return;
  alert('Search feature needs YouTube API key. For demo, click the sample tracks above!');
}

function importSpotify() {
  alert('Spotify integration needs API setup. For demo, use the sample tracks!');
}

// Initialize first track info
document.addEventListener('DOMContentLoaded', () => {
  if (tracks.length > 0) {
    document.getElementById('track-title').textContent = 'Select a track';
    document.getElementById('track-artist').textContent = 'Click any song above';
  }
});
