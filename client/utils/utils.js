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
    }
 }