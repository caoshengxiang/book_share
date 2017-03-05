<template>
    <div class="app">
        {{ hello }}

        <div class="color">import css 文件</div>
        <div class="sass-test"><div class="test">import sass 文件</div></div>
        <div class="test">@import less</div>


        <one></one>
        <two></two>

        <ul>
            <li v-for="item in ajaxData">
                my name is {{item.name}},sex: {{item.sex}},age: {{item.age}}
            </li>
        </ul>
    </div>
</template>

<script>
    import './style/color.css';
    import './style/sass_test.scss'
    import one from './components/one.vue'
    import two from './components/two.vue'
    import $ from 'jquery'
    export default {
        name: 'App',
        data() {
            return {
                hello: 'hello, allen.',
                ajaxData: [],
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
    @import "style/test.less";
    .app{
        color: red;
    }
</style>