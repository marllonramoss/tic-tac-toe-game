import CellArea from "@/components/game/CellArea";
import { PlayerType } from "core";

export default function Home() {
  return (
    <div>
     <CellArea type={PlayerType.X} selected/>
     <CellArea type={PlayerType.O} selected/>
     <CellArea type={PlayerType.X} />
     <CellArea type={PlayerType.O} />
     <CellArea />
    </div>
  );
}
