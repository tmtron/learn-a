import * as p1 from '@ryancavanaugh/pkg1';
import {fn1bX} from '@ryancavanaugh/pkg1';
import { snakeCase } from 'change-case';

export function fn4() {
    p1.fn();
    /**
     * TODO: IntelliJ will not suggest an auto-import
     * this is not related to learnajs
     * https://stackoverflow.com/questions/61410187/why-does-auto-import-of-some-packages-not-work
     */
    return snakeCase('abc');
}

/**
 * TODO: IntelliJ auto-import works!
 */
const x = fn1bX();
