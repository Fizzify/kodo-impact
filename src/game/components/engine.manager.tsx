"use client";

import { useEffect } from "react";

import { Engine } from "excalibur";

const EngineManager = () => {
  useEffect(() => {
    const game = new Engine({
      width: 300,
      height: 300,
    });

    game.start();
  }, []);

  return <div></div>;
};

export default EngineManager;
