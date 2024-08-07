import Codespace from "@/game/components/codespace";
import EngineManager from "@/game/components/engine-manager";
import { ClerkLoaded } from "@clerk/nextjs";

const Game = () => {
  return (
    <ClerkLoaded>
      <Codespace />
      <EngineManager />
    </ClerkLoaded>
  );
};

export default Game;
