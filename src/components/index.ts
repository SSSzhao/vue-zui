import type { App } from 'vue'

import ContainerInstall, { Container } from './container'
import HeaderInstall, { Header } from './header'
import MainInstall, { Main } from './main'
import FooterInstall, { Footer } from './footer'
import AsideInstall, { Aside } from './aside'

const installs = [
  ContainerInstall,
  HeaderInstall,
  MainInstall,
  FooterInstall,
  AsideInstall
]

export {
  Container,
  Header,
  Main,
  Footer,
  Aside
}

export default {
  install (app: App) {
    installs.forEach(install => app.use(install))
  }
}
