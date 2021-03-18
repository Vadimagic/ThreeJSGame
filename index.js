// Создал сцену
const scene = new THREE.Scene();

// Добавил куб на сцену
const geometry = new THREE.BoxGeometry(3, 1, 3);
const material = new THREE.MeshLambertMaterial({color: 0xfb8e00});
const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0, 0, 0);
scene.add(mesh);

//Создаём свет
const ambientLight = new THREE.AmbientLight(0xfffff, .6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, .6);
directionalLight.position.set(10, 20, 0);
scene.add(directionalLight);