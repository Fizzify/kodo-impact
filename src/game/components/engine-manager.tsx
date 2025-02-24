"use client";

import { ExcaliburContainer } from "./excalibur-container";
import { MainScene } from "../scenes/main-scene";

const EngineManager = () => {
  return (
    <ExcaliburContainer
      options={{
        width: 800,
        height: 600,
      }}
      scenes={[MainScene]}
      defaultScene={MainScene}
    ></ExcaliburContainer>
  );
};

export default EngineManager;
