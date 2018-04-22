<template>
  <div>
  <el-form size="mini" >
    <el-form-item label="运行环境">
    <el-radio-group v-model="form.runningEnv">
        <el-radio label="测试"></el-radio>
        <el-radio label="开发"></el-radio>
    </el-radio-group>
  </el-form-item>
      <el-form-item label="功能选择" >
         <el-select v-model="feature" size="mini">
             <el-option v-for="item in form.featuresOptions" 
             :label="item.label"
             :key="item.value"
             :value="item.value"></el-option>
         </el-select>
      </el-form-item>
   <el-form v-if="feature == '发标'">
      <el-form-item label="标的类型">
         <el-select size="mini">
          <el-option v-for="item in publishBidForm.bidType" :key="item.value" 
          :label="item.label"
          :value="item.value"></el-option>
        </el-select>
      </el-form-item>
  </el-form>
  <el-form-item >
      <el-button size="mini" @click="onSubmit" round>重置</el-button>
      <el-button type="primary" size="mini" @click="onSubmit" round>立即提交</el-button>
  </el-form-item>
    <el-form-item label="运行结果:">
    <el-input type="textarea" v-model="form.result" readonly autosize ></el-input>
    </el-form-item>
  </el-form>
  </div>
</template>
<script>
export default {
  data() {
      return {
          form:{
             featuresOptions:[{
                 label: '注册',
                 value: '注册'
             },{
                 label: '发标',
                 value: '发标'
             }],
             runningEnv: '测试',
             result:''    
          },
          feature:'',
          registerForm: {

          },
          publishBidForm: {
              bidType:[{
                  label:'新手',
                  value:''
                  },
                  {
                   label: '天猫',
                   value: ''
                  }],
              bidPeriod: '',
              periodUnit:''
          }  
      } 
  },
  motheds: {
      onSubmit(){
          
      }
  }
}
</script>
