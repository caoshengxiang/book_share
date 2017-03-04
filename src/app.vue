<template>
    <div class="app">
        {{hello}}
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                hello: 'hello, allen.'
            }
        },
    }
</script>

<style lang="sass" rel="">
    .app{
        color: red;
    }
</style>