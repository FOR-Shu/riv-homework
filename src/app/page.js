"use client";

import Scene from '@/components/canvas/Scene';
import styles from './page.module.scss'

import { Suspense, useRef, useState } from 'react'

export default function Home() {
  const ref = useRef()

  return (
    <div className={styles.main}>
      <Scene/>
    </div>
  )
}
