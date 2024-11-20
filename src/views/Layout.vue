<template>
  <div class="layout-page">
    <div>首页架子 - 内容区域</div>

    <van-tabbar>
      <van-tabbar-item icon="coupon-o">文章</van-tabbar-item>
      <van-tabbar-item icon="star-o">收藏</van-tabbar-item>
      <van-tabbar-item icon="like-o">喜欢</van-tabbar-item>
      <van-tabbar-item icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'LayoutPage'
}
</script>

<style lang="less" scoped></style>
