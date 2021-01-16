/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LightUser } from './LightUser';

export type Team = {
    id?: string;
    name?: string;
    description?: string;
    open?: boolean;
    leader?: LightUser;
    leaders?: Array<LightUser>;
    nbMembers?: number;
}