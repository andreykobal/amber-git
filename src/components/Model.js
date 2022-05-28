import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "https://arweave.net/LRTc-8l0siQJup4NmK141b1dSiKLhDg24UqDjwjghaQ"
  );
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="root"
          position={[-0.08, -0.02, 0.2]}
          rotation={[-0.21, -0.02, -0.09]}
        >
          <primitive object={nodes.rootx} />
          <skinnedMesh
            name="CC_Base_Eye"
            geometry={nodes.CC_Base_Eye.geometry}
            material={materials.Eyes_robot_m}
            skeleton={nodes.CC_Base_Eye.skeleton}
          />
          <skinnedMesh
            name="CC_Game_Body"
            geometry={nodes.CC_Game_Body.geometry}
            material={materials.Female_Cyborg_Body_m}
            skeleton={nodes.CC_Game_Body.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("https://arweave.net/LRTc-8l0siQJup4NmK141b1dSiKLhDg24UqDjwjghaQ");