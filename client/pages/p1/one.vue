<template>
    <div>
        <div class="less-test">
            <div class="test">
                p1 {{ count }} <button @click="cliadd">add</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'One',
        data() {
          return {
          }
        },
        computed: {
          count() {
            return this.$store.state.count;
          }
        },
        methods: {
          cliadd() {

          }
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