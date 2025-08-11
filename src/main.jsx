import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppProvider from './context/productContext.jsx'
import FilterContextProvider from './context/filter_context.jsx'
import CardProvider from './context/addcartContext.jsx'
import AppRegisterProvider from './context/registerUserContext.jsx'
import FilterNavProvider from './context/filterNavContext.jsx'



createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <AppProvider>
    <FilterContextProvider>
      <CardProvider>
        <AppRegisterProvider>
          <FilterNavProvider>
            <App />
          </FilterNavProvider>
        </AppRegisterProvider>
      </CardProvider>
    </FilterContextProvider>
  </AppProvider>
  // </StrictMode>

)
