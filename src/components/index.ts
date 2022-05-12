import type { App } from 'vue'

import ContainerInstall, { Container } from './container'
import HeaderInstall, { Header } from './header'
import MainInstall, { Main } from './main'
import FooterInstall, { Footer } from './footer'
import AsideInstall, { Aside } from './aside'
import ButtonInstall, { Button } from './button'
import IconInstall, { Icon } from './icon'

const installs = [
  ContainerInstall,
  HeaderInstall,
  MainInstall,
  FooterInstall,
  AsideInstall,
  ButtonInstall,
  IconInstall
]

export { Container, Header, Main, Footer, Aside, Button, Icon }

export default {
  install(app: App) {
    installs.forEach(install => app.use(install))
  }
}
