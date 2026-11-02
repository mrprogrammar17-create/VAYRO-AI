import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import brandBadgeImg from '../assets/images/vayro_brand_badge_1791497089067.jpg';

export const Hero3DCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);
  const [isInteracting, setIsInteracting] = useState<boolean>(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability safely
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    let renderer: THREE.WebGLRenderer | null = null;
    let animationFrameId: number;
    let canvasElem: HTMLCanvasElement | null = null;

    try {
      // Three.js Scene Setup
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x080808, 0.04);

      const camera = new THREE.PerspectiveCamera(
        45,
        container.clientWidth / (container.clientHeight || 1),
        0.1,
        100
      );
      camera.position.set(0, 0, 7.5);

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });

      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.25;
      container.appendChild(renderer.domElement);
      canvasElem = renderer.domElement;

    // Group for the floating VAYRO emblem
    const emblemGroup = new THREE.Group();
    scene.add(emblemGroup);

    // --- LEFT WING: Sculpted Beveled Metallic Silver ---
    const leftWingShape = new THREE.Shape();
    leftWingShape.moveTo(-1.8, 1.6);
    leftWingShape.lineTo(-0.7, 1.6);
    leftWingShape.lineTo(0.0, -1.8);
    leftWingShape.lineTo(-0.6, -1.8);
    leftWingShape.closePath();

    const extrudeSettingsLeft = {
      depth: 0.28,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 2,
      bevelSize: 0.08,
      bevelThickness: 0.08,
    };

    const leftWingGeometry = new THREE.ExtrudeGeometry(leftWingShape, extrudeSettingsLeft);
    leftWingGeometry.center();

    const silverMaterial = new THREE.MeshStandardMaterial({
      color: 0xeeeeee,
      metalness: 0.96,
      roughness: 0.16,
      envMapIntensity: 1.5,
    });

    const leftWingMesh = new THREE.Mesh(leftWingGeometry, silverMaterial);
    leftWingMesh.position.set(-0.65, 0, 0);
    leftWingMesh.rotation.z = 0.04;
    emblemGroup.add(leftWingMesh);

    // --- RIGHT WING: Curved Ribbon Wing (Signature Crimson Red) ---
    // Create curved spline ribbon shape
    const rightWingShape = new THREE.Shape();
    rightWingShape.moveTo(0.0, -1.8);
    rightWingShape.lineTo(1.8, 1.6);
    rightWingShape.bezierCurveTo(1.4, 1.5, 0.9, 0.9, 0.6, -0.2);
    rightWingShape.bezierCurveTo(0.4, -0.9, 0.2, -1.4, 0.0, -1.8);
    rightWingShape.closePath();

    const extrudeSettingsRight = {
      depth: 0.24,
      bevelEnabled: true,
      bevelSegments: 5,
      steps: 4,
      bevelSize: 0.06,
      bevelThickness: 0.06,
    };

    const rightWingGeometry = new THREE.ExtrudeGeometry(rightWingShape, extrudeSettingsRight);
    rightWingGeometry.center();

    const crimsonMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xff1e29,
      emissive: 0x660006,
      emissiveIntensity: 0.35,
      metalness: 0.82,
      roughness: 0.22,
      clearcoat: 0.6,
      clearcoatRoughness: 0.15,
      sheen: 1.0,
      sheenRoughness: 0.3,
      sheenColor: new THREE.Color(0xff4450),
    });

    const rightWingMesh = new THREE.Mesh(rightWingGeometry, crimsonMaterial);
    rightWingMesh.position.set(0.65, 0, 0.08);
    rightWingMesh.rotation.z = -0.06;
    rightWingMesh.rotation.y = -0.15;
    emblemGroup.add(rightWingMesh);

    // Center the whole emblem
    emblemGroup.position.set(0, 0.1, 0);

    // Subtle Particle Field (Atmospheric floating particles)
    const particleCount = 180;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const silverColor = new THREE.Color(0xd9dde2);
    const crimsonColor = new THREE.Color(0xff202b);

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      positions[idx] = (Math.random() - 0.5) * 14;
      positions[idx + 1] = (Math.random() - 0.5) * 10;
      positions[idx + 2] = (Math.random() - 0.5) * 8;

      const c = Math.random() > 0.4 ? crimsonColor : silverColor;
      colors[idx] = c.r;
      colors[idx + 1] = c.g;
      colors[idx + 2] = c.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // --- Cinematic Studio Lighting ---
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Key Light (Crisp directional white light for metallic speculars)
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.8);
    keyLight.position.set(4, 5, 5);
    scene.add(keyLight);

    // Crimson Rim Spotlight (Creates signature VAYRO red rim reflection)
    const crimsonRim = new THREE.SpotLight(0xff1824, 6.5, 18, Math.PI / 4, 0.6);
    crimsonRim.position.set(-3.5, 2, -2.5);
    scene.add(crimsonRim);

    // Secondary fill light
    const fillLight = new THREE.DirectionalLight(0xd9dde2, 1.2);
    fillLight.position.set(-4, -3, 3);
    scene.add(fillLight);

    // Under-glow point light
    const underGlow = new THREE.PointLight(0xff202b, 2.5, 8);
    underGlow.position.set(0, -2.5, 1);
    scene.add(underGlow);

    // --- Mouse Parallax & Animation Loop ---
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Touch support for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        mouseX = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
        mouseY = -(((touch.clientY - rect.top) / rect.height) * 2 - 1);
      }
    };
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // WebGL Context Lost / Restored handling
    const handleContextLost = (e: Event) => {
      e.preventDefault();
      setHasWebGL(false);
    };

    const handleContextRestored = () => {
      setHasWebGL(true);
    };

    if (canvasElem) {
      canvasElem.addEventListener('webglcontextlost', handleContextLost, false);
      canvasElem.addEventListener('webglcontextrestored', handleContextRestored, false);
    }

    // Resize handler
    const handleResize = () => {
      if (!container || !renderer) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / (height || 1);
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      try {
        const elapsedTime = clock.getElapsedTime();

        // Gentle floating animation
        emblemGroup.position.y = 0.08 + Math.sin(elapsedTime * 1.2) * 0.12;

        // Smooth lerp to mouse targets
        targetRotationY = mouseX * 0.45;
        targetRotationX = -mouseY * 0.35;

        emblemGroup.rotation.y += (targetRotationY - emblemGroup.rotation.y + Math.sin(elapsedTime * 0.6) * 0.08) * 0.05;
        emblemGroup.rotation.x += (targetRotationX - emblemGroup.rotation.x) * 0.05;

        // Slow particle drift
        particles.rotation.y = elapsedTime * 0.03;
        particles.rotation.x = Math.sin(elapsedTime * 0.02) * 0.05;

        // Pulse underglow slightly
        underGlow.intensity = 2.0 + Math.sin(elapsedTime * 2.5) * 0.8;

        if (renderer) {
          renderer.render(scene, camera);
        }
      } catch {
        // If render frame fails, cancel loop gracefully
        cancelAnimationFrame(animationFrameId);
        setHasWebGL(false);
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      if (canvasElem) {
        canvasElem.removeEventListener('webglcontextlost', handleContextLost);
        canvasElem.removeEventListener('webglcontextrestored', handleContextRestored);
      }
      if (container && renderer?.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      if (renderer) {
        renderer.dispose();
      }
      leftWingGeometry.dispose();
      rightWingGeometry.dispose();
      particleGeometry.dispose();
      silverMaterial.dispose();
      crimsonMaterial.dispose();
      particleMaterial.dispose();
    };
  } catch (err) {
    console.warn('Three.js initialization notice:', err);
    setHasWebGL(false);
  }
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[380px] sm:h-[480px] lg:h-[560px] flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing"
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      aria-label="Interactive 3D VAYRO emblem"
    >
      {/* Background radial crimson spotlight aura */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10">
        <div className="w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] rounded-full bg-gradient-to-tr from-[#FF202B]/15 via-[#FF202B]/5 to-transparent blur-3xl opacity-75" />
      </div>

      {/* Interactive Helper Hint */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none transition-opacity duration-300 opacity-60 hover:opacity-100 flex items-center gap-2 text-[11px] text-[#D9DDE2]/60 uppercase tracking-widest font-mono">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FF202B] animate-pulse" />
        Interactive 3D Object · Drag or Move to Orbit
      </div>

      {/* Graceful Fallback if WebGL is unavailable */}
      {!hasWebGL && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <img
            src={brandBadgeImg}
            alt="VAYRO 3D Emblem"
            className="w-48 h-48 object-contain drop-shadow-[0_0_30px_rgba(255,32,43,0.5)]"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </div>
  );
};
