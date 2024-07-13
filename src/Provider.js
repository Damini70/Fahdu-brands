'use client'

import  store  from './redux/store'
import { Provider} from 'react-redux';
// import {Providers} from '@/Redux/provider';

export function ReduxProvider({children}) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}