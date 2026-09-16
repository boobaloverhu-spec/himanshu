// Global Variables
let player;
let currentTrackIndex = 0;
let tracks = [];
let isPlaying = false;
let progressInterval;

// YouTube API
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '0',
    width: '0',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  console.log("Player ready");
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    isPlaying = true;
    document.getElementById('play-icon').className = "fas fa-pause";
    startProgress();
  } else {
    isPlaying = false;
    document.getElementById('play-icon').className = "fas fa-play";
    clearInterval(progressInterval);
  }
}

// Search YouTube Music
function searchYouTube() {
  const query = document.getElementById('search').value;
  if (!query) return;

  // In a real app, you would use the YouTube API here
  // For demo, we'll use placeholder data
  const results = [
    { id: "dQw4w9WgXcQ", title: "Never Gonna Give You Up", artist: "Rick Astley", thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/default.jpg" },
    { id: "9bZkp7q19f0", title: "Gangnam Style", artist: "PSY", thumbnail: "https://i.ytimg.com/vi/9bZkp7q19f0/default.jpg" },
    { id: "kJQP7kiw5Fk", title: "Despacito", artist: "Luis Fonsi", thumbnail: "https://i.ytimg.com/vi/kJQP7kiw5Fk/default.jpg" }
  ];

  displayResults(results);
}

function displayResults(results) {
  const tracksContainer = document.getElementById('tracks');
  tracksContainer.innerHTML = '';

  results.forEach((result, index) => {
    const trackElement = document.createElement('div');
    trackElement.className = 'track';
    trackElement.innerHTML = `
      <img src="${result.thumbnail}" alt="${result.title}">
      <div class="track-info">
        <h4>${result.title}</h4>
        <p>${result.artist}</p>
      </div>
    `;
    trackElement.onclick = () => playTrack(result);
    tracksContainer.appendChild(trackElement);
  });

  tracks = results;
  currentTrackIndex = 0;
}

// Play Track
function playTrack(track) {
  document.getElementById('album-art').src = track.thumbnail;
  document.getElementById('track-title').textContent = track.title;
  document.getElementById('track-artist').textContent = track.artist;

  if (player) {
    player.loadVideoById(track.id);
  }
}

// Toggle Play/Pause
function togglePlay() {
  if (!tracks.length) return;

  if (isPlaying) {
    player.pauseVideo();
  } else {
    player.playVideo();
  }
}

// Skip Track
function skipTrack(direction) {
  if (!tracks.length) return;

  if (direction === 'next') {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  } else {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
  }

  playTrack(tracks[currentTrackIndex]);
}

// Progress Bar
function startProgress() {
  const progressBar = document.getElementById('progress');
  progressBar.style.width = '0%';
  clearInterval(progressInterval);

  progressInterval = setInterval(() => {
    if (player && player.getDuration) {
      const currentTime = player.getCurrentTime();
      const duration = player.getDuration();
      const progress = (currentTime / duration) * 100;
      progressBar.style.width = `${progress}%`;

      if (progress >= 100) {
        skipTrack('next');
      }
    }
  }, 1000);
}

// Spotify Integration
function loginWithSpotify() {
  // In a real app, you would implement Spotify OAuth here
  alert("Spotify integration would go here. For demo, we'll use placeholder data.");

  // Placeholder data
  const spotifyTracks = [
    { id: "3YfTqBMX6DQ", title: "Blinding Lights", artist: "The Weeknd", thumbnail: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36" },
    { id: "6rqhFgbbKwnb9MLmUQDhG6", title: "Levitating", artist: "Dua Lipa", thumbnail: "https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a" },
    { id: "21jGcNKet2qwijlDFuPiPb", title: "Stay", artist: "The Kid LAROI, Justin Bieber", thumbnail: "https://i.scdn.co/image/ab67616d0000b2734e024d07b07b5a51cad190d1" }
  ];

  displayResults(spotifyTracks);
}
