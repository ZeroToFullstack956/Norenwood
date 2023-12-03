import React, { Suspense, useEffect  } from 'react';
import { Canvas } from '@react-three/fiber';
import { useSpring, a } from '@react-spring/three';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DirectionalLight as ThreeDirectionalLight } from 'three';
import { TextureLoader } from 'three';

export const PhoneGraphic = () => {
  // Define animation properties using react-spring for a slower rotation
  const props = useSpring({
    to: { rotation: [0, 2 * Math.PI, 0] },
    from: { rotation: [0, 0, 0] },
    loop: true,
    config: { duration: 10000 } // speed (in milliseconds)
  });

  //  render 3D model
  const PhoneModel = () => {
    const gltf = useLoader(GLTFLoader, '/iphone.glb'); //  .glb file
    const texture = useLoader(TextureLoader, '/3dPhone.png'); // texture
    console.log(texture)
    useEffect(() => {
      const part = gltf.scene.getObjectByName('Object_7'); // part name
      if (part) {
        part.material.map = texture;
        part.material.needsUpdate = true;
      }
    }, [gltf, texture]);

    return <primitive object={gltf.scene} />;
  };

  return (
    <Canvas>
      <Suspense fallback={null}>
        {/* Basic ambient light */}
        <ambientLight intensity={0.5} />
        {/* Three.js Directional light */}
        <primitive object={new ThreeDirectionalLight(0xffffff, 1)} position={[10, 10, 5]} />
        {/* Animated mesh */}
        <a.mesh {...props}>
          <PhoneModel />
        </a.mesh>
      </Suspense>
    </Canvas>
  );
};
