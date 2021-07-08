import React, { useRef } from 'react'
import { useGLTF} from '@react-three/drei'
import model from "../../objects/wright/wright.gltf"

function Wright({position, rotation, scale}) {
  const group = useRef()
  const { nodes, materials } = useGLTF(model)
  return (
    <group 
        ref={group} 
        position={position} 
        rotation = {rotation} 
        scale={scale} 
        dispose={null}>
      <group >

          {/* REAR STRUTS */}
          
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0.geometry}
          material={nodes.Mesh_0.material}
        >
        <meshStandardMaterial attach="material" color="yellow" />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={nodes.Mesh_1.material}
          >
          <meshStandardMaterial attach="material" color="yellow" />
          </mesh>
          
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2.geometry}
          material={nodes.Mesh_2.material}
                  >
          <meshStandardMaterial attach="material" color="yellow" />
          </mesh>
          {/* REAR STRUTS */}
          <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_5.geometry}
          material={nodes.Mesh_5.material}
          >
          <meshStandardMaterial attach="material" color="green" />
          </mesh>

        {/* ENGINE */}

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_10.geometry}
          material={nodes.Mesh_10.material}
          >
          <meshStandardMaterial attach="material" color="blue" />
          </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_11.geometry}
          material={nodes.Mesh_11.material}
          >
          <meshStandardMaterial attach="material" color="blue" />
          </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_12.geometry}
          material={nodes.Mesh_12.material}
          >
          <meshStandardMaterial attach="material" color="blue" />
          </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_13.geometry}
          material={nodes.Mesh_13.material}
          >
          <meshStandardMaterial attach="material" color="blue" />
          </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_14.geometry}
          material={nodes.Mesh_14.material}
          >
          <meshStandardMaterial attach="material" color="blue" />
          </mesh>

        {/* WINGS */}

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_3.geometry}
          material={nodes.Mesh_3.material}
          >
          <meshStandardMaterial attach="material" color="red" />
          </mesh>

          {/* Right PROP */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_7.geometry}
          material={nodes.Mesh_7.material}
          >
          <meshStandardMaterial attach="material" color="green" />
          </mesh>
          <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_6.geometry}
          >
          <meshStandardMaterial attach="material" color="green" />
          </mesh>
          {/* LEFT prop */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_8.geometry}
          material={nodes.Mesh_8.material}
          >
          <meshStandardMaterial attach="material" color="purple" />
          </mesh>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_9.geometry}
          material={nodes.Mesh_9.material}
          >
          <meshStandardMaterial attach="material" color="purple" />
          </mesh>
      </group>
    </group>
  )
}

useGLTF.preload(model)

export default Wright