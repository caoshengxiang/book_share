<template>
    <div class="app">
        {{hello}}
        <div class="color">color</div>
        <div class="sass-test"><div class="test">sass test</div></div>
    </div>
</template>

<script>
    import './style/color.css';
    import './style/sass_test.scss'

    export default {
        name: 'App',
        data() {
            return {
                hello: 'hello, allen.'
            }
        },
        components: {

        }
    }
</script>

<style lang="sass" rel="">
    .app{
        color: red;
    }
</style>