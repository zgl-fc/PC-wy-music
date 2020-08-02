import FCDiscover from '@/pages/discover'
import FCFriend from '@/pages/friend'
import FCMine from '@/pages/mine'

const routes = [
  {
    path:'/',
    exact:true,
    component:FCDiscover
  },
  {
    path:'/mine',
    component:FCMine
  },
  {
    path:'/friend',
    component:FCFriend
  }
]

export default routes;