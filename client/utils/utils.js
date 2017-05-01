/**
 * Created by allen on 17-4-13.
 */

export default {
    setLocalStorage(keyName, obj) {
        let st = '';
        st = JSON.stringify(obj);

        localStorage[keyName] = st;
    },
    getLocalStorage(storage) {
        let s = localStorage[storage];
        let user = {};
        if(s) {
            user = JSON.parse(s)
        }
        return user;
    },
    destoryLocalStorage(st) {
        localStorage[st] = '';
    },
    getTime(t) {
        const y = t.getFullYear(),
            m = t.getMonth() +1,
            d = t.getDay(),
            h = t.getTime(),
            mi = t.getMinutes(),
            se = t.getSeconds();
        return y+' ' +m+ ' '+d+ '' +h+ ':' +mi+ ':'+se
    }
 }