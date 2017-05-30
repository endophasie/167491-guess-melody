const modulePlayer = getElementFromTemplate(`
  <div class="player">
    <audio></audio>
    <button class="player-control">Play</button>
    <div class="player-track">
      <span class="player-status"></span>
    </div>
  </div>
`);

export default modulePlayer;
