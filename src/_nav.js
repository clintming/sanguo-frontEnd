export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      name: '自动化测试',
      icon: 'icon-plane',
      children: [
        {
          name: '接口测试'
        },
        {
          name: 'UI 测试'
        }
      ]
    },
    {
      name: '性能测试',
      icon: 'icon-energy'
    },
    {
      name: '工具管理',
      icon: 'icon-globe',
      children: [
        {
          name: '数据表比较',
          url: '/dbcompare'
        },
        {
          name: 'Api管理',
          url: '/ApiMgmt'
        }
      ]
    },
    {
      name: '测试报告统计',
      icon: 'icon-graph',
      children: [
        {
          name: 'UI测试报告',
          url: '/UIReports'        
        }
      ]
    }
  ]
}
