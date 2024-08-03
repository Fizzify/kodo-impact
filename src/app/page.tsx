import Codespace from "@/game/components/codespace";
import Engine from "@/game/components/engine.manager";
import Button from "@/primitive/button";

const Home = () => {
  return (
    <main>
      <h1 className="text-8xl font-zero">Kodo Impact</h1>
      <Button intent="primary" size="large">
        Start Kickin&apos;!
      </Button>
      <Codespace />
      <Engine />
    </main>
  );
};

export default Home;
