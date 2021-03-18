document.body.appendChild(renderer.domElement);

let camera, scene, renderer; // Глобальные переменные Three js
const originalBoxSize = 3;

function init() {
  scene = new THREE.Scene();

  addLayer(0, 0, originalBoxSize, originalBoxSize);

  addLayer(-10. 0, originalBoxSize, originalBoxSize, 'x');

  const ambientLight = new THREE.AmbientLight(0xfffff, .6);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, .6);
  directionalLight.position.set(10, 20, 0);
  scene.add(directionalLight);

  const width = 10;
  const height = width * (window.innerHeight / window.innerWidth);
  camera = new THREE.OrthographicCamera(
    width / -2,
    width / 2,
    height / 2,
    height / -2,
    1, 
    100
  );

  camera.position.set(4, 4, 4);
  camera.lookAt(0, 0, 0);

  renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);
}