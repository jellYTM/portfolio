import { useMemo, useState, useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Instance, Instances } from "@react-three/drei";

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
  scale1: number;
  scale2: number;
  scale3: number;
  scale4: number;
  scale5: number;
}

const createPattern = ({ scale1, scale2, scale3, scale4, scale5 }: PatternConfig) => {
  const center = new THREE.Vector3(0, 0.7, 0);

  const top = generateOctagon(0.3 * scale1, 0.69);
  const mid1 = generateOctagon(0.65 * scale1, 0.57);
  const mid2 = generateOctagon(0.8 * scale2, 0.42);
  const mid3 = generateOctagon(0.82 * scale3, 0.38)
  const bottom = generateOctagon(0.8 * scale4, 0.3)
  const oralarm1 = generateSquare(0.05 * scale5, 0.6);
  const oralarm2 = generateSquare(0.13 * scale5, 0.5);
  const oralarm3 = generateSquare(0.2 * scale5, 0.2);
  const oralarm4 = generateSquare(0.15 * scale5, 0);

  return { center, top, mid1, mid2, mid3, bottom, oralarm1, oralarm2, oralarm3, oralarm4};
};

// Three skeleton patterns you can toggle through
const patternConfigs: PatternConfig[] = [
  { scale1: 0.9, scale2: 0.9, scale3: 0.9, scale4: 0.9, scale5: 0.9 }, 
  { scale1: 0.9, scale2: 0.9, scale3: 0.9, scale4: 0.9, scale5: 0.9 }, 
  { scale1: 0.9, scale2: 0.9, scale3: 0.9, scale4: 0.9, scale5: 0.9 }, 
  { scale1: 0.9, scale2: 0.9, scale3: 0.9, scale4: 0.9, scale5: 0.9 }, 
  { scale1: 0.9, scale2: 0.9, scale3: 0.9, scale4: 0.9, scale5: 0.9 }, 
  { scale1: 0.85, scale2: 0.8, scale3: 0.8, scale4: 0.8, scale5: 0.7 }, 
  { scale1: 0.8, scale2: 0.75, scale3: 0.75, scale4: 0.7, scale5: 0.6 }, 
  { scale1: 0.75, scale2: 0.65, scale3: 0.6, scale4: 0.6, scale5: 0.5 }, 
  { scale1: 0.8, scale2: 0.75, scale3: 0.75, scale4: 0.7, scale5: 0.6 }, 
  { scale1: 0.85, scale2: 0.8, scale3: 0.8, scale4: 0.8, scale5: 0.7 }, 
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
        <sphereGeometry args={[0.03, 12, 12]} />
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

    if (timer.current > 0.1) {
      timer.current = 0;
      setIdx((i) => (i + 1) % patterns.length);
    }
  });

  

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
        <Canvas camera={{ 
            position: [0, 0.3, 1.8] 
            }}
            id="canvas">
            <JellyfishScene />
        </Canvas>
        </div>
    );
}
