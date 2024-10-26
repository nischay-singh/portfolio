import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import MainRoom from "../components/MainRoom";
import CanvasLoader from "../components/CanvasLoader";
import React, { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Rings";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";

export default function Hero() {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans z-10">
          Hi, I am Nischay
        </p>
        <p className="hero_tag text-gray_gradient z-10">
          Aspiring Software Engineer
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <color attach="background" args={["#090909"]} />

          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <MainRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0.6, -1.6, 0.4]}
              />
            </HeroCamera>

            <group>
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Target position={sizes.targetPosition} scale={1.5} />
              <Rings position={sizes.ringPosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight
              position={[-0.3, -2.1, 3.1]}
              intensity={Math.PI * 2}
            ></directionalLight>
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-20 c-space">
        <a href="#contact" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
}
