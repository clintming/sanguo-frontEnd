export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      name: '自动化测试',
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
      name: '性能测试'
    },
    {
      name: 'API管理',
      children: [
        {
          name: '数据表比较',
          url: '/dbcompare'
        }
      ]
    },
    {
      name: '测试报告统计',
      children: [
        {
          name: 'UI测试报告',
          url: '/UIReports'
        }
      ]
    }
  ]
}
