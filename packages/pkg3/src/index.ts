import {fn4} from "@ryancavanaugh/pkg2";
import {fn, fn1a, fn1bX} from "@ryancavanaugh/pkg1";

/**
 * TODO: this is nice: we cannot use change-case here
 */
// import { snakeCase } from 'change-case';

fn();
fn1a();
fn1bX();
/**
 * TODO: auto-import works as expected
 */
fn4();

export function pkg3() {
    return 'pkg3';
}


