<template>
    <div class="share-book">
        <page-header></page-header>
        <div class="share-content">
            <h1>分享好书</h1>
            <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="书名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="作者">
                    <el-input v-model="form.author"></el-input>
                </el-form-item>
                <el-form-item label="封面">
                    <el-upload
                            class="avatar-uploader"
                            action="/upload/uploader"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                        <img v-if="form.img" :src="form.img" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="分类">
                    <el-radio-group v-model="form.classify">
                        <el-radio v-for="(item, index) in classify" :label="item" :key="index"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="标签">
                    <el-checkbox-group v-model="form.tag">
                        <el-checkbox v-for="(item, index) in cptTags" :label="item" name="type" :key="index"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="推荐语">
                    <el-input type="textarea" v-model="form.rcmdWords"></el-input>
                </el-form-item>
                <el-form-item label="公开">
                    <el-switch on-text="" off-text="" v-model="form.pub"></el-switch>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="rcmdBook()">现在推荐</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
    import pageHeader from '../../components/comm/header.vue'
    import $ from 'jquery'
    export default {
//        name: '',
        props: {},
        data() {
            return {
                imageUrl: '',
                form: {
//                    id: '',
                    img: '',
                    name: '',
                    author: '',
                    tag: [],
                    classify: '',
                    rcmdWords: '',
                    userId: '',
                    pub: true,
                },
                classify: ['文学', '流行', '文化', '生活', '经管', '科技', '其他'],
                tags: [
                    ['小说', '随笔', '日本文学', '散文', '诗歌', '童话', '名著', '港台', '其他'],
                    ['漫画', '绘本', '推理', '青春', '言情', '科幻', '武侠', '奇幻', '其他'],
                    ['历史', '哲学', '传记', '设计', '建筑', '电影', '回忆录', '音乐', '其他'],
                    ['旅行', '励志', '职场', '美食', '教育', '灵修', '健康', '家居', '其他'],
                    ['经济学', '管理', '商业', '金融', '营销', '理财', '股票', '企业史', '其他'],
                    ['科普', '互联网', '编程', '交互设计', '算法', '通信', '神经网络', '其他'],
                    []
                ],

            }
        },
        components: {
            pageHeader,
        },
        computed: {
          cptTags() {
              switch (this.form.classify) {
                  case '文学':
                      return this.tags[0];
                      break;
                  case '流行':
                      return this.tags[1];
                      break;
                  case '文化':
                      return this.tags[2];
                      break;
                  case '生活':
                      return this.tags[3];
                      break;
                  case '经管':
                      return this.tags[4];
                      break;
                  case '科技':
                      return this.tags[5];
                      break;
                  case '其他':
                      return this.tags[6];
                      break;
                  default:
                      return this.tags[0];
              }
          }
        },
        methods: {
            handleAvatarSuccess(res, file) {
                console.log(res)
                console.log(file)
                this.form.img = res.url;
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isPng = file.type === 'image/png';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG && !isPng) {
                    this.$message.error('上传图片只能是 JPG 或 PNG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return (isJPG || isPng) && isLt2M;
            },
            rcmdBook() {
                console.log(this.form.tag)
                // TODO 表单验证
                // TODO userId
                $.ajax({
                    url: '/books/add',
                    type: 'post',
                    data: {
                        img: this.form.img,
                        name: this.form.name,
                        author: this.form.author,
                        tag: this.form.tag,
                        classify: this.form.classify,
                        rcmdWords: this.form.rcmdWords,
                        userId: 1
                    },
                    success: function (result) {
                        console.log(result)
                    },
                    dataType: 'json',
                    traditional: true
                });
            }
        }
    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
    @import "../../styles/var";
    .share-book {
    }
    .share-content {
        width: $pageContent;
        margin: 0 auto;
        padding: 20px;
        h1 {
            margin-left: 25px;
            margin-bottom: 20px;
            font-size: 24px;
        }
    }


    .avatar-uploader {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        width: 106px;
        height: 140px;
    }
    .avatar-uploader:hover {
        border-color: #20a0ff;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 106px;
        height: 140px;
        line-height: 140px;
        text-align: center;
    }
    .avatar {
        width: 106px;
        height: 140px;
        display: block;
    }
</style>