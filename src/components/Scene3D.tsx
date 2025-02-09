import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';

const Scene3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(300, 300);
    containerRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // GLTF Loader with Draco support
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/'); // Google's hosted Draco decoder
    loader.setDRACOLoader(dracoLoader);

    let bracketMesh: THREE.Object3D | null = null;

    loader.load('/3d-code.glb', (gltf) => {
      bracketMesh = gltf.scene;
      bracketMesh.scale.set(4, 4, 4);
      bracketMesh.position.set(0, 0, 0);
      bracketMesh.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          (child as THREE.Mesh).material = new THREE.MeshStandardMaterial({ color: 0xffffff });
        }
      });
      scene.add(bracketMesh);
    });

    // Image Sphere
    const texture = new THREE.TextureLoader().load('./2025-avatar.jpeg');
    const imageMesh = new THREE.Mesh(
      new THREE.SphereGeometry(3, 64, 64, 0, -Math.PI, 0, Math.PI),
      new THREE.MeshBasicMaterial({ map: texture, transparent: true }),
    );
    scene.add(imageMesh);

    // Outline effect
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    const outlinePass = new OutlinePass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      scene,
      camera
    );

    outlinePass.selectedObjects = [imageMesh];
    outlinePass.edgeStrength = 1.0;
    outlinePass.edgeGlow = 0.0;
    outlinePass.edgeThickness = 0.5;
    outlinePass.visibleEdgeColor.set('#ffffff');
    outlinePass.hiddenEdgeColor.set('#d11818');
    composer.addPass(outlinePass);

    camera.position.z = 5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      composer.render();

      // Rotation effect
      const res = Math.sin(Date.now() / 1200) * Math.PI / 0.2;
      imageMesh.rotation.y += 0.05;
      if (bracketMesh) bracketMesh.rotation.y = res;
    };

    animate();

    return () => {
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="w-[300px] h-[300px] mx-auto animate-float" />;
};

export default Scene3D;
