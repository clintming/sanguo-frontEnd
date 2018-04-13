<template>
<div>
 <div>
 
</div>
    <b-form @submit="onSubmit" style="display:flex"> 
        <div style="width:30%">
            <h6>旧数据库信息</h6>
        <b-form-group label="数据库url:">
            <b-form-input v-model="form.oldDbUrl" placeholder="jdbc:mysql://localhost:3306/sanguo_appium"></b-form-input>
        </b-form-group>
        <b-form-group label="数据库用户名：">
            <b-form-input v-model="form.oldDbUsername" placeholder="root"></b-form-input>
        </b-form-group>
         <b-form-group label="数据库密码：">
            <b-form-input v-model="form.oldDbPassword" placeholder="root"></b-form-input>
        </b-form-group>
         <b-form-group label="查询表">
            <b-form-input v-model="form.oldDbTableName" placeholder="debt_borrower"></b-form-input>
        </b-form-group>
        <b-form-group label="比较字段">
            <b-form-select v-model="form.comparedOldFields[0]" v-bind:options="form.oldDbFields"></b-form-select>
            <b-form-select v-model="form.comparedOldFields[1]" v-bind:options="form.oldDbFields"></b-form-select>
        </b-form-group>
           <b-form-group label="唯一字段">
            <b-form-input v-model="form.uniqueField"></b-form-input>
            </b-form-group>    
            <b-form-group label="比较数量">
            <b-form-input v-model="form.compareSize"></b-form-input>
        </b-form-group>     
<b-button style="align-self:center" type="submit" variant="primary">提交</b-button>    
        </div>

           <div style="width:30%">
            <h6>新数据库信息</h6>
        <b-form-group label="数据库url:">
            <b-form-input v-model="form.newDbUrl" placeholder="jdbc:mysql://localhost:3306/sanguo_appium"></b-form-input>
        </b-form-group>
        <b-form-group label="数据库用户名：">
            <b-form-input v-model="form.newDbUsername" placeholder="root"></b-form-input>
        </b-form-group>
         <b-form-group label="数据库密码：">
            <b-form-input v-model="form.newDbPassword" placeholder="root"></b-form-input>
        </b-form-group>
         <b-form-group label="查询表">
            <b-form-input v-model="form.newDbTableName" placeholder="debt_borrower"></b-form-input>
        </b-form-group>
        <b-form-group label="比较字段">
            <!-- <b-form-select v-model="form.aa" options="newDbFields">
            </b-form-select> -->
            <b-form-select v-model="form.comparedNewFields[0]" v-bind:options="form.newDbFields"></b-form-select>
            <b-form-select v-model="form.comparedNewFields[1]" v-bind:options="form.newDbFields"></b-form-select>
        </b-form-group>   
          </div>
         
    </b-form>
          <div>
             <b-form-group label="比较结果：">
             <b-form-textarea  v-model="result" rows="5">
              <pre class="mt-3">{{ result }}</pre>
             </b-form-textarea>
             </b-form-group>
          </div>
</div>

</template>

<script>
export default {
  data () {
    return {
      form: {
        oldDbUrl: '',
        oldDbUsername: '',
        oldDbPassword: '',
        oldDbTableName: '',
        oldDbFields: ['id', 'uid'],
        uniqueField: '',
        newDbUrl: '',
        newDbUsername: '',
        newDbPassword: '',
        newDbTableName: '',
        compareSize: '',
        newDbFields: ['id', 'uid'],
        aa: [],
        comparedOldFields: [],
        comparedNewFields: []
      },
      result: [''],
      newDbFields1: [
        {text: 'a', value: 'b'}]
    }
  },
  methods: {
    onSubmit () {
      console.log('begin')
      this.$axios({
        method: 'post',
        url: '/api/compareTwoTables',
        params: {
          oldDbUrl: this.form.oldDbUrl,
          oldDbUsername: this.form.oldDbUsername,
          oldDbPassword: this.form.oldDbPassword,
          oldDbTableName: this.form.oldDbTableName,
          comparedOldFields: this.form.comparedOldFields,
          uniqueField: this.form.uniqueField,
          compareSize: this.form.compareSize,
          newDbUrl: this.form.newDbUrl,
          newDbUsername: this.form.newDbUsername,
          newDbPassword: this.form.newDbPassword,
          newDbTableName: this.form.newDbTableName,
          comparedNewFields: this.form.comparedNewFields

        }
      }).then(res => {
        var data = res.data
        console.log('res' + data)
        this.result = data
      }).catch(function (error) {
        console.log('error' + error)
      })
    }
  }
}
</script>

<style>

</style>
