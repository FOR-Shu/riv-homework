import styles from './canvas.module.scss'

import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Bike(props) {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF("/cyclist.glb");
    const { actions } = useAnimations(animations, group);

    return (
        <group ref={group} {...props} dispose={null} scale={[0.0012, 0.0012, 0.0012]} position={[-365, -18, -67]} rotation-y={Math.PI}>
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