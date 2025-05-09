import { useGLTF } from "@react-three/drei";
import React, { useReducer, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Target(props) {
  const { scene } = useGLTF("/models/target.gltf");
  const targetRef = useRef();

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]}>
      <primitive object={scene} />
    </mesh>
  );
}
