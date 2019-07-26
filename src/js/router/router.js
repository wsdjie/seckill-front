//创建路由对象并配置路由规则

import Login from '../../components/Login'
import Foo from '../../components/Foo'
import Bar from '../../components/Bar'

export default[
  {path:'/',component:Login},
  {path:'/login',component:Login},
  {path:'/bar',component:Bar},
  {path:'/foo',component:Foo},
]
