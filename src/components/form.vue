<template lang="html">
  <div>
    <el-card>
      <div slot="header" >
        {{edit ? '修改' : '添加'}}
      </div>
      <el-form :model="form" :rules="rules" ref="form" label-width="80px">
        <el-form-item
          label = "名称"
          prop="name"
        >
        <el-input type="text" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item
          label = "价格"
          props="price"
        >
        <el-input type="text" v-model="form.price"></el-input>
        </el-form-item>
        <el-form-item
          label = "库存"
          prop="count"
        >
        <el-input type="text" v-model="form.count"></el-input>
        </el-form-item>
        <el-row>
          <el-button type="primary" @click="submit()">{{edit?'修改':'添加'}}</el-button>
          <el-button @click="$router.back()">返回</el-button>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      edit:this.$route.params.id!=undefined,
      form:this.$store.getters.getDataById(this.$route.params.id)||{},
      rules:{
        name: [{required:true,message:'请填写商品名称',tigger:['change','blur']},
        {min:3,message:'商品标题至少3个字',tigger:'change'}],
        price:[],
        count:[]
      }
  }
  },
  methods:{
    submit(){
      this.$refs.form.validate(ok=>{
        if(ok){
          if(this.edit){
        this.$store.dispatch('edit',{
          id:this.$route.params.id,
          form:this.form
        });

        this.$message('修改成功')
      }else{

        this.$store.dispatch('add',this.form);
        this.$message('添加成功');

      }
        this.$router.push({name:'list'});
        }
      })

    }
  }

}
</script>

<style>

</style>
