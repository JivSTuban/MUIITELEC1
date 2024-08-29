import { Canvas } from '@react-three/fiber';
import { Fisheye, CameraControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Level, Sudo, Camera, Cactus, Box as SceneBox } from '../components/Scene';
import { Box } from '@mui/material';

const MyHome = () => {
  return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '98.5vh',
      }}
    >
      <Canvas flat>
        <Fisheye zoom={0}>
          <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} />
          <ambientLight intensity={Math.PI / 2} />
          <group scale={10} position={[0, -5, 0]}>
            <Level />
            <Sudo />
            <Camera />
            <Cactus />
            <SceneBox position={[-0.4, 0.7, 0.2]} scale={0.075} />
          </group>
          <Environment preset="city" background blur={1} />
          <PerspectiveCamera makeDefault position={[0, 0, 18.5]} />
        </Fisheye>
      </Canvas>
    </Box>
  );
};

export default MyHome;
