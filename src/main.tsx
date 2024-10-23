import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

//layouts
import ChatLayout from '@layouts/chat.tsx'

//context
import { ThemeProvider } from '@contexts/theme.context'

//slick
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

//component
import { ConfirmProvider } from 'material-ui-confirm'

//redux
import { Provider } from 'react-redux'
import store from '@redux/store.ts'

//context
// import AppSocketProvider from '@contexts/socket.context.tsx'

//i18n
import '@i18n/i18n.ts'
// import AppSocketProvider from '@contexts/socket.context.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider>
        <ConfirmProvider
          defaultOptions={{
            allowClose: true,
            dialogProps: { maxWidth: 'xs' },
            cancellationButtonProps: { color: 'inherit' },
            confirmationButtonProps: { color: 'secondary' }
          }}
        >
          {/* <AppSocketProvider> */}
          <ChatLayout>
            <App />
          </ChatLayout>
          {/* </AppSocketProvider> */}
        </ConfirmProvider>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
)
