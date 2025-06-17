import { useMemo, useState, useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Instance, Instances } from "@react-three/drei";
import * as AureliaData from "./Aurelia_sp..json"

const generateSquare = (radius: number, y: number) => {
  const pts: THREE.Vector3[] = [];
  for (let i = 0; i < 4; i++) {
    const angle = (i / 4) * Math.PI * 2;
    pts.push(new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius));
  }
  return pts;
};

const generateOctagon = (radius: number, y: number) => {
  const pts: THREE.Vector3[] = [];
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    pts.push(new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius));
  }
  return pts;
};

interface PatternConfig {
  umbrella :{
    h0: number; h1: number; h2: number; h3: number; h4: number; 
    r1: number; r2: number; r3: number; r4: number; r5: number;
  },
  oral_arm :{
    h0: number; h1: number; h2: number; h3: number; h4: number; h5: number; h6: number;
    r1: number; r2: number; r3: number; r4: number; r5: number; r6: number;
  },
  tentacle :{
    h1: number; h2: number;
    r1: number; r2: number;
  }
}

const createPattern = ({ umbrella, oral_arm, tentacle }: PatternConfig) => {
  // umbrella
  const top = new THREE.Vector3(0, umbrella.h0, 0);
  const mid1 = generateOctagon(umbrella.r1, umbrella.h1);
  const mid2 = generateOctagon(umbrella.r2, umbrella.h2);
  const mid3 = generateOctagon(umbrella.r3, umbrella.h3);
  const mid4 = generateOctagon(umbrella.r4, umbrella.h4);
  const bottom = generateOctagon(umbrella.r5, 0);

  // oral-arm
  const oralarm0 = new THREE.Vector3(0, oral_arm.h0, 0);
  const oralarm1 = generateSquare(oral_arm.r1, oral_arm.h1);
  const oralarm2 = generateSquare(oral_arm.r2, oral_arm.h2);
  const oralarm3 = generateSquare(oral_arm.r3, oral_arm.h3);
  const oralarm4 = generateSquare(oral_arm.r4, oral_arm.h4);
  const oralarm5 = generateSquare(oral_arm.r5, oral_arm.h5);
  const oralarm6 = generateSquare(oral_arm.r6, oral_arm.h6);

  // tentacle
  const tentacle1 = generateOctagon(tentacle.r1, tentacle.h1);
  const tentacle2 = generateOctagon(tentacle.r2, tentacle.h2);

  return { top, mid1, mid2, mid3, mid4, bottom, 
            oralarm0, oralarm1, oralarm2, oralarm3, oralarm4, oralarm5, oralarm6,
            tentacle1, tentacle2};
};

// Three skeleton patterns you can toggle through
const patternConfigs: PatternConfig[] = [AureliaData.data[:]]

// Three skeleton patterns you can toggle through
const patternConfigs: PatternConfig[] = [
  // scale1:(top, mid1), scale2:mid2, scale3:mid3, scale4:bottom, scale5:(oralarm1, 2, 3), scale6: oralarm4
  { scale1: 0.9, scale2: 0.9, scale3: 0.9, scale4: 0.8, scale5: 0.9, scale6: 0.62 },  // 収縮開始
  { scale1: 0.875, scale2: 0.85, scale3: 0.85, scale4: 0.75, scale5: 0.9, scale6: 0.62 }, 
  { scale1: 0.85, scale2: 0.8, scale3: 0.8, scale4: 0.7, scale5: 0.9, scale6: 0.62 }, 
  { scale1: 0.825, scale2: 0.775, scale3: 0.75, scale4: 0.65, scale5: 0.85, scale6: 0.62 }, 
  { scale1: 0.8, scale2: 0.75, scale3: 0.7, scale4: 0.6, scale5: 0.8, scale6: 0.62 }, 
  { scale1: 0.785, scale2: 0.725, scale3: 0.675, scale4: 0.575, scale5: 0.75, scale6: 0.62 }, 
  { scale1: 0.77, scale2: 0.7, scale3: 0.65, scale4: 0.55, scale5: 0.7, scale6: 0.6 }, 
  { scale1: 0.76, scale2: 0.65, scale3: 0.6, scale4: 0.5, scale5: 0.65, scale6: 0.55 }, 
  { scale1: 0.75, scale2: 0.6, scale3: 0.55, scale4: 0.45, scale5: 0.6, scale6: 0.5 }, // 収縮完了
  { scale1: 0.76, scale2: 0.65, scale3: 0.6, scale4: 0.5, scale5: 0.575, scale6: 0.45 },
  { scale1: 0.77, scale2: 0.7, scale3: 0.65, scale4: 0.55, scale5: 0.55, scale6: 0.4 }, // 弛緩開始
  { scale1: 0.785, scale2: 0.725, scale3: 0.675, scale4: 0.575, scale5: 0.575, scale6: 0.35 },
  { scale1: 0.8, scale2: 0.75, scale3: 0.7, scale4: 0.6, scale5: 0.6, scale6: 0.3 }, 
  { scale1: 0.85, scale2: 0.8, scale3: 0.8, scale4: 0.7, scale5: 0.7, scale6: 0.4 },  //弛緩完了
  { scale1: 0.875, scale2: 0.85, scale3: 0.85, scale4: 0.8, scale5: 0.75, scale6: 0.45 },
  { scale1: 0.9, scale2: 0.9, scale3: 0.9, scale4: 0.9, scale5: 0.8, scale6: 0.5},  // 停止時間
  { scale1: 0.9, scale2: 0.9, scale3: 0.9, scale4: 0.9, scale5: 0.8, scale6: 0.525},
  { scale1: 0.9, scale2: 0.9, scale3: 0.9, scale4: 0.9, scale5: 0.9, scale6: 0.55 }, 
  { scale1: 0.9, scale2: 0.9, scale3: 0.9, scale4: 0.9, scale5: 0.9, scale6: 0.575 },
  { scale1: 0.9, scale2: 0.9, scale3: 0.9, scale4: 0.9, scale5: 0.9, scale6: 0.6 }, 
];

