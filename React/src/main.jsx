import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ChatComponent from "./ChatComponent.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<App />*/}
      <ChatComponent/>
  </StrictMode>,
)
