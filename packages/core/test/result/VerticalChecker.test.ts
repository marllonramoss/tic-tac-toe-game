import { Board, PlayerType } from '../../src'
import VerticalChecker from '../../src/result/VerticalChecker'

test('Deve finalizar com vitória do jogador O', () => {
    const board = Board.empty()
        .set(0, 1, PlayerType.O)
        .set(1, 1, PlayerType.O)
        .set(2, 1, PlayerType.O)
    const result = new VerticalChecker().check(board)
    expect(result.finished).toBeTruthy()
    expect(result.xWins).toBeFalsy()
    expect(result.oWins).toBeTruthy()
})

test('Deve continuar em progresso sem vitória', () => {
    const board = Board.empty()
        .set(0, 2, PlayerType.X)
        .set(1, 2, PlayerType.X)
        .set(2, 2, PlayerType.O)
    const result = new VerticalChecker().check(board)
    expect(result.inProgress).toBeTruthy()
    expect(result.xWins).toBeFalsy()
    expect(result.oWins).toBeFalsy()
})
