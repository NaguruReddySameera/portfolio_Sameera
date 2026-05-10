import { Canvas, useFrame } from "@react-three/fiber";

import {
  Stars,
} from "@react-three/drei";

import { useRef } from "react";

function RotatingStars() {

  const starsRef = useRef();

  useFrame(() => {

    starsRef.current.rotation.x += 0.0003;

    starsRef.current.rotation.y += 0.0005;

  });

  return (

    <group ref={starsRef}>

      <Stars
        radius={100}
        depth={50}
        count={6000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

    </group>

  );

}

const GalaxyBackground = () => {

  return (

    <div className="galaxy-bg">

      <Canvas camera={{ position: [0, 0, 1] }}>

        {/* LIGHT */}
        <ambientLight intensity={1} />

        {/* STARS */}
        <RotatingStars />

      </Canvas>

    </div>

  );

};

export default GalaxyBackground;