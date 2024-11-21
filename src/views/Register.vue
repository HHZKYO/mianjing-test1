<template>
  <div class="login-page">
    <van-nav-bar
      title="注册"
    />

    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="请输入用户名"
        :rules="[
          { required: true, message: '请填写用户名' },
          { pattern: /^\w{5,8}$/, message: '用户名为5-8个字符'}
        ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="请输入密码"
        :rules="[
          { required: true, message: '请填写密码' },
          { pattern: /^\w{6}$/, message: '密码为6个字符'}
        ]"
      />
      <div style="margin: 16px;">
        <van-button block type="primary" native-type="submit">提交</van-button>
      </div>
    </van-form>

    <router-link class="link" to="/login">已有账号，直接登陆</router-link>
  </div>
</template>

<script>
import { register } from '@/api/user'
export default {
  name: 'LoginPage',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (values) {
      // const res = await register(values)
      // console.log(res)
      this.$toast.loading({
        message: '请求中...',
        forbidClick: true
      })
      await register(values)
      this.$toast.success('注册成功')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.link {
  color: #069;
  font-size: 12px;
  padding-right: 20px;
  float: right;
}
</style>
