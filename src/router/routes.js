import React, { lazy, Suspense } from 'react'
import { Redirect } from 'react-router-dom'
import BasicLayout from '@/layouts/basic'
const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
    </Suspense>
  )
}

const Home = SuspenseComponent(lazy(() => import(/* webpackChunkName: 'home' */'@/views/home')))
const AboutComponent = SuspenseComponent(lazy(() => import(/* webpackChunkName: 'about' */'@/views/about')))

export default [
  {
    component: BasicLayout,
    routes: [
      {
        path: '/',
        exact: true,
        render: () => <Redirect to="/home"/>
      },
      {
        path: '/home',
        component: Home,
        extra: true
      },
      {
        path: '/about',
        component: AboutComponent,
        extra: true
      }
    ]
  }
]
