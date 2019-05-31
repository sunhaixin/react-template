import React from 'react'

const IndexComponent = React.lazy(() => import('@view'))
export const Index = props => (
  <React.Suspense fallback={null}>
    <IndexComponent {...props} />
  </React.Suspense>
)

// 错误页面
const ErrorComponent = React.lazy(() => import('@view/Error'))
export const Error = props => (
  <React.Suspense fallback={null}>
    <ErrorComponent {...props} />
  </React.Suspense>
)

// 主页
const HomeComponent = React.lazy(() => import('@view/Home'))
export const Home = props => (
  <React.Suspense fallback={null}>
    <HomeComponent {...props} />
  </React.Suspense>
)
