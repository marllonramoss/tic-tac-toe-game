import { Player, PlayerType } from "../../src"

test('Deve retornar a mesma instancia quando adicionar 0 pontos', () => {
    const player = new Player('P1', PlayerType.O)
    expect(player.addScore(0) === player).toBeTruthy()
})

test('Deve retornar instancia diferente quando adicionar pontos', () => {
    const player = new Player('P1', PlayerType.O)
    expect(player.addScore(1) === player).toBeFalsy()
})

test('Deve adicionar 10 pontos ao jogador', () => {
    const player = new Player('P1', PlayerType.O).addScore(10)
    expect(player.name).toBe('P1')
    expect(player.type).toBe('O')
    expect(player.score).toBe(10)
})

test('Deve limpar os pontos do jogador', () => {
    const player = new Player('P1', PlayerType.X, 100).clear()
    expect(player.name).toBe('P1')
    expect(player.type).toBe('X')
    expect(player.score).toBe(0)
})