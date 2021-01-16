/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BotGameState = {
    state?: {
/**
 * Current moves in UCI format
 */
moves?: string,
/**
 * Integer of milliseconds White has left on the clock
 */
wtime?: number,
/**
 * Integer of milliseconds Black has left on the clock
 */
btime?: number,
/**
 * Integer of White Fisher increment.
 */
winc?: number,
/**
 * Integer of Black Fisher increment.
 */
binc?: number,
/**
 * Game status code. https://github.com/ornicar/scalachess/blob/0a7d6f2c63b1ca06cd3c958ed3264e738af5c5f6/src/main/scala/Status.scala#L16-L28
 */
status?: string,
/**
 * Color of the winner, if any
 */
winner?: string,
};
}