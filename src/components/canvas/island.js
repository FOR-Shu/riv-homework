import styles from './canvas.module.scss'

import React, { Suspense, useEffect, useState, useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF, useAnimations, Html } from "@react-three/drei"
import { Raycaster } from 'three'
import InfoCard from '../infoCard'
import { useDrag } from '@use-gesture/react';

export default function Island(props) {
    const groupRef = useRef()
    const [popupVisible, setPopupVisible] = useState(false)
    const { scene, nodes, materials } = useGLTF("/island.glb")

    // 使用 useDrag 鉤子來捕獲拖拉事件
    const bind = useDrag(({ movement: [x] }) => {
        groupRef.current.rotation.y = x * Math.PI / 5;
        console.log(groupRef.current.rotation.y)
        if (groupRef.current.rotation.y < 0 && groupRef.current.rotation.y > -2) {
            setPopupVisible(true)
        } else {
            setPopupVisible(false)
        }
    });
    
    return (
        <group {...props} ref={groupRef} dispose={null} scale={0.75} {...bind()}>
            {popupVisible && (
                <Html position={[4, 5, 0]} >
                    <InfoCard />
                </Html>
            )}
            <OrbitControls enablePan={false} enableRotate={false} maxPolarAngle={Math.PI / 2.2} minPolarAngle={Math.PI / 2.4} />
            {/* 路 */}
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Street.geometry}
                material={materials["Blue 3"]}
                position={[0, -0.05, 0]}
                scale={[11.2, 1, 11.2]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Stones.geometry}
                material={materials["Red 3"]}
                position={[7.88, 0.44, 4.75]}
                rotation={[Math.PI / 2, 0, -1.24]}
            />
            {/* 船＋湖 */}
            <group
                position={[5.06, -1.04, -3.08]}
                rotation={[Math.PI, -1.05, Math.PI]}
                scale={1.19}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh.geometry}
                    material={materials["Red 1"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_1.geometry}
                    material={materials.White}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_2.geometry}
                    material={materials["Red 2"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_3.geometry}
                    material={materials["Red 1"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_4.geometry}
                    material={materials["Red 1"]}
                />
            </group>
            <group
                position={[-3.9, 0, 9.88]}
                rotation={[Math.PI / 2, 0, 0.33]}
                scale={0.33}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.MAILBOX_1.geometry}
                    material={materials["Blue 2"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.MAILBOX_2.geometry}
                    material={materials["Red 1"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.MAILBOX_3.geometry}
                    material={materials.White}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Water.geometry}
                material={materials.Water}
                position={[0, -1, 0]}
                scale={[1000, 1, 1000]}
            />
            <group position={[-9.1, -0.03, -2.81]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder024.geometry}
                    material={materials["Blue 1"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder024_1.geometry}
                    material={materials["Blue 2"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder024_2.geometry}
                    material={materials["Red 1"]}
                />
            </group>
            {/* 山 */}
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.BUMPER_BezierCurve.geometry}
                material={materials["Blue 1"]}
                position={[2.56, -0.04, 6.76]}
                rotation={[Math.PI / 2, 0, -0.43]}
                scale={0.89}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Landscape.geometry}
                material={materials.Island}
                position={[0, -0.02, 0]}
            />
            <group
                position={[2.56, -0.04, 6.76]}
                rotation={[Math.PI / 2, 0, -0.43]}
                scale={0.89}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.HEADLIGHTS_Cylinder_1.geometry}
                    material={materials.White}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.HEADLIGHTS_Cylinder_2.geometry}
                    material={materials.Lights}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.HEADLIGHTS_Cylinder_3.geometry}
                    material={materials.Lights}
                />
            </group>

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.SERVING_COUNTER_Plane.geometry}
                material={materials.White}
                position={[2.56, -0.04, 6.76]}
                rotation={[Math.PI / 2, 0, -0.43]}
                scale={0.89}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.TRUCK_Cube004.geometry}
                material={materials.White}
                position={[2.56, -0.04, 6.76]}
                rotation={[Math.PI / 2, 0, -0.43]}
                scale={0.89}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Flamingo5_Mesh018.geometry}
                material={materials["Red 1"]}
                position={[-9.06, -0.01, -1.77]}
                rotation={[Math.PI / 2, 0, -2.84]}
                scale={1.09}
            />
            <group
                position={[-9.55, 0.58, -1.23]}
                rotation={[Math.PI / 2, 0, -1.65]}
                scale={1.09}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plant34_Mesh019_1.geometry}
                    material={materials["Blue 1"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plant34_Mesh019_2.geometry}
                    material={materials["Blue 3"]}
                />
            </group>
            {/* 房 */}
            <group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Rugs1_Mesh011.geometry}
                    material={materials["Red 2"]}
                    position={[-9.06, -0.01, -1.77]}
                    rotation={[Math.PI / 2, 0, -2.84]}
                    scale={1.09}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Stool1_Mesh008.geometry}
                    material={materials.White}
                    position={[-9.06, -0.01, -1.77]}
                    rotation={[Math.PI / 2, 0, -2.84]}
                    scale={1.09}
                />
                <group
                    position={[4.52, -0.02, -6.17]}
                    rotation={[Math.PI / 2, 0, -1.3]}
                    scale={6.08}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cabin_shed_1.geometry}
                        material={materials["Red 2"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cabin_shed_2.geometry}
                        material={materials["Blue 1"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cabin_shed_3.geometry}
                        material={materials.White}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cabin_shed_4.geometry}
                        material={materials["Red 2"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cabin_shed_5.geometry}
                        material={materials.White}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cabin_shed_6.geometry}
                        material={materials["Red 2"]}
                    />
                </group>
            </group>
            {/* 熱狗 */}
            <group
                position={[-8.95, -0.01, -1.47]}
                rotation={[Math.PI / 2, 0, -2.84]}
                scale={1.09}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Table2_Mesh009_1.geometry}
                    material={materials.White}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Table2_Mesh009_2.geometry}
                    material={materials["Blue 2"]}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sausage.geometry}
                material={materials["Red 1"]}
                position={[2.56, -0.04, 6.76]}
                rotation={[Math.PI / 2, 0, -0.43]}
                scale={0.89}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.TRUCK_Cube002.geometry}
                material={materials["Blue 1"]}
                position={[2.56, -0.04, 6.76]}
                rotation={[Math.PI / 2, 0, -0.43]}
                scale={0.89}
            />
            {/* 白車 */}
            <group
                position={[-9.06, -0.01, -1.77]}
                rotation={[Math.PI / 2, 0, -2.84]}
                scale={1.09}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Camper1_Mesh006_1.geometry}
                    material={materials.White}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Camper1_Mesh006_2.geometry}
                    material={materials["Blue 1"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Camper1_Mesh006_3.geometry}
                    material={materials["Blue 3"]}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Chair1_Mesh007.geometry}
                material={materials["Blue 2"]}
                position={[-9.31, 0, -1.79]}
                rotation={[Math.PI / 2, 0, -2.84]}
                scale={1.09}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Lights4_Mesh012.geometry}
                material={materials.Lights}
                position={[-9.06, -0.01, -1.77]}
                rotation={[Math.PI / 2, 0, -2.84]}
                scale={1.09}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube000_Cube014.geometry}
                material={materials.White}
                position={[-6.85, -0.02, 3.69]}
                rotation={[Math.PI / 2, 0, 0.98]}
                scale={0.31}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube003_Cube022.geometry}
                material={materials.White}
                position={[-6.85, -0.02, 3.69]}
                rotation={[Math.PI / 2, 0, 0.98]}
                scale={0.31}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.TIRES_Cylinder005.geometry}
                material={materials["Blue 1"]}
                position={[2.56, -0.04, 6.76]}
                rotation={[Math.PI / 2, 0, -0.43]}
                scale={0.89}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.TRUCK_Cube001.geometry}
                material={materials["Red 2"]}
                position={[2.56, -0.04, 6.76]}
                rotation={[Math.PI / 2, 0, -0.43]}
                scale={0.89}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube.geometry}
                material={materials["Blue 2"]}
                position={[-9.9, 0.57, -2.7]}
                rotation={[0, 0.01, 0]}
                scale={[0.01, 0.6, 0.01]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube001.geometry}
                material={materials["Blue 2"]}
                position={[-10.27, 0.57, -1.42]}
                rotation={[0.04, -0.02, 0.01]}
                scale={[0.01, 0.6, 0.01]}
            />
            <group
                position={[-6.85, -0.02, 3.69]}
                rotation={[Math.PI / 2, 0, 0.98]}
                scale={0.31}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Philips_PM5544_(SECAM_variation)_1"].geometry}
                    material={materials["Red 2"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Philips_PM5544_(SECAM_variation)_2"].geometry}
                    material={materials["Blue 2"]}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.STAGEmodul_Cube.geometry}
                material={materials["Blue 1"]}
                position={[-6.85, -0.02, 3.69]}
                rotation={[Math.PI / 2, 0, 0.98]}
                scale={0.31}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube005_Cube024.geometry}
                material={materials.White}
                position={[-6.85, -0.02, 3.69]}
                rotation={[Math.PI / 2, 0, 0.98]}
                scale={0.31}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube001_Cube003.geometry}
                material={materials.White}
                position={[-6.85, -0.02, 3.69]}
                rotation={[Math.PI / 2, 0, 0.98]}
                scale={0.31}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube006_Cube025.geometry}
                material={materials.White}
                position={[-6.85, -0.02, 3.69]}
                rotation={[Math.PI / 2, 0, 0.98]}
                scale={0.31}
            />
            <group
                position={[-6.85, -0.04, 3.69]}
                rotation={[Math.PI / 2, 0, 0.98]}
                scale={0.31}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube013_Cube040_1.geometry}
                    material={materials["Blue 3"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube013_Cube040_2.geometry}
                    material={materials["Blue 1"]}
                />
            </group>
            <group
                position={[-6.85, -0.04, 3.69]}
                rotation={[Math.PI / 2, 0, 0.98]}
                scale={0.31}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube015_Cube051_1.geometry}
                    material={materials["Blue 3"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube015_Cube051_2.geometry}
                    material={materials["Blue 1"]}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube002_Cube021.geometry}
                material={materials.White}
                position={[-6.85, -0.02, 3.69]}
                rotation={[Math.PI / 2, 0, 0.98]}
                scale={0.31}
            />
            <group
                position={[-6.85, -0.02, 3.69]}
                rotation={[Math.PI / 2, 0, 0.98]}
                scale={0.31}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube018_Cube045_1.geometry}
                    material={materials["Blue 1"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube018_Cube045_2.geometry}
                    material={materials.Lights}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube004_Cube023.geometry}
                material={materials.White}
                position={[-6.85, -0.02, 3.69]}
                rotation={[Math.PI / 2, 0, 0.98]}
                scale={0.31}
            />
            <group
                position={[-6.85, -0.02, 3.69]}
                rotation={[Math.PI / 2, 0, 0.98]}
                scale={0.31}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube020_Cube047_1.geometry}
                    material={materials["Blue 1"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube020_Cube047_2.geometry}
                    material={materials.Lights}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hardcase000_Cube054.geometry}
                material={materials["Blue 1"]}
                position={[-6.35, -0.2, 3.69]}
                rotation={[Math.PI / 2, 0, 0.98]}
                scale={0.31}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hardcase002_Cube055.geometry}
                material={materials["Blue 1"]}
                position={[-6.85, -0.02, 3.69]}
                rotation={[Math.PI / 2, 0, 0.98]}
                scale={0.31}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Text.geometry}
                material={materials["Red 1"]}
                position={[-9.06, -0.03, -1.77]}
                rotation={[Math.PI / 2, 0, -2.84]}
                scale={1.11}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube007_Cube026.geometry}
                material={materials.White}
                position={[-6.85, -0.02, 3.69]}
                rotation={[Math.PI / 2, 0, 0.98]}
                scale={0.31}
            />
            <group
                position={[-6.85, -0.04, 3.69]}
                rotation={[Math.PI / 2, 0, 0.98]}
                scale={0.31}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube012_Cube039_1.geometry}
                    material={materials["Blue 3"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube012_Cube039_2.geometry}
                    material={materials["Blue 1"]}
                />
            </group>
            <group
                position={[-6.85, -0.04, 3.69]}
                rotation={[Math.PI / 2, 0, 0.98]}
                scale={0.31}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube014_Cube050_1.geometry}
                    material={materials["Blue 3"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube014_Cube050_2.geometry}
                    material={materials["Blue 1"]}
                />
            </group>
            <group
                position={[-6.85, -0.02, 3.69]}
                rotation={[Math.PI / 2, 0, 0.98]}
                scale={0.31}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube016_Cube043_1.geometry}
                    material={materials["Blue 1"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube016_Cube043_2.geometry}
                    material={materials.Lights}
                />
            </group>
            <group
                position={[-6.85, -0.02, 3.69]}
                rotation={[Math.PI / 2, 0, 0.98]}
                scale={0.31}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube017_Cube044_1.geometry}
                    material={materials["Blue 1"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube017_Cube044_2.geometry}
                    material={materials.Lights}
                />
            </group>
            <group
                position={[-6.85, -0.02, 3.69]}
                rotation={[Math.PI / 2, 0, 0.98]}
                scale={0.31}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube019_Cube046_1.geometry}
                    material={materials["Blue 1"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube019_Cube046_2.geometry}
                    material={materials.Lights}
                />
            </group>
            <group
                position={[-6.85, -0.02, 3.69]}
                rotation={[Math.PI / 2, 0, 0.98]}
                scale={0.31}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube021_Cube048_1.geometry}
                    material={materials["Blue 1"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube021_Cube048_2.geometry}
                    material={materials.Lights}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hardcase001_Cube033.geometry}
                material={materials["Blue 1"]}
                position={[-6.34, -0.21, 3.13]}
                rotation={[Math.PI / 2, 0, 0.98]}
                scale={0.31}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Hardcase003_Cube056.geometry}
                material={materials["Blue 1"]}
                position={[-6.85, -0.02, 3.69]}
                rotation={[Math.PI / 2, 0, 0.98]}
                scale={0.31}
            />
            <group
                position={[3.29, 0.39, 9.11]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.26}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group74620784.geometry}
                    material={materials.White}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group74620784_1.geometry}
                    material={materials.White}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group74620784_2.geometry}
                    material={materials.White}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group74620784_3.geometry}
                    material={materials.White}
                />
            </group>
        </group>
    )
}

