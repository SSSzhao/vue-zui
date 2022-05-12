import type { App } from 'vue'
import Aside from './src/aside'

Aside.install = function (app: App) {
  app.component(Aside.name, Aside)
}

export { Aside }

export default {
  title: 'Header 侧边栏容器',
  category: '布局',
  status: '100%',
  install(app: App): void {
    app.use(Aside as any)
  }
}
