import styles from './canvas.module.scss'

import React, { Suspense, useEffect, useState, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from 'three';

export default function Bike(props) {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF("/cyclist.glb");
    const { actions, names } = useAnimations(animations, group)
    // const rideBike = props.islandData || 0;
    // const prevRideBike = useRef(rideBike);

    useEffect(() => {
        const animationAction = actions[names[0]];
        animationAction.reset().fadeIn(0.5).play();

        // 倒放動畫\設置時間縮放為負值，即倒放動畫
        // animationAction.timeScale = -1;

        // 快進動畫\設置持續時間為原來的一半，即快進到一半的速度
        // animationAction.setDuration(animationAction.getClip().duration * 0.5);
    }, [actions, names]);

    return (
        <group ref={group} {...props} dispose={null} position={[8.7, 0, 2]} scale={0.33} rotation-y={[Math.PI / 2]}>
            <group name="Scene">
                <group name="Cyclist" rotation={[Math.PI / 2, 0, 0]}>
                    <primitive object={nodes.Skeleton} />
                    <group name="Body">
                        <skinnedMesh
                            name="Mesh004"
                            geometry={nodes.Mesh004.geometry}
                            material={materials.Skin}
                            skeleton={nodes.Mesh004.skeleton}
                        />
                        <skinnedMesh
                            name="Mesh004_1"
                            geometry={nodes.Mesh004_1.geometry}
                            material={materials.Red}
                            skeleton={nodes.Mesh004_1.skeleton}
                        />
                        <skinnedMesh
                            name="Mesh004_2"
                            geometry={nodes.Mesh004_2.geometry}
                            material={materials.Dark}
                            skeleton={nodes.Mesh004_2.skeleton}
                        />
                    </group>
                </group>
            </group>
        </group>
    )
};