import React from "react";
import { useLoader } from "react-three-fiber";
import { TextureLoader } from "three";
import texture  from '../assets/heart.avif';


const Box = ()=>{

    const colorMap = useLoader(TextureLoader,texture)
	return(
		<mesh rotation={[90,0,20]}>
            <boxGeometry attach="geometry" args={[3.1,3.1,3.1]}/>
            <meshStandardMaterial map={colorMap}/>
            {/* <meshLambertMaterial attach="material" color="blue"/> */}
            {/* <meshNormalMaterial attach="material"/> */}
        </mesh>
	)
}

export default Box;