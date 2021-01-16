/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Perfs } from './Perfs';
import type { PlayTime } from './PlayTime';
import type { Profile } from './Profile';
import type { Title } from './Title';

export type User = {
    id?: string;
    username?: string;
    online?: boolean;
    perfs?: Perfs;
    createdAt?: number;
    disabled?: boolean;
    tosViolation?: boolean;
    booster?: boolean;
    profile?: Profile;
    seenAt?: number;
    patron?: boolean;
    playTime?: PlayTime;
    language?: string;
    title?: Title;
}