<template>
  <div id="app">
    <div class="search">
      <ElFormPro ref="form" :rules="ruleForm" :model="form">
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="form.name" />
        </el-form-item>

        <el-form-item label="活动名称2" prop="name">
          <el-input v-model="form.name" />
        </el-form-item>

        <el-form-item label="活动名称3" prop="name">
          <el-input v-model="form.name" />
        </el-form-item>

        <el-form-item label="活动名称4" prop="name">
          <el-input v-model="form.name" />
        </el-form-item>

        <el-form-item label="活动名称5" prop="name">
          <el-input v-model="form.name" />
        </el-form-item>

        <el-form-item label="活动名称6" prop="name">
          <el-input v-model="form.name" />
        </el-form-item>
      </ElFormPro>
    </div>
  </div>
</template>

<script>
import ElFormPro from '../packages/el-form-expand/index'
export default {
  name: 'App',
  components: {
    ElFormPro
  },
  data() {
    return {
      form: {},
      ruleForm: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.$refs.form.getRef().validate()
    }, 1000)
  }
}
</script>

<style>
.search {
  margin: 0 auto;
  width: 90%;
  padding: 40px 24px;
  border: 1px solid #ebedf1;
}
</style>
