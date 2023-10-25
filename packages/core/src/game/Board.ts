import Cell from "../shared/Cell";
import { PlayerType } from "../shared/PlayerType";

export default class Board {
  private constructor(readonly state: Cell[][]) {}

    static empty(): Board {
        return new Board([
            [new Cell(0, 0), new Cell(0, 1), new Cell(0, 2)],
            [new Cell(1, 0), new Cell(1, 1), new Cell(1, 2)],
            [new Cell(2, 0), new Cell(2, 1), new Cell(2, 2)]
        ])
    }

    get rows(): number{
        return this.state.length
    }

    get cols(): number{
        return this.state[0].length
    }

    get items(): Cell[] {
        return this.state.flat()
    }

    get(row: number, col: number): Cell | null {
        return this.state[row]?.[col] ?? null
    }

    isEmpty(row: number, col: number): boolean {
        return this.get(row, col)?.isEmpty() ?? true
    }

    isNotEmpty(row: number, col: number): boolean {
        return !this.isEmpty(row, col)
    }
    
    isFull(): boolean {
        return this.items.every((cell) => cell.type !== null)
    }

    set(row: number, col: number, type: PlayerType): Board {
        const cell = this.get(row, col)
        if(!cell || cell.isNotEmpty()) return this

        const state = this.state.map((row) => [...row])
        state[row][col] = state[row][col].markWith(type)
        return new Board(state) 
    }
}
