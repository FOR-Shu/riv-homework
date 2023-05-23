import styles from './canvas.module.scss'

import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";

import CanvasLoader from "./Loader";
import Bike from './bike';
import Island from './island';

const Scene = () => {
    return (
        <Canvas className={styles.webgl} frameLoop='demand' shadows camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={<CanvasLoader />}>
                <ambientLight />
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2.2} minPolarAngle={Math.PI / 2.4} />

                <Island />
                <Bike/>

            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default Scene;