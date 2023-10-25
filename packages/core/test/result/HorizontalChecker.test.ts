import { Board, PlayerType } from '../../src'
import HorizontalChecker from '../../src/result/HorizontalChecker'

test('Deve finalizar com vitória do jogador X', () => {
    const board = Board.empty()
        .set(0, 0, PlayerType.X)
        .set(0, 1, PlayerType.X)
        .set(0, 2, PlayerType.X)
    const result = new HorizontalChecker().check(board)
    expect(result.finished).toBeTruthy()
    expect(result.xWins).toBeTruthy()
    expect(result.oWins).toBeFalsy
})

test('Deve continuar em progresso sem vitória', () => {
    const board = Board.empty()
        .set(0, 0, PlayerType.X)
        .set(0, 1, PlayerType.X)
        .set(0, 2, PlayerType.O)
    const result = new HorizontalChecker().check(board)
    expect(result.inProgress).toBeTruthy()
    expect(result.xWins).toBeFalsy()
    expect(result.oWins).toBeFalsy()
})
