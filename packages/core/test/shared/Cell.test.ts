import { Cell, PlayerType } from "../../src"


test('Deve criar uma célula preenchida', () => {
    const cell = new Cell(0, 2, PlayerType.X)
    expect(cell.row).toBe(0)
    expect(cell.col).toBe(2)
    expect(cell.type).toBe(PlayerType.X)
    expect(cell.isEmpty()).toBeFalsy()
    expect(cell.isNotEmpty()).toBeTruthy()
    

})

test('Deve criar uma célula vazia', () => {
    const cell = new Cell(0, 2)
    expect(cell.row).toBe(0)
    expect(cell.col).toBe(2)
    expect(cell.type).toBeNull()
    expect(cell.isEmpty()).toBeTruthy()
    expect(cell.isNotEmpty()).toBeFalsy()
})

test('Deve marcar uma célula vazia com um PlayerType', () => {
    const cell = new Cell(0, 2)
    expect(cell.isEmpty()).toBeTruthy()
    expect(cell.isNotEmpty()).toBeFalsy()
    const newCell = cell.markWith(PlayerType.X)
    expect(newCell.isEmpty()).toBeFalsy()
    expect(newCell.isNotEmpty()).toBeTruthy()
    expect(newCell.row).toBe(0)
    expect(newCell.col).toBe(2)
})

test('Deve ignorar marcação em uma célula ja marcada',() => {
    const cell = new Cell(0, 2).markWith(PlayerType.X)
    const sameCel = cell.markWith(PlayerType.O)
    expect(cell === sameCel).toBeTruthy()
})