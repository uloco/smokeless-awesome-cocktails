import { useGLTF } from "@react-three/drei";
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function Box(props: any) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  //@ts-ignore
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01));
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

export const R3FExample = () => {
  return (
    // <Canvas camera={{ position: [100, 100, -100000], fov: 50 }}>
    // <Canvas camera={{ position: [0, 0, 100] }}>
    //   {/* <Scene /> */}
    //   <ambientLight />
    //   <pointLight position={[10, 10, 10]} />
    //   <Box position={[-1.2, 0, 0]} />
    //   <Box position={[1.2, 0, 0]} />
    // </Canvas>
    <Canvas>
      <Scene />
    </Canvas>
  );
};

function Scene() {
  // const gltf = useLoader(GLTFLoader, "models/cylinders_only.gltf");
  // const gltf = useLoader(GLTFLoader, "models/cocktail_all.gltf");
  // const gltf = useLoader(GLTFLoader, "models/lemon_only.gltf");
  const gltf = useGLTF("models/lemon_only.gltf");
  // const camera = gltf.cameras[0];
  console.log(gltf.cameras);

  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
  );
}
