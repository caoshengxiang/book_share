<template>
    <div class="app">
        <ul>
            <li v-for="item in menu">
                <router-link :to="item.path">{{item.name}}</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    import one from './pages/p1/one.vue'
    import two from './pages/p2/two.vue'
    import $ from 'jquery'
    export default {
        name: 'App',
        data() {
            return {
                menu: [
                  {name: 'p1', path: '/p1'},
                  {name: 'p2', path: '/p2'},
                ]
            }
        },
        components: {
            one,
            two,
        },
        created() {
            const that = this;

            // get
            $.ajax({
                type: "GET",
                url: 'http://localhost:3000/people',
                data: {},
                dataType: 'json',
                success(data) {
                    console.log(data, "get 数据成功返回")
                    that.ajaxData = data;
                },
                error() {
                    alert('获取数据失败')
                }
            });

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

<style lang="sass" rel="">

</style>