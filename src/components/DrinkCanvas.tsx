import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Model } from "../models/Cocktail_mit_camera_2";

export const DrinkCanvas = (props: any) => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
};
