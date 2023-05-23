import styles from './canvas.module.scss'

import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";

import CanvasLoader from "./Loader";
import Bike from './bike';
import Island from './island';
import InfoCard from '../infoCard';

const Scene = () => {
    return (
        <div className={styles.main}>
            <InfoCard />
            <Canvas className={styles.canvas} frameLoop='demand' shadows camera={{ position: [20, 3, 5], fov: 30 }} gl={{ preserveDrawingBuffer: true }}>
                <Suspense fallback={<CanvasLoader />}>
                    <ambientLight />
                    <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2.2} minPolarAngle={Math.PI / 2.4} />

                    <Bike />
                    <Island />

                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    );
};

export default Scene;