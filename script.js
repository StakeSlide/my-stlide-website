body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Arial, sans-serif;
  background: #0f172a;
  color: white;
}

#welcome-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0f172a;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  z-index: 1000;
  animation: fadeOut 2s ease forwards;
  animation-delay: 4s;
}

@keyframes fadeOut {
  to {
    opacity: 0;
    visibility: hidden;
  }
}

.container {
  padding: 20px;
  text-align: center;
}

#main-content {
  transition: opacity 1s ease;
}

.hidden {
  display: none;
}
