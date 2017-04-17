/**
 * Created by allen on 17-4-17.
 */

export default {
    post(url, da) {
        // let queryStr = '';
        // if (da) { // TODO 判空
        //     let last;
        //     for(last in da){};
        //     console.log(last)
        //     for(let key in da) {
        //         if(key === last) {
        //             queryStr += key + '=' + da[key]
        //         } else {
        //             queryStr += key + '=' + da[key] +"&"
        //         }
        //     }
        // }

        fetch(url, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // headers: {
            //     'Content-Type':'application/x-www-form-urlencoded'
            // },
            body: JSON.stringify(da)
            // body: queryStr
        }).then(function (res) {
            return res.json()
        }).then(function (result) {
            console.log(result)
        }).catch(function (err) {
            console.log(err)
        })
    },
    get(url, da) {
        fetch(url).then(function (res) {
            return res.json()
        }).then(function (json) {
            console.log(json)
            return json;
        }).catch(function (err) {
            console.log(err)
        })
    }
}
