<template>
    <div class="app">
        {{ hello }}

        <div class="color">import css 文件</div>
        <div class="sass-test"><div class="test">import sass 文件</div></div>
        <div class="test">@import less</div>


        <one></one>
        <two></two>
    </div>
</template>

<script>
    import './style/color.css';
    import './style/sass_test.scss'
    import one from './components/one.vue'
    import two from 'components/two.vue'
    import $ from 'jquery'
    export default {
        name: 'App',
        data() {
            return {
                hello: 'hello, allen.'
            }
        },
        components: {
            one,
            two,
        },
        created() {
            $.ajax({
                type: "GET",
                url: 'http://localhost:3000/people',
                data: {},
                dataType: 'json',
                success(data) {
                    console.log(data)
                },
                error() {
                    alert('error')
                }
            })
        }
    }
</script>

<style lang="sass" rel="">
    @import "style/test.less";
    .app{
        color: red;
    }
</style>