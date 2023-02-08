<template>
  <div>
    <table class="table table-bordered table-striped">
      <!-- 表格标题区域 ,使用插槽提高组件复用-->
      <thead>
        <!-- <tr>
          <th>#</th>
          <th>商品名称</th>
          <th>价格</th>
          <th>标签</th>
          <th>操作</th>
        </tr> -->

        <!-- 命名插槽 -->
        <tr>
          <slot name="header"></slot>
        </tr>
      </thead>

      <!-- 表格主体区域 -->
      <tbody>
        <!-- 使用v-for循环渲染表格的数据行 -->
        <tr v-for="(item,index) in data" :key="item.id">
          <!-- 为数据行的td预留的作用域插槽 -->
          <slot name="body" :row="item" :index="index"></slot>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name:'MyTable',
  props: {
    // 表格的数据源
    data: {
      type: Array,
      required: true,
      default: []
    },
  },
}
</script>

<style lang="less" scoped>

</style>