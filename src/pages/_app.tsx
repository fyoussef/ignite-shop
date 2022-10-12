import { AppProps } from "next/app"
import { Logo } from "../components/Logo"
import { globalStyles } from "../styles/global"
import { Container, Header } from "../styles/pages/app"

globalStyles()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>

      <Header>
        <Logo />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
