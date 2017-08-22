import {isFunction} from './isFunction';
import {isObject} from './isObject';

export function isPromise(x) {
   return isObject(x) && typeof isFunction(x.then);
}
