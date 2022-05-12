import type { App } from 'vue'
import Main from './src/main'

Main.install = function (app: App) {
  app.component(Main.name, Main)
}

export { Main }

export default {
  title: 'Main 主要区域容器',
  category: '布局',
  status: '100%',
  install(app: App): void {
    app.use(Main as any)
  }
}
