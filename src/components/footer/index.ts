import type { App } from 'vue'
import Footer from './src/footer'

Footer.install = function (app: App) {
  app.component(Footer.name, Footer)
}

export { Footer }

export default {
  title: 'Header 底栏容器',
  category: '布局',
  status: '100%',
  install(app: App): void {
    app.use(Footer as any)
  }
}
