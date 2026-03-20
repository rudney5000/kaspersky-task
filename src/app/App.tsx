import '@/shared/styles/index.scss'
import { Provider } from 'react-redux'
import { store } from '@/app/providers/store.ts'
import { AppRouter } from '@/app/router/AppRouter.tsx'

export const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)
