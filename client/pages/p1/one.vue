<template>
    <div>
        <div class="less-test">
            <div class="test">
                p1 {{ count }}
                <button @click="cliadd">add</button>

                <div id="data">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        name: 'One',
        data() {
            return {}
        },
        computed: {
            count() {
                return this.$store.state.count;
            }
        },
        methods: {
            cliadd() {
                alert()
            },
            fet(url) {
                fetch(url).then(function (res) {
                    return res.json()
                }).then(function (data) {
                    console.log(data)
                }).catch(function (e) {
                    console.log(e)
                })
            }
        },
        created() {
            const that = this;

            // get
//            $.ajax({
//              type: "GET",
//              url: 'http://localhost:3000/people',
//              data: {},
//              dataType: 'json',
//              success(data) {
//                console.log(data, "get 数据成功返回")
//                that.ajaxData = data;
//              },
//              error() {
//                console.log('ajax获取数据失败')
//              }
//            });

            this.fet('http://localhost:3000/people')


            // post
            //            $.post('http://localhost:3000/people', {
            //                "name": "allen",
            //                "sex": "man",
            //                "age": 18
            //            }, (data)=>{
            //                alert(data)
            //            })

            // put
            /*$.ajax({
             type: "put",
             url: 'http://localhost:3000/people/2',
             data: {
             "name": "jak",
             "sex": "man",
             "age": 20
             },
             dataType: 'json',
             success(data) {
             console.log(data, "PUT 成功返回数据")
             },
             error() {
             alert('error')
             }
             });*/

            // DELETE
            /*$.ajax({
             type: "delete",
             url: 'http://localhost:3000/people/3',
             data: {
             "id": 3
             },
             dataType: 'json',
             success(data) {
             console.log(data, "delete 成功返回数据")
             },
             error() {
             alert('error')
             }
             });*/
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    .less-test {
        .test {
            color: salmon;
        }
    }
</style>