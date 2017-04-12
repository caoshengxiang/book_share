<template>
    <div>
        <page-header></page-header>
        <search-bar></search-bar>

        <div class="category-con">
            <div class="menu">
                <h5>图书商品分类</h5>
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                    <el-menu-item index="1">导航一</el-menu-item>
                    <el-menu-item index="2">导航二</el-menu-item>
                    <el-menu-item index="3">导航三</el-menu-item>
                </el-menu>
            </div>
        </div>

        <page-footer></page-footer>
    </div>
</template>
<script>
    import pageHeader from '../../components/comm/header.vue'
    import pageFooter from '../../components/comm/footer.vue'
    import searchBar from '../../components/comm/search_bar.vue'
    export default {
        name: '',
        props: {},
        data() {
            return {}
        },
        computed: {},
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        components: {
            pageHeader,
            pageFooter,
            searchBar,
        },

    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
    .category-con{
        width: 1024px;
        margin: 50px auto;
        .menu{
            width: 240px;

            h5 {
                text-align: center;
            }
        }
    }
</style>