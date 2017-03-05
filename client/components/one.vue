<template>
    <div>
        <div class="less-test">
            <div class="test">
                less test
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'One'
    }
</script>

<style lang="less" rel="stylesheet/less">
    .less-test {
        .test {
            color: salmon;
        }
    }
</style>