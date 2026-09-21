const mapImage = document.querySelector('#routing-layers');
const mapToggle = document.querySelector('#map-animation-toggle');
if (mapImage && mapToggle) {
  const stillSource = mapImage.getAttribute('src');
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  let playing = false;
  const setPlaying = value => {
    playing = value;
    mapImage.src = playing ? mapImage.dataset.animatedSrc : stillSource;
    mapToggle.textContent = playing ? 'Pause map animation' : 'Play map animation';
  };
  mapToggle.hidden = false;
  mapToggle.addEventListener('click', () => setPlaying(!playing));
  motionPreference.addEventListener('change', event => setPlaying(!event.matches));
  setPlaying(!motionPreference.matches);
}
