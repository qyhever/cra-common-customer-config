import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import store from './store'
import RouterConfig from './router'
import { history } from '@/utils/history'

import './assets/styles/index.less'

import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <RouterConfig></RouterConfig>
        </ConnectedRouter>
      </Provider>
    </ConfigProvider>
  )
}

export default App
