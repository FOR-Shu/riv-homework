import styles from './canvas.module.scss'

import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations, DragControls, Html } from "@react-three/drei";

import CanvasLoader from "./Loader";
import Bike from './bike';
import Island from './island';
import InfoCard from '../infoCard';

const Scene = () => {

    return (
        <div className={styles.main}>

            <Canvas className={styles.background} frameLoop='demand' shadows camera={{ position: [20, 3, 5], fov: 30 }} gl={{ preserveDrawingBuffer: true }}>
                <Suspense fallback={<CanvasLoader />}>
                    <ambientLight intensity={0.5} />

                    <Bike />
                    <Island />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    );
};

export default Scene;