
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

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

    // Create code symbol shapes
    const leftBracket = new THREE.Shape();
    leftBracket.moveTo(-0.4, 0.8);
    leftBracket.lineTo(-0.8, 0.4);
    leftBracket.lineTo(-0.8, -0.4);
    leftBracket.lineTo(-0.4, -0.8);
    leftBracket.lineTo(-0.6, -0.8);
    leftBracket.lineTo(-1, -0.4);
    leftBracket.lineTo(-1, 0.4);
    leftBracket.lineTo(-0.6, 0.8);
    leftBracket.closePath();

    const rightBracket = new THREE.Shape();
    rightBracket.moveTo(0.4, 0.8);
    rightBracket.lineTo(0.8, 0.4);
    rightBracket.lineTo(0.8, -0.4);
    rightBracket.lineTo(0.4, -0.8);
    rightBracket.lineTo(0.6, -0.8);
    rightBracket.lineTo(1, -0.4);
    rightBracket.lineTo(1, 0.4);
    rightBracket.lineTo(0.6, 0.8);
    rightBracket.closePath();

    const geometry1 = new THREE.ExtrudeGeometry(leftBracket, {
      depth: 0.2,
      bevelEnabled: false
    });

    const geometry2 = new THREE.ExtrudeGeometry(rightBracket, {
      depth: 0.2,
      bevelEnabled: false
    });

    const material = new THREE.MeshPhongMaterial({
      color: '#d40000',
      transparent: true,
      opacity: 1
    });

    const leftBracketMesh = new THREE.Mesh(geometry1, material);
    const rightBracketMesh = new THREE.Mesh(geometry2, material);

    scene.add(leftBracketMesh);
    scene.add(rightBracketMesh);

    const texture = new THREE.TextureLoader().load('./2025-avatar.jpeg');
    // show edge of sphere on image
    const imageMesh = new THREE.Mesh(
      new THREE.SphereGeometry(3, 64, 64, 0, -Math.PI, 0, Math.PI),
      new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true
      }),
    );

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    const outlinePass = new OutlinePass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      scene,
      camera
    );

    outlinePass.selectedObjects = [imageMesh]; // Apply outline to the image sphere


    outlinePass.edgeStrength = 1.0;  // Lower values for a thinner outline
    outlinePass.edgeGlow = 0.0;      // Remove glowing effect
    outlinePass.edgeThickness = 0.5; // Reduce thickness
    outlinePass.visibleEdgeColor.set('#ffffff'); // Set edge color to white for better contrast
    outlinePass.hiddenEdgeColor.set('#d11818'); // Ensure hidden edges blend properly
    composer.addPass(outlinePass);


    camera.position.z = 5;
    scene.add(imageMesh);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      // renderer.render(scene, camera);

      // Use composer instead of renderer
      composer.render();

      // swing the image from left to right and back using sine
      const res  =Math.sin(Date.now() / 1200) * Math.PI / 0.2;
      // imageMesh.rotation.y = Math.sin(Date.now() / 1200) * Math.PI / 7;
      imageMesh.rotation.y += 0.05;
      leftBracketMesh.rotation.y = res;
      rightBracketMesh.rotation.y = res;
    };

    animate();

    // Cleanup
    return () => {
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="w-[300px] h-[300px] mx-auto animate-float" />;
};

export default Scene3D;
