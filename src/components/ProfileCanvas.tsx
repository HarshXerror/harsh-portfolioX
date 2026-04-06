import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState, useEffect, Suspense } from "react";
import * as THREE from "three";
import profileImg from "@/assets/profile.png";

const ProfilePlane = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(THREE.TextureLoader, profileImg);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const rotationRef = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });
  const time = useRef(0);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setPointer({ x, y });

      if (isDragging) {
        const dx = e.clientX - dragStart.x;
        const dy = e.clientY - dragStart.y;
        targetRotation.current.y = dx * 0.01;
        targetRotation.current.x = -dy * 0.005;
      }
    };
    const handleMouseUp = () => setIsDragging(false);
    const handleScroll = () => {
      if (meshRef.current) {
        const scrollY = window.scrollY;
        meshRef.current.position.z = -scrollY * 0.002;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDragging, dragStart]);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    time.current += delta;

    // Floating animation
    meshRef.current.position.y = Math.sin(time.current * 0.8) * 0.15;

    if (!isDragging) {
      // Tilt based on mouse
      targetRotation.current.x = pointer.y * 0.15;
      targetRotation.current.y = pointer.x * 0.15;
    }

    rotationRef.current.x += (targetRotation.current.x - rotationRef.current.x) * 3 * delta;
    rotationRef.current.y += (targetRotation.current.y - rotationRef.current.y) * 3 * delta;

    meshRef.current.rotation.x = rotationRef.current.x;
    meshRef.current.rotation.y = rotationRef.current.y;
  });

  return (
    <group>
      {/* Glow */}
      <mesh position={[0, 0, -0.1]}>
        <circleGeometry args={[2.2, 64]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.08} />
      </mesh>
      <mesh position={[0, 0, -0.05]}>
        <circleGeometry args={[1.9, 64]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.06} />
      </mesh>

      {/* Profile image on circular plane */}
      <mesh
        ref={meshRef}
        onPointerDown={(e) => {
          setIsDragging(true);
          setDragStart({ x: e.clientX ?? 0, y: e.clientY ?? 0 });
        }}
      >
        <circleGeometry args={[1.7, 64]} />
        <meshBasicMaterial map={texture} transparent />
      </mesh>
    </group>
  );
};

const ProfileCanvas = () => {
  return (
    <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }} gl={{ alpha: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <ProfilePlane />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ProfileCanvas;
