<template>
    <div class="search">
        <div class="search-bar container">
            <div class="title" @click="jumpToHome">Books Share</div>
            <form action="/books/search" method="get" class="form">
                <!--<input  type="text"/>-->
                <!--<input type="submit" value="搜索">-->
                <el-input
                        placeholder="书名"
                        v-model="searchInput">
                    <el-button slot="append" icon="search" @click="search"></el-button>
                </el-input>
            </form>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        data() {
          return {
              searchInput: '',
          }
        },
        methods: {
            search() {
//                alert(this.searchInput);
                var that = this;
                if(this.searchInput) {
                    $.getJSON('/books/search', {name: this.searchInput}, function (result) {
                        if(result.s == 1){
                            that.$router.push({name: 'searchRes', params: {book: result.d}})
                        } else if (result.s == 2) {
                            that.$message({
                                message: '未查到该书名',
                                type: 'warning'
                            });
                        }
                    })
                } else {
                    this.$message({
                        message: '输入书名搜索',
                        type: 'warning'
                    });
                }

            },
            jumpToHome() {
                this.$router.push('/');
            }
        }
    }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
    .search {
        width: 100%;
        background: #e9e9e2;
    }
    .search-bar{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;

        .title {
            margin-right: 10px;
            font-weight: 800;
            font-size: 26px;
            color: #614e3c;
            cursor: pointer;
        }
        .form {
            width: 50%;
        }
    }
</style>