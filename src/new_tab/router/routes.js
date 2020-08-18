import PageIndex from './pages/Index'
import Setting from './pages/components/Setting'
import Content from './pages/components/Content'


export default [
  {
    path: '/',
    component: Content,
    name: 'index'
  },
  {
    path: '/setting',
    component: Setting,
    name: 'setting'
  }
]
