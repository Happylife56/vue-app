export default {
  path: '/collect',
  name: 'collect', // 收银
  meta: {
    title: '收银平台'
  },
  component: () => import('@/views/Collect.vue')
}
