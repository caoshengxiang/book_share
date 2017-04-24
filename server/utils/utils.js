/**
 * Created by allen on 17-4-24.
 */

/** by
* @param name {String} 排序的对象属性
* */
exports.sortBy = function (name) {
    return function (o, p) {
        var a, b;
        if (typeof o === "object" && typeof p === "object" && o && p) {
            a = o[name];
            b = p[name];

            if (a === b) {
                return 0;
            }
            if (typeof a === typeof b) {
                return a < b ? -1 : 1;
            }
            return typeof a < typeof b ? -1 : 1;
        }
        else {
            throw("error");
        }
    }
}
// var tA = [{c: 2}, {c: 4}, {c: 1}]
// console.log(tA.sort(by('c')))