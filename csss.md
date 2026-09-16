:root {
  --primary: #6C5CE7;
  --secondary: #A29BFE;
  --dark: #1a1a2e;
  --darker: #16213e;
  --light: #F5F6FA;
  --accent: #00d2d3;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, var(--dark) 0%, var(--darker) 100%);
  color: var(--light);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.player-container {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 30px;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.header {
  text-align: center;
  margin-bottom: 25px;
}

.header h1 {
  font-size: 2rem;
  background: linear-gradient(45deg, var(--primary), var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 5px;
}

.header p {
  color: var(--secondary);
  font-size: 0.9rem;
}

.search-container {
  display: flex;
  margin-bottom: 20px;
  gap: 10px;
}

.search-container input {
  flex: 1;
  padding: 12px 15px;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  color: var(--light);
  font-size: 0.9rem;
  outline: none;
  transition: all 0.3s;
}

.search-container input:focus {
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 0 2px var(--primary);
}

.search-container input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.search-container button {
  padding: 12px 20px;
  border: none;
  background: var(--primary);
  color: white;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1rem;
}

.search-container button:hover {
  background: var(--secondary);
  transform: scale(1.05);
}

.spotify-btn {
  width: 100%;
  padding: 12px;
  background: #1DB954;
  color: white;
  border: none;
  border-radius: 10px;
  margin-bottom: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  transition: all 0.3s;
}

.spotify-btn:hover {
  background: #1ED760;
  transform: scale(1.02);
  box-shadow: 0 5px 20px rgba(29, 185, 84, 0.4);
}

.playlist h2 {
  font-size: 1.1rem;
  margin-bottom: 15px;
  color: var(--secondary);
}

.tracks {
  max-height: 200px;
  overflow-y: auto;
  margin-bottom: 25px;
}

.tracks::-webkit-scrollbar {
  width: 6px;
}

.tracks::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 3px;
}

.tracks::-webkit-scrollbar-thumb {
  background: var(--primary);
  border-radius: 3px;
}

.track {
  display: flex;
  align-items: center;
  padding: 12px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.3s;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: translateX(0); }
}

.track:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(5px);
}

.track img {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  margin-right: 12px;
  object-fit: cover;
}

.track .track-info h4 {
  font-size: 0.95rem;
  margin-bottom: 3px;
  color: var(--light);
}

.track .track-info p {
  font-size: 0.8rem;
  color: var(--secondary);
}

.now-playing {
  display: flex;
  align-items: center;
  padding: 15px;
  background: rgba(108, 92, 231, 0.2);
  border-radius: 12px;
  margin-bottom: 20px;
  border: 1px solid rgba(108, 92, 231, 0.3);
}

.now-playing img {
  width: 70px;
  height: 70px;
  border-radius: 10px;
  margin-right: 15px;
  object-fit: cover;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(108, 92, 231, 0.4); }
  50% { box-shadow: 0 0 0 10px rgba(108, 92, 231, 0); }
}

.now-playing .track-info h3 {
  font-size: 1rem;
  margin-bottom: 5px;
  color: var(--light);
}

.now-playing .track-info p {
  font-size: 0.85rem;
  color: var(--secondary);
}

.progress-container {
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  margin-bottom: 25px;
  cursor: pointer;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  border-radius: 3px;
  width: 0%;
  transition: width 0.1s linear;
  position: relative;
}

.progress::after {
  content: '';
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
  background: var(--light);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
}

.controls button {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: var(--light);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s;
}

.controls button:hover {
  background: var(--primary);
  transform: scale(1.1);
  box-shadow: 0 5px 20px rgba(108, 92, 231, 0.4);
}

.controls button:nth-child(2) {
  width: 65px;
  height: 65px;
  background: var(--primary);
  font-size: 1.5rem;
}

.controls button:nth-child(2):hover {
  background: var(--secondary);
  transform: scale(1.15);
}

/* Mobile Responsive */
@media (max-width: 480px) {
  .player-container {
    padding: 20px;
  }
  
  .header h1 {
    font-size: 1.5rem;
  }
  
  .controls button {
    width: 45px;
    height: 45px;
  }
  
  .controls button:nth-child(2) {
    width: 55px;
    height: 55px;
  }
}
