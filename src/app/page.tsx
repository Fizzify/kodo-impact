import Codespace from "@/game/components/codespace";
import EngineManager from "@/game/components/engine.manager";
import Button from "@/primitive/button";
import { ClerkLoaded } from "@clerk/nextjs";

const Home = () => {
  return (
    <main>
      <h1 className="text-8xl font-zero">Kodo Impact</h1>
      <Button intent="primary" size="large">
        Start Kickin&apos;!
      </Button>
      <ClerkLoaded>
        <Codespace />
        <EngineManager />
      </ClerkLoaded>
    </main>
  );
};

export default Home;
