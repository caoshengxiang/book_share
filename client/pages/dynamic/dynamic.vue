<template>
    <div>
        <page-header></page-header>
        <search-bar></search-bar>

        <div class="dynamic-con">
            <dynamic-list></dynamic-list>
            <dynamic-list></dynamic-list>
            <dynamic-list></dynamic-list>
            <dynamic-list></dynamic-list>
            <dynamic-list></dynamic-list>
            <dynamic-list></dynamic-list>

            <div class="upload-book">
                <user-upload></user-upload>
            </div>
        </div>

        <page-footer></page-footer>
    </div>
</template>

<script>
    import pageHeader from '../../components/comm/header.vue'
    import pageFooter from '../../components/comm/footer.vue'
    import searchBar from '../../components/comm/search_bar.vue'

    import dynamicList from './body/dynamic_list.vue'
    import userUpload from './body/user_upload.vue'
    export default {
        name: '',
        components: {
            pageHeader,
            pageFooter,
            searchBar,
            dynamicList,
            userUpload,
        },
    }
</script>

<style lang="sass" rel="stylesheet/scss">

    .dynamic-con {
        width: 1024px;
        margin: 50px auto;
        position: relative;
    }
    .upload-book {
        width: 200px;
        height: 300px;
        /*border: 1px solid #ccc;*/
        position: absolute;
        right: 0;
        top: 0;
        background: #f6f6f1;
        padding: 20px 10px 0 10px;
    }
</style>