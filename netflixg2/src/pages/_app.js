import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { SSRProvider } from '@react-aria/ssr'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </SSRProvider>)
}
