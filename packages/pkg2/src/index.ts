import * as p1 from '@ryancavanaugh/pkg1';
import {fn1bX} from '@ryancavanaugh/pkg1';
import { snakeCase } from 'change-case';

export function fn4() {
    p1.fn();
    /**
     * FIXME: IntelliJ will not suggest an auto-import
     */
    return snakeCase('abc');
}

/**
 * TODO: IntelliJ auto-import works!
 */
const x = fn1bX();
