# el-form-expand

 - 仿ant design pro component做一个可以展开收起的vue搜索表单

```ts
type btns = btn[]
interface btn {
  type?: String
  icon?: String
  name?: String
  click?: () => void
  render?: () => Vue.VNode
}
```
#### 直接上代码
> npm i el-form-expand -s 
```js
<template>
  <div id="app">
    <div class="search">
      <ElFormExpand ref="form" :rules="ruleForm" :model="form">
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
      </ElFormExpand>
    </div>
  </div>
</template>

<script>
import ElFormExpand from '../packages/el-form-expand/index'
export default {
  name: 'App',
  components: {
    ElFormExpand
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
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
