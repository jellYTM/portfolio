import { useMemo, useState, useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as AureliaData from "./Aurelia_sp..json"


const generateSquare = (radius: number, x: number, y: number, z:number) => {
  const pts: THREE.Vector3[] = [];
  for (let i = 0; i < 4; i++) {
    const angle = (i / 4) * Math.PI * 2;
    pts.push(new THREE.Vector3(x + Math.cos(angle) * radius, y, z + Math.sin(angle) * radius));
  }
  return pts;
};

const generateOctagon = (radius: number, x: number, y: number, z:number) => {
  const pts: THREE.Vector3[] = [];
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    pts.push(new THREE.Vector3(x + Math.cos(angle) * radius, y, z + Math.sin(angle) * radius));
  }
  return pts;
};

const generateTentacle = (radius: number, x: number, y: number, z:number) => {
  const pts: THREE.Vector3[] = [];
  radius = radius * Math.cos(Math.PI * 2 / 16)
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8 + 1 / 16) * Math.PI * 2;
    pts.push(new THREE.Vector3(x + Math.cos(angle) * radius, y, z + Math.sin(angle) * radius));
  }
  return pts;
};

interface PatternConfig {
  frameID : number,
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

interface Coordinates {
  x: number;
  y: number;
  z: number;
}

const createPattern = ({ frameID, umbrella, oral_arm, tentacle }: PatternConfig, { x, y, z }: Coordinates) => {
  // umbrella
  const top = new THREE.Vector3(x, y + umbrella.h0, z);
  const mid1 = generateOctagon(umbrella.r1, x, y + umbrella.h1, z);
  const mid2 = generateOctagon(umbrella.r2, x, y + umbrella.h2, z);
  const mid3 = generateOctagon(umbrella.r3, x, y + umbrella.h3, z);
  const mid4 = generateOctagon(umbrella.r4, x, y + umbrella.h4, z);
  const bottom = generateOctagon(umbrella.r5, x, y, z);

  // oral-arm
  const oral_arm0 = new THREE.Vector3(x, y + umbrella.h0 - oral_arm.h0, z);
  const oral_arm1 = generateSquare(oral_arm.r1, x, y + umbrella.h0 - oral_arm.h1, z);
  const oral_arm2 = generateSquare(oral_arm.r2, x, y + umbrella.h0 - oral_arm.h2, z);
  const oral_arm3 = generateSquare(oral_arm.r3, x, y + umbrella.h0 - oral_arm.h3, z);
  const oral_arm4 = generateSquare(oral_arm.r4, x, y + umbrella.h0 - oral_arm.h4, z);
  const oral_arm5 = generateSquare(oral_arm.r5, x, y + umbrella.h0 - oral_arm.h5, z);
  const oral_arm6 = generateSquare(oral_arm.r6, x, y + umbrella.h0 - oral_arm.h6, z);

  // tentacle
  const tentacle0 = generateTentacle(umbrella.r5, x, y, z)
  const tentacle1 = generateTentacle(tentacle.r1, x, y - tentacle.h1, z);
  const tentacle2 = generateTentacle(tentacle.r2, x, y - tentacle.h2, z);

  return { frameID, top, mid1, mid2, mid3, mid4, bottom, 
            oral_arm0, oral_arm1, oral_arm2, oral_arm3, oral_arm4, oral_arm5, oral_arm6,
            tentacle0, tentacle1, tentacle2};
};

const patternConfigs: PatternConfig[] = AureliaData.data;
const coordinates: Coordinates = { x:0, y:0, z:0 };
const patterns = patternConfigs.map(config => createPattern(config, coordinates));
type Pattern = typeof patterns[number];

const a = -12
const b = 12


const createOtherPattern = (patternConfigs: PatternConfig[]) => {
  let x = Math.floor(Math.random() * (b + 1 - a)) + a
  let y = Math.floor(Math.random() * (b + 1 - a)) + a
  let z = Math.floor(Math.random() * (b + 1 - a)) + a
  const otherPattern = patternConfigs.map(config => createPattern(config, {x:x, y:y, z:z}));

  return otherPattern
}
  
const otherPattern1 = createOtherPattern(patternConfigs)
const otherPattern2 = createOtherPattern(patternConfigs)
const otherPattern3 = createOtherPattern(patternConfigs)
const otherPattern4 = createOtherPattern(patternConfigs)
const otherPattern5 = createOtherPattern(patternConfigs)
const otherPattern6 = createOtherPattern(patternConfigs)
const otherPattern7 = createOtherPattern(patternConfigs)
const otherPattern8 = createOtherPattern(patternConfigs)
const otherPattern9 = createOtherPattern(patternConfigs)
const otherPattern10 = createOtherPattern(patternConfigs)
const otherPattern11 = createOtherPattern(patternConfigs)




const Skeleton = ({ pattern }: { pattern: Pattern }) => {

  const connections = useMemo(() => {
    const con: [THREE.Vector3, THREE.Vector3][] = [];

    // Center → top ring
    pattern.mid1.forEach((p) => con.push([pattern.top, p]));
    con.push([pattern.top, pattern.oral_arm0])
    pattern.oral_arm1.forEach((p) => con.push([pattern.oral_arm0, p]));

    // Horizontal rings (top/mid/bottom)
    const addRingConnections = (ring: THREE.Vector3[]) => {
      for (let i = 0; i < ring.length; i++) {
        con.push([ring[i], ring[(i + 1) % ring.length]]);
      }
    };

    addRingConnections(pattern.bottom);

    // Vertical connections between stacked octagons + tentacles
    for (let i = 0; i < 8; i++) {
      con.push([pattern.mid1[i], pattern.mid2[i]]);
      con.push([pattern.mid2[i], pattern.mid3[i]]);
      con.push([pattern.mid3[i], pattern.mid4[i]]);
      con.push([pattern.mid4[i], pattern.bottom[i]]);
      con.push([pattern.tentacle0[i], pattern.tentacle1[i]]);
      con.push([pattern.tentacle1[i], pattern.tentacle2[i]]);
    }

    for (let i=0; i < 4; i++) {
      con.push([pattern.oral_arm1[i], pattern.oral_arm2[i]]);
      con.push([pattern.oral_arm2[i], pattern.oral_arm3[i]]);
      con.push([pattern.oral_arm3[i], pattern.oral_arm4[i]]);
      con.push([pattern.oral_arm4[i], pattern.oral_arm5[i]]);
      con.push([pattern.oral_arm5[i], pattern.oral_arm6[i]]);
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
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial linewidth={1} color="white" />
      </lineSegments>
    </>
  );
};

let radius = 8;
const T = 1000;
const arg = Math.PI * 2 / T
let theta = 0

if (window.innerWidth <= 600) {
  radius = 12
}

const JellyfishScene = () => {
  var [idx, setIdx] = useState(0);
  const timer = useRef(0);

  const { camera } = useThree();

  useFrame((_, delta) => {
    timer.current += delta;

    if (timer.current > 1 / AureliaData.data.length
    ) {
      timer.current = 0;
      setIdx((i) => (i + 1) % patterns.length);
    }
    
    theta += arg
    let x = radius * Math.cos(theta / 2) * (1 - 0.3 * Math.sin(theta * 0.3))
    let y = Math.sin(theta)
    let z = radius * Math.sin(theta / 2) * (1 - 0.3 * Math.sin(theta * 0.3))

    camera.position.set(x, y, z)
    camera.lookAt(0, 0, 0)
  });

  useEffect( () => {
    if (window.innerWidth <= 600) {
      radius = 12
    } else {
      radius = 8
    }
  })

  return (
    <>
      <ambientLight intensity={10.0} />
      <directionalLight position={[10, 10, 10]} />
      <Skeleton pattern={patterns[idx]}/>
      <Skeleton pattern={otherPattern1[(idx+2) % patterns.length]}/>
      <Skeleton pattern={otherPattern2[(idx+4) % patterns.length]}/>
      <Skeleton pattern={otherPattern3[(idx+6) % patterns.length]}/>
      <Skeleton pattern={otherPattern4[(idx+8) % patterns.length]}/>
      <Skeleton pattern={otherPattern5[(idx+10) % patterns.length]}/>
      <Skeleton pattern={otherPattern6[(idx+12) % patterns.length]}/>
      <Skeleton pattern={otherPattern7[(idx+14) % patterns.length]}/>
      <Skeleton pattern={otherPattern8[(idx+16) % patterns.length]}/>
      <Skeleton pattern={otherPattern9[(idx+18) % patterns.length]}/>
      <Skeleton pattern={otherPattern10[(idx+20) % patterns.length]}/>
      <Skeleton pattern={otherPattern11[(idx*2) % patterns.length]}/>
      <OrbitControls />
    </>
  );
};

/**
 * Top-level component with Canvas.
 */
export default function JellyfishApp() {
    return (
        <div id="JellyfishApp-container">
          <div id="JellyfishApp">
            <Canvas>
                <JellyfishScene />
            </Canvas>
          </div>
          <div>
          </div>
        </div>
    );
}