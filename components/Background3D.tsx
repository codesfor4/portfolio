
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Background3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // 1. Enhanced Star Field - More cosmic feel
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 50000; // Massive star field like real space
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      const radius = 1 + Math.random() * 50; // Wide space distribution
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      starPositions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      starPositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      starPositions[i3 + 2] = radius * Math.cos(phi);

      // Enhanced cosmic colors - more variety
      const colorType = Math.random();
      if (colorType < 0.4) {
        // Bright white stars
        starColors[i3] = 1;
        starColors[i3 + 1] = 1;
        starColors[i3 + 2] = 1;
      } else if (colorType < 0.65) {
        // Blue cosmic stars
        starColors[i3] = 0.6 + Math.random() * 0.3;
        starColors[i3 + 1] = 0.8 + Math.random() * 0.2;
        starColors[i3 + 2] = 1;
      } else if (colorType < 0.85) {
        // Purple cosmic stars
        starColors[i3] = 0.8 + Math.random() * 0.2;
        starColors[i3 + 1] = 0.6 + Math.random() * 0.2;
        starColors[i3 + 2] = 1;
      } else {
        // Warm golden stars
        starColors[i3] = 1;
        starColors[i3 + 1] = 0.8 + Math.random() * 0.2;
        starColors[i3 + 2] = 0.6 + Math.random() * 0.2;
      }

      // More dramatic size variation
      starSizes[i] = Math.random() < 0.95 ? 0.3 + Math.random() * 2 : 3 + Math.random() * 5;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));
    starGeometry.setAttribute('size', new THREE.BufferAttribute(starSizes, 1));

    const starMaterial = new THREE.PointsMaterial({
      size: 0.1,
      sizeAttenuation: true,
      transparent: true,
      alphaTest: 0.001,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // 2. Enhanced Twinkling stars layer with cosmic colors
    const twinkleGeometry = new THREE.BufferGeometry();
    const twinkleCount = 2000; // Dense twinkling star field
    const twinklePositions = new Float32Array(twinkleCount * 3);
    const twinkleColors = new Float32Array(twinkleCount * 3);

    for (let i = 0; i < twinkleCount; i++) {
      const i3 = i * 3;
      twinklePositions[i3] = (Math.random() - 0.5) * 30;
      twinklePositions[i3 + 1] = (Math.random() - 0.5) * 30;
      twinklePositions[i3 + 2] = (Math.random() - 0.5) * 25;

      // Cosmic twinkling colors
      const colorType = Math.random();
      if (colorType < 0.3) {
        // Bright blue
        twinkleColors[i3] = 0.4;
        twinkleColors[i3 + 1] = 0.8;
        twinkleColors[i3 + 2] = 1;
      } else if (colorType < 0.6) {
        // Purple
        twinkleColors[i3] = 0.8;
        twinkleColors[i3 + 1] = 0.4;
        twinkleColors[i3 + 2] = 1;
      } else {
        // White
        twinkleColors[i3] = 1;
        twinkleColors[i3 + 1] = 1;
        twinkleColors[i3 + 2] = 1;
      }
    }

    twinkleGeometry.setAttribute('position', new THREE.BufferAttribute(twinklePositions, 3));
    twinkleGeometry.setAttribute('color', new THREE.BufferAttribute(twinkleColors, 3));
    const twinkleMaterial = new THREE.PointsMaterial({
      size: 0.15,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
    });
    const twinkleStars = new THREE.Points(twinkleGeometry, twinkleMaterial);
    scene.add(twinkleStars);

    // 3. Nebula clouds
    const nebulaGeometry = new THREE.BufferGeometry();
    const nebulaCount = 1000;
    const nebulaPositions = new Float32Array(nebulaCount * 3);
    for (let i = 0; i < nebulaCount * 3; i++) {
      nebulaPositions[i] = (Math.random() - 0.5) * 20;
    }
    nebulaGeometry.setAttribute('position', new THREE.BufferAttribute(nebulaPositions, 3));
    const nebulaMaterial = new THREE.PointsMaterial({
      size: 0.15,
      color: 0x4f46e5,
      transparent: true,
      opacity: 0.08,
      blending: THREE.AdditiveBlending,
    });
    const nebula = new THREE.Points(nebulaGeometry, nebulaMaterial);
    scene.add(nebula);

    camera.position.z = 3;

    // Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let time = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      // Smooth camera movement
      targetX += (mouseX - targetX) * 0.03;
      targetY += (mouseY - targetY) * 0.03;

      // Enhanced cosmic rotation
      stars.rotation.y += 0.0002;
      stars.rotation.x += 0.0001;
      stars.rotation.z += 0.00005;

      nebula.rotation.y -= 0.0003;
      nebula.rotation.x += 0.0001;

      // Enhanced twinkle effect with pulsing
      twinkleMaterial.opacity = 0.5 + Math.sin(time * 3) * 0.4 + Math.cos(time * 1.5) * 0.2;
      twinkleStars.rotation.y += 0.0005;
      twinkleStars.rotation.z += 0.0002;

      // Parallax effect
      scene.position.x = targetX * 0.15;
      scene.position.y = targetY * 0.15;

      renderer.render(scene, camera);
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      starGeometry.dispose();
      starMaterial.dispose();
      twinkleGeometry.dispose();
      twinkleMaterial.dispose();
      nebulaGeometry.dispose();
      nebulaMaterial.dispose();
    };
  }, []);

  return (
    <>
      {/* Deep space background */}
      <div className="fixed inset-0 -z-30 pointer-events-none bg-black" />
      
      {/* Three.js massive star field */}
      <div ref={containerRef} className="fixed inset-0 -z-10 pointer-events-none" />
    </>
  );
};

export default Background3D;
