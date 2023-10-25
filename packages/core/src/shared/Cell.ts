import { PlayerType } from "./PlayerType";

export default class Cell {
    constructor(
        readonly row: number,
        readonly col: number,
        readonly type: PlayerType | null = null
    ){}

    markWith(type: PlayerType): Cell {
        if (this.type !== null) return this
        return new Cell(this.row, this.col, type)
    }

    isEmpty(): boolean {
        return this.type === null
    }

    isNotEmpty(): boolean {
        return !this.isEmpty()
    }

}