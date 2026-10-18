import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeHeroScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1.2, 5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    container.appendChild(renderer.domElement);

    // Dynamic Atmospheric Lighting
    const ambientLight = new THREE.AmbientLight(0x0a101d, 1.2);
    scene.add(ambientLight);

    // Warm Interior Glow (Amber light subtle reflection)
    const warmLight = new THREE.PointLight(0xf59e0b, 2.2, 20);
    warmLight.position.set(-1.8, 1.5, -1);
    scene.add(warmLight);

    // Blue-hour cool skylight
    const coolSkyLight = new THREE.DirectionalLight(0x38bdf8, 0.8);
    coolSkyLight.position.set(2, 6, 3);
    scene.add(coolSkyLight);

    // Reflective Water Plane (Simulating infinity pool in foreground)
    const planeGeo = new THREE.PlaneGeometry(18, 14, 48, 48);
    const planeMat = new THREE.MeshStandardMaterial({
      color: 0x050811,
      roughness: 0.15,
      metalness: 0.9,
      transparent: true,
      opacity: 0.45,
    });
    const waterPlane = new THREE.Mesh(planeGeo, planeMat);
    waterPlane.rotation.x = -Math.PI / 2.08;
    waterPlane.position.set(0, -2.1, -1);
    scene.add(waterPlane);

    // Ultra-Fine Shimmer Dust / Rain particles (Tiny & elegant)
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const speeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 16;
      positions[i + 1] = Math.random() * 7 - 2;
      positions[i + 2] = (Math.random() - 0.5) * 6;
      speeds[i / 3] = 0.005 + Math.random() * 0.008;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xbae6fd,
      size: 0.015,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Mouse Parallax coordinates
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (event.clientX / innerWidth - 0.5) * 2;
      mouseY = (event.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Scroll Reaction
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Handle Resize (Ignore mobile URL bar collapse height-only changes)
    let lastWidth = window.innerWidth;
    const handleResize = () => {
      if (!container) return;
      const width = window.innerWidth;
      if (Math.abs(width - lastWidth) < 15) return;
      lastWidth = width;

      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera interpolation (Parallax mouse look only, no artificial scroll zoom)
      targetX += (mouseX - targetX) * 0.03;
      targetY += (mouseY - targetY) * 0.03;

      camera.position.x = targetX * 0.35;
      camera.position.y = 1.2 - targetY * 0.25;
      camera.position.z = 5;
      camera.lookAt(0, 0.2, -1);

      // Animate water plane subtle waves
      const posAttr = planeGeo.attributes.position;
      for (let i = 0; i < posAttr.count; i++) {
        const u = posAttr.getX(i);
        const v = posAttr.getY(i);
        const wave = Math.sin(u * 1.5 + elapsedTime * 1.2) * 0.025 + Math.cos(v * 1.5 + elapsedTime * 1.0) * 0.025;
        posAttr.setZ(i, wave);
      }
      posAttr.needsUpdate = true;

      // Animate rain / mist particles
      const pPositions = particleGeo.attributes.position.array;
      for (let i = 1; i < particleCount * 3; i += 3) {
        pPositions[i] -= speeds[(i - 1) / 3];
        if (pPositions[i] < -2.5) {
          pPositions[i] = 5;
        }
      }
      particleGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      renderer.dispose();
      planeGeo.dispose();
      planeMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full pointer-events-none z-10" />;
};
