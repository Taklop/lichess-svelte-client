/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Clock } from './Clock';
import type { LightUser } from './LightUser';

export type ArenaTournament = {
    id?: string;
    createdBy?: string;
    system?: ArenaTournament.system;
    minutes?: number;
    clock?: Clock;
    rated?: boolean;
    fullName?: string;
    nbPlayers?: number;
    variant?: {
key?: string,
short?: string,
name?: string,
};
    startsAt?: number;
    finishesAt?: number;
    status?: number;
    perf?: {
icon?: string,
key?: string,
name?: string,
position?: number,
};
    secondsToStart?: number;
    hasMaxRating?: boolean;
    private?: boolean;
    position?: {
eco?: string,
name?: string,
wikiPath?: string,
fen?: string,
};
    schedule?: {
freq?: string,
speed?: string,
};
    winner?: LightUser;
}

export namespace ArenaTournament {

    export enum system {
        ARENA = 'arena',
    }


}