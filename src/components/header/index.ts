import type { App } from 'vue'
import Header from './src/header'

Header.install = function (app: App) {
  app.component(Header.name, Header)
}

export { Header }

export default {
  title: 'Header 顶栏容器',
  category: '布局',
  status: '100%',
  install(app: App): void {
    app.use(Header as any)
  }
}
