import { Cell, GameResult, PlayerType } from "../../src"

test('Deve criar um resultado empatado', () => {
    const empatado = new GameResult([], true)
    expect(empatado.finished).toBeTruthy()
    expect(empatado.tied).toBeTruthy()
    expect(empatado.inProgress).toBeFalsy()
})

test('Deve criar um resultado com vitória', () => {
    const c1 = new Cell(0, 0, PlayerType.X)
    const c2 = new Cell(0, 1, PlayerType.X)
    const c3 = new Cell(0, 2, PlayerType.X)
    const victory = new GameResult([c1, c2, c3])
    
    expect(victory.finished).toBeTruthy()
    expect(victory.tied).toBeFalsy()
    expect(victory.hasCell(0, 0)).toBeTruthy()
    expect(victory.hasCell(1, 1)).toBeFalsy()
})