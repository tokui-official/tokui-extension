import Setting from './pages/components/Setting'
import Card from './pages/components/Card'
import Bookmark from './pages/components/Bookmark'



export default [
  {
    path: '/',
    component: Card,
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
