import type { App } from 'vue'
import Container from './src/container'

Container.install = function (app: App) {
  app.component(Container.name, Container)
}

export { Container }

export default {
  title: 'Container 外层容器',
  category: '布局',
  status: '100%',
  install(app: App): void {
    app.use(Container as any)
  }
}
