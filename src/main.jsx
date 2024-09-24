import {RouterProvider} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import {route} from './Routes/Routes.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={route}>
    <App />
  </RouterProvider>,
)
