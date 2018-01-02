<template>
<div>
    <b-form @submit="onSubmit">
        <div style="width:50%">
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
            <b-form-input v-model="form.oldDbTable" placeholder="debt_borrower"></b-form-input>
        </b-form-group>
        <b-form-group label="字段">
            <b-form-select></b-form-select>
        </b-form-group>      
        </div>
        <b-button type="submit" variant="primary">提交</b-button>
    </b-form>
    <div>
    <b-form-textarea v-model="result" rows="5">
        <pre class="mt-3">{{ result }}</pre>
    </b-form-textarea>
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
        oldDbTable: ''
      },
      result: 'aaaaaaaaaa'
    }
  },
  methods: {
    onSubmit () {
      this.$axios({
        method: 'get',
        url: `$api/compareTwoTables`
      }).then(res => {
        this.result = res.data
      }
      ).catch()
    }
  }
}
</script>

<style>

</style>
