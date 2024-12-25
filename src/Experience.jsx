import { OrbitControls } from "@react-three/drei";
import {
  Vignette,
  EffectComposer,
  ToneMapping,
  Glitch,
  Noise,
  Bloom,
  DepthOfField,
} from "@react-three/postprocessing";
import { Perf } from "r3f-perf";
import { ToneMappingMode, BlendFunction, GlitchMode } from "postprocessing";
import Drunk from "./Drunk";
import { useRef } from "react";
import { useControls } from "leva";

export default function Experience() {
  const drunkRef = useRef();

  const drunkControls = useControls("drunkEffect", {
    frequency: { value: 3, min: 0, max: 20, step: 0.1 },
    amplitude: { value: 0.1, min: 0, max: 1 },
  });

  return (
    <>
      <EffectComposer>
        {/* <Vignette
          offset={0.3}
          darkness={0.7}
          blendFunction={BlendFunction.NORMAL}
          /> */}
        {/* <Glitch
          delay={[1.0, 0.9]}
          duration={[0.4, 0.6]}
          strength={[0.3, 0.1]}
          /> */}
        {/* <Noise premultiply blendFunction={BlendFunction.SOFT_LIGHT} /> */}
        {/* <Bloom luminanceThreshold={0} intensity={0.1} mipmapBlur /> */}

        {/* <DepthOfField
          focusDistance={0.025}
          focalLength={0.025}
          bokehScale={6}
        /> */}
        <Drunk ref={drunkRef} {...drunkControls} />
        {/* <ToneMapping mode={ToneMappingMode.ACES_FILMIC} /> */}
      </EffectComposer>

      <color args={["white"]} attach="background" />

      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <mesh castShadow position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh castShadow position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
