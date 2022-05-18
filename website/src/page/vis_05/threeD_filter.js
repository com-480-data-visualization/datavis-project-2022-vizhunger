import React, {Suspense} from 'react';
import vis6 from '../../img/vis8.jpeg';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, useGLTF, RoundedBox } from '@react-three/drei'

// const Model = () => {
//     const gltf = useGLTF('../../model/telescope/scene.gltf', true)
//     return <primitive object={gltf.scene} dispose={null}/>
// }


const ThreeDFilter = () => {
    return (
        <Canvas colorManagement camera={{position: [1,1,1], fov: 100}}>
            <Html>
                <div>
                    <h1>Try exploring the data space yourself!</h1>
                    <p>
                        Don't know what you are looking for? Try playing around a bit!
                    </p>
                </div>
            </Html>
            <RoundedBox args={[1, 1, 1]} radius={0.05} smoothness={4}>
                <meshPhongMaterial color="#f3f3f3" wireframe />
            </RoundedBox>
        </Canvas>
    );
}

export default ThreeDFilter;