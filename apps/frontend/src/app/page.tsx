import BoardArea from "@/components/game/BoardArea";
import Scoreboard from "@/components/game/Scoreboard";
import Menu from "@/components/menu";
import Result from "@/components/result";

export default function Home() {
  return (
    <div className="flex flex-col gap-7">
      <Result/>
      <Menu/>
      <BoardArea/>
      <Scoreboard/>
    </div>
  );
}
