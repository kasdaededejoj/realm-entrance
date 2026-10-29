import * as THREE from 'three';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';

const app = document.querySelector('#app');
const overlay = document.querySelector('#overlay');
const error = document.querySelector('#error');
let renderer;
try {
  renderer = new THREE.WebGLRenderer({ antialias: true });
} catch {
  error.textContent = 'This browser could not start the 3D view. Try a desktop browser with WebGL enabled.';
  document.querySelector('#start').disabled = true;
  throw new Error('WebGL renderer unavailable');
}
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
app.appendChild(renderer.domElement);
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x100d17);
scene.fog = new THREE.Fog(0x100d17, 9, 32);
const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, .1, 80);
const controls = new PointerLockControls(camera, document.body);
const keys = new Set();
const start = document.querySelector('#start');
start.addEventListener('click', () => controls.lock());
document.addEventListener('pointerlockerror', () => { error.textContent = 'Mouse capture was blocked. Open this page in a desktop browser and try again.'; });
controls.addEventListener('lock', () => { overlay.classList.add('hidden'); });
controls.addEventListener('unlock', () => { keys.clear(); overlay.classList.remove('hidden'); start.textContent = 'resume'; });
window.addEventListener('blur', () => { keys.clear(); if (controls.isLocked) controls.unlock(); });
function reset() { camera.position.set(0, 1.7, 7); camera.rotation.set(0, 0, 0); keys.clear(); }
reset();
window.addEventListener('keydown', e => { if (e.code === 'KeyR') reset(); if (controls.isLocked) keys.add(e.code); });
window.addEventListener('keyup', e => keys.delete(e.code));
window.addEventListener('resize', () => { camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); renderer.setSize(innerWidth, innerHeight); });

scene.add(new THREE.HemisphereLight(0x77677e, 0x100b12, 1.2));
const lamp = new THREE.PointLight(0xbc638c, 85, 16); lamp.position.set(0, 5, -2); scene.add(lamp);
const backlight = new THREE.PointLight(0x526688, 55, 14); backlight.position.set(0, 4, -10); scene.add(backlight);
const material = (color, roughness = 1) => new THREE.MeshStandardMaterial({ color, roughness, flatShading: true });
const stone = material(0x28232c), dark = material(0x17151d), floor = material(0x24202a), metal = material(0x685363, .75);
function box(w, h, d, x, y, z, mat) { const mesh = new THREE.Mesh(new THREE.BoxGeometry(w,h,d), mat); mesh.position.set(x,y,z); scene.add(mesh); return mesh; }
box(20,.3,30,0,-.15,-1,floor); box(20,.4,30,0,8,-1,dark);
box(.5,8,30,-8,4,-1,stone); box(.5,8,30,8,4,-1,stone); box(16,8,.5,0,4,10,stone);
// A closed threshold: its framing is visual only at this review gate.
box(6,8,.6,-5,4,-9,stone); box(6,8,.6,5,4,-9,stone); box(4,2,.6,0,7,-9,stone);
box(4,6,.4,0,3,-9.3,dark);
for (const side of [-1,1]) for (const z of [-6,0,6]) {
  const column = box(.85,6.8,.85,side*6.6,3.4,z,stone); column.rotation.y = .2 * side;
}
box(2.5,.65,2.5,0,.325,-2,dark);
const relic = new THREE.Mesh(new THREE.IcosahedronGeometry(1.1,0), metal); relic.position.set(0,2,-2); relic.rotation.set(.25,.2,.1); relic.scale.set(.7,1.4,.55); scene.add(relic);
const traceMat = new THREE.MeshBasicMaterial({color:0x996578});
for (let z=5; z>-1; z-=1.4) { const mark = box(.04,.012,.55,0,.016,z,traceMat); mark.rotation.y=.24; }
const clock = new THREE.Clock();
function frame() {
  requestAnimationFrame(frame);
  const dt = Math.min(clock.getDelta(), .05);
  if (controls.isLocked) {
    const forward = Number(keys.has('KeyW')) - Number(keys.has('KeyS'));
    const right = Number(keys.has('KeyD')) - Number(keys.has('KeyA'));
    const length = Math.hypot(forward, right) || 1;
    const old = camera.position.clone();
    controls.moveForward(forward / length * dt * 3); controls.moveRight(right / length * dt * 3);
    camera.position.x = THREE.MathUtils.clamp(camera.position.x, -7.4, 7.4);
    camera.position.z = THREE.MathUtils.clamp(camera.position.z, -8.5, 9.4);
    // Keep the pedestal solid while allowing the visitor to walk around it.
    if (Math.abs(camera.position.x)<1.65 && Math.abs(camera.position.z+2)<1.65) camera.position.copy(old);
    camera.position.y = 1.7;
  }
  renderer.render(scene,camera);
}
frame();
