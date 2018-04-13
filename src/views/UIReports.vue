<template>
    <el-table :data="tableData" style="width:100%">
      <el-table-column label="用例名称" prop="name" width=200>
      </el-table-column>
       <el-table-column label="用例描述" prop="desc" width="150"></el-table-column>
      <el-table-column label="当前运行状态" prop="color" width="150"></el-table-column>
    </el-table>

</template>
<script>
export default {
  data () {
    return {
      tableData: [{
        name: '',
        url: 'www.baidu.com',
        desc: '',
        color: ''
      }],
      tempValue: ''
    }
  },
  mounted () {

      // $.ajax({
      //   url: 'http://10.255.1.216:8080/jenkins/view/Automation_ui/api/json?pretty=true',
      //   type: 'GET',
      //   async: false,
      //   timeout: 5000,
      //   dataType: 'json',
      //   beforeSend: function (xhr) {
      //   },
      //   success: function (data, textStatus, jqXHR) {
      //     console.log('11111' + data.jobs)
      //     var jobs = data.jobs
      //       for (var x in jobs) {
      //         console.log('new---')
      //         $.ajax({
      //             url: jobs[x].url,
      //             async: false,
      //             type: 'GET',
      //             timeout: 5000,
      //             dataType: 'json',
      //             success: function(data){
      //               console.log('111---' + data)
      //             },
      //             error: function(error){

      //             }
      //           })
      //         }
       
      //   },
      //   error: function (xhr, textStatus) {
      //     console.log('error' + xhr)
      //   },
      //   complete: function (res) {
      //     console.log('complete' + res)
      //   }
      // })

    this.getJenkinsViews()

  //   this.$axios.all([this.getJenkinsViews ()
  //   ]).then(this.$axios.spread(function (res){
  //   console.log('res--' + res)
  // })).catch(function(error){
  //   console.log('error---' + error)
  // })
  },


  methods: {

  //   getJenkinsJobsInfo (jobs) {
  //   console.log('------' + jobs)
  //   for (var x in jobs) {
  //     if (jobs[x].color === 'red') {
  //       jobs[x].color = '失败'
  //     } else if (jobs[x].color === 'blue') {
  //       jobs[x].color = '成功'
  //     }
  //     this.$axios({
  //       method: 'get',
  //       url: jobs[x].url + 'api/json?pretty=true'
  //     }).then(function (res) {
  //       var jobDetail = res.data
  //       jobs[x].name = jobDetail.description
  //     }).catch(function () {
  //     })
  // }
  // this.tableData = jobs
  // },
  //   getJenkinsViews() {
  //   this.$axios({
  //     method: 'get',
  //     url: 'http://10.255.1.216:8080/jenkins/view/Automation_ui/api/json?pretty=true'
  //   })
  //   .then(function(res){
  //     console.log('aaaaa---'+ res.data.jobs)
  //     var jobs = res.data.jobs
  //     this.getJenkinsJobsInfo (jobs)
  //      // this.$axios.all([this.getJenkinsJobsInfo(jobs)]).then(this.$axios.spread(function(res,par){
  //     //   console.log('11111' + res)
  //     // }))
  //     }    
  //     ).catch(function () {
  //   })
  //   //this.tableData = jobs
  // },
  //   getWithAjax (url) {
  //     $.ajax({
  //       url: url,
  //       type: 'GET',
  //       async: false,
  //       timeout: 5000,
  //       dataType: 'json',
  //       beforeSend: function (xhr) {
  //       },
  //       success: function (data, textStatus, jqXHR) {
  //         console.log('11111' + data)
  //       },
  //       error: function (xhr, textStatus) {
  //         console.log('error' + xhr)
  //       },
  //       complete: function (res) {
  //         console.log('complete' + res)
  //       }
  //     })
  //   },

     async getJenkinsJobsInfo (jobs,x,url) {
       console.log('url:' + url)
       const detail = await this.$axios({
        method: 'get',
        url: url + 'api/json?pretty=true'
      })
      jobs[x].desc = detail.data.description
      console.log('detail:'+detail.data.description)

      // .then(function (res) {
      //   var jobDetail = res.data.description
      //   jobs[x].desc = jobDetail 
      //   console.log('jobDetail:' + jobDetail)
      // }).catch(function (error) {
      //   console.log(error)
      // })
    },
    async getJenkinsViews () {
     const viewsJobs = await this.$axios({
        method: 'get',
        url: 'http://10.255.1.216:8080/jenkins/view/Automation_ui/api/json?pretty=true'
      })
      
      var jobs = viewsJobs.data.jobs
      for(var x in jobs){
        if (jobs[x].color === 'red') {
            jobs[x].color = '失败'
          } else if (jobs[x].color === 'blue') {
            jobs[x].color = '成功'
          }
      const jobDetail = await this.getJenkinsJobsInfo(jobs,x,jobs[x].url)
      console.log('jobDetail:' + JSON.stringify(jobDetail))
      }
      this.tableData = jobs


      // .then(res => {
      //   console.log(res.data.jobs)
      //   var jobs = res.data.jobs
      //   for (var x in jobs) {
      //     if (jobs[x].color === 'red') {
      //       jobs[x].color = '失败'
      //     } else if (jobs[x].color === 'blue') {
      //       jobs[x].color = '成功'
      //     }
      //   var aa = this.getJenkinsJobsInfo (jobs,x,jobs[x].url)
      //   console.log('aa:'+aa)
      // //  await this.$axios({
      // //   method: 'get',
      // //   url: jobs[x].url + 'api/json?pretty=true'
      // //     }).then(function (res) {
      // //   var jobDetail = res.data.description
      // //   console.log('jobDetail:' + jobDetail)
      // //   this.tempValue = jobDetail
      // //   jobs[x].desc = jobDetail
      // //     })   
      //   }
      //   console.log('jobs[0]:' + JSON.stringify(aa))
      // }).catch(function (error) {
      //   console.log(error)
      // }
      // )

    },

  }
}
</script>
