import Setting from './pages/components/Setting'
import Content from './pages/components/Content'
import Bookmark from './pages/components/Bookmark'



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
  },
  {
    path: '/bookmark',
    component: Bookmark,
    name: 'bookmark'
  }
]
