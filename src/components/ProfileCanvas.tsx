import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState, useEffect, Suspense } from "react";
import * as THREE from "three";
import profileImg from "@/assets/profile.png";

const BackgroundPlane = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(THREE.TextureLoader, profileImg);
  const time = useRef(0);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const rotationRef = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setPointer({ x, y });
    };
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    time.current += delta;

    // Subtle floating
    meshRef.current.position.y = Math.sin(time.current * 0.4) * 0.05;

    // Mouse tilt
    targetRotation.current.x = pointer.y * 0.06;
    targetRotation.current.y = pointer.x * 0.06;

    rotationRef.current.x += (targetRotation.current.x - rotationRef.current.x) * 2 * delta;
    rotationRef.current.y += (targetRotation.current.y - rotationRef.current.y) * 2 * delta;

    meshRef.current.rotation.x = rotationRef.current.x;
    meshRef.current.rotation.y = rotationRef.current.y;

    // Scroll depth
    meshRef.current.position.z = -scrollRef.current * 0.001;
  });

  // Calculate aspect ratio for the plane to cover viewport
  const aspect = texture.image ? texture.image.width / texture.image.height : 16 / 9;
  const planeHeight = 6;
  const planeWidth = planeHeight * aspect;

  return (
    <group>
      {/* Glow layers */}
      <mesh position={[0, 0, -0.3]}>
        <planeGeometry args={[planeWidth + 1, planeHeight + 1]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.04} />
      </mesh>
      <mesh position={[0, 0, -0.2]}>
        <planeGeometry args={[planeWidth + 0.5, planeHeight + 0.5]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.03} />
      </mesh>

      {/* Main image */}
      <mesh ref={meshRef}>
        <planeGeometry args={[planeWidth, planeHeight]} />
        <meshBasicMaterial map={texture} transparent opacity={0.35} />
      </mesh>
    </group>
  );
};

const ProfileCanvas = () => {
  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }} gl={{ alpha: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <BackgroundPlane />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ProfileCanvas;
