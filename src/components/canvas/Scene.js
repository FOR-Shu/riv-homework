import styles from './canvas.module.scss'

import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations, DragControls, Html } from "@react-three/drei";

import CanvasLoader from "./Loader";
import Bike from './bike';
import Island from './island';
import InfoCard from '../infoCard';

const Scene = () => {
    const [islandData, setIslandData] = useState(null);

    const handleIslandData = (data) => {
        setIslandData(data);
    };

    return (
        <div className={styles.main}>
            <Canvas className={styles.background} frameLoop='demand' shadows camera={{ position: [20, 3, 5], fov: 30 }} gl={{ preserveDrawingBuffer: true }}>
                <Suspense fallback={<CanvasLoader />}>
                    <ambientLight intensity={0.5} />
                    <Bike islandData={islandData} />
                    <Island onIslandData={handleIslandData} />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    );
};

export default Scene;