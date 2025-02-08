
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

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
      color: 0x9b87f5,
      transparent: true,
      opacity: 0.8
    });

    const leftBracketMesh = new THREE.Mesh(geometry1, material);
    const rightBracketMesh = new THREE.Mesh(geometry2, material);

    scene.add(leftBracketMesh);
    scene.add(rightBracketMesh);

    camera.position.z = 5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      leftBracketMesh.rotation.x += 0.01;
      leftBracketMesh.rotation.y += 0.01;
      rightBracketMesh.rotation.x += 0.01;
      rightBracketMesh.rotation.y += 0.01;

      renderer.render(scene, camera);
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
