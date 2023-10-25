import { Board, PlayerType } from '../../src'
import DiagonalChecker from '../../src/result/DiagonalChecker'

test('Deve finalizar com vitória do jogador O', () => {
    const board = Board.empty()
        .set(0, 0, PlayerType.O)
        .set(1, 1, PlayerType.O)
        .set(2, 2, PlayerType.O)
    const result = new DiagonalChecker().check(board)
    expect(result.finished).toBeTruthy()
    expect(result.xWins).toBeFalsy()
    expect(result.oWins).toBeTruthy()
})

test('Deve finalizar com vitória do jogador X', () => {
    const board = Board.empty()
        .set(0, 2, PlayerType.X)
        .set(1, 1, PlayerType.X)
        .set(2, 0, PlayerType.X)
    const result = new DiagonalChecker().check(board)
    expect(result.finished).toBeTruthy()
    expect(result.xWins).toBeTruthy()
    expect(result.oWins).toBeFalsy()
})

test('Deve continuar em progresso sem vitória', () => {
    const board = Board.empty()
        .set(0, 0, PlayerType.X)
        .set(1, 1, PlayerType.X)
        .set(2, 2, PlayerType.O)
    const result = new DiagonalChecker().check(board)
    expect(result.inProgress).toBeTruthy()
    expect(result.xWins).toBeFalsy()
    expect(result.oWins).toBeFalsy()
})