const patterns = patternConfigs.map(createPattern);

type Pattern = typeof patterns[number];

const Skeleton = ({ pattern }: { pattern: Pattern }) => {

  const joints = useMemo(() => {
    const all: { id: string; pos: THREE.Vector3 }[] = [];
    all.push({ id: "center", pos: pattern.center });
    pattern.top.forEach((p, i) => all.push({ id: `top${i}`, pos: p }));
    pattern.mid1.forEach((p, i) => all.push({ id: `mid1${i}`, pos: p }));
    pattern.mid2.forEach((p, i) => all.push({ id: `mid2${i}`, pos: p }));
    pattern.mid3.forEach((p, i) => all.push({ id: `mid3${i}`, pos: p }));
    pattern.bottom.forEach((p, i) => all.push({ id: `bottom${i}`, pos: p }));
    pattern.oralarm1.forEach((p, i) => all.push({ id: `oralarm1${i}`, pos: p }));
    pattern.oralarm2.forEach((p, i) => all.push({ id: `oralarm2${i}`, pos: p }));
    pattern.oralarm3.forEach((p, i) => all.push({ id: `oralarm3${i}`, pos: p }));
    pattern.oralarm4.forEach((p, i) => all.push({ id: `oralarm4${i}`, pos: p }));
    return all;
  }, [pattern]);

  const connections = useMemo(() => {
    const con: [THREE.Vector3, THREE.Vector3][] = [];

    // Center → top ring
    pattern.top.forEach((p) => con.push([pattern.center, p]));
    pattern.oralarm1.forEach((p) => con.push([pattern.center, p]));

    // Horizontal rings (top/mid/bottom)
    const addRingConnections = (ring: THREE.Vector3[]) => {
      for (let i = 0; i < ring.length; i++) {
        con.push([ring[i], ring[(i + 1) % ring.length]]);
      }
    };
    addRingConnections(pattern.top);
    addRingConnections(pattern.mid1);
    addRingConnections(pattern.mid2);
    addRingConnections(pattern.bottom);

    // Vertical connections between stacked octagons + tentacles
    for (let i = 0; i < 8; i++) {
      con.push([pattern.top[i], pattern.mid1[i]]);
      con.push([pattern.mid1[i], pattern.mid2[i]]);
      con.push([pattern.mid2[i], pattern.mid3[i]]);
      con.push([pattern.mid3[i], pattern.bottom[i]]);
    }

    for (let i=0; i < 4; i++) {
      con.push([pattern.oralarm1[i], pattern.oralarm2[i]]);
      con.push([pattern.oralarm2[i], pattern.oralarm3[i]]);
      con.push([pattern.oralarm3[i], pattern.oralarm4[i]]);
    }

    return con;
  }, [pattern]);

  const lineGeometry = useMemo(() => {
    const points = connections.flat(); 
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [connections]);

  useEffect(() => {
    return () => {
      lineGeometry.dispose();
    };
  }, [lineGeometry]);


  return (
    <>
      <Instances limit={joints.length}>
        <sphereGeometry args={[0.02, 12, 12]} />
        <meshStandardMaterial color="white" />
        {joints.map((j) => (
          <Instance key={j.id} position={j.pos} />
        ))}
      </Instances>

      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial linewidth={1} color="white" />
      </lineSegments>
    </>
  );
};


const JellyfishScene = () => {
  const [idx, setIdx] = useState(0);
  const timer = useRef(0);

  useFrame((_, delta) => {
    timer.current += delta;

    if (timer.current > 0.05) {
      timer.current = 0;
      setIdx((i) => (i + 1) % patterns.length);
    }
  });

  const { camera, size } = useThree();

  useEffect(() => {
    if (size.width <= 600) {
      let pos = 1.1 + (600 - size.width) * 0.002; 
      camera.position.set(pos, 0, pos);
    } 
    else if (600 < size.width && size.width <= 1000) {
      camera.position.set(1.1, 0, 1.1);
    }
    else if (1000 < size.width) {
      camera.position.set(1.2, 0, 1.2)
    }
    camera.lookAt(0, 0, 0);
  }, [camera, size]);

  

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Skeleton pattern={patterns[idx]} />
      <OrbitControls />
    </>
  );
};

/**
 * Top-level component with Canvas.
 */
export default function JellyfishApp() {
    return (
        <div id="JellyfishApp">
        <Canvas id="canvas">
            <JellyfishScene />
        </Canvas>
        </div>
    );
}
