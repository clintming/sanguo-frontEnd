export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      name: 'API管理',
      children: [
        {
          name: '数据表比较',
          url: '/dbcompare'
        }
      ]
    }
  ]
}
