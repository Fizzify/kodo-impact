import { Button } from "nes-ui-react";
import Link from "next/link";
import useSound from "use-sound";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center h-full bg-black text-white">
      <h1 className="text-8xl font-zero">Kodo Impact</h1>
      <p className="">Game like a coder</p>
      <Link href="/game">
        <Button className="font-bold font-joystix" color="primary">
          Start Kickin&apos;
        </Button>
      </Link>
    </main>
  );
};

export default Home;
