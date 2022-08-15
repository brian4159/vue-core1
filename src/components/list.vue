<template>

  <div>
    <el-button type="primary" @click="$router.push({name:'add'})">添加</el-button>

  <el-table :data="$store.state">
    <el-table-column
    prop="name"
    label="商品名称">
    </el-table-column>
    <el-table-column
    prop="price"
    label="价格">
    </el-table-column>
    <el-table-column
    prop="count"
    label="库存">
    </el-table-column>
    <el-table-column
    label="操作">
      <template slot-scope="scope">
        <el-button type="text" size="small" @click="$router.push({name:'edit',params:{id:scope.row.id}})">修改</el-button>
        <el-button type="text" size="small" class="del-btn" @click="del()">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {

  methods:{
     async del(id){
        await this.$confirm('你确定删除吗')
      this.$store.dispatch('del',id)
      this.$message('删除成功')
    }
  }
}
</script>

<style>

</style>
