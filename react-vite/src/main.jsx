import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Entry from './EntryPage.jsx'
/*import App from './App.jsx'
import AskAI from './geminiAI.jsx'
import Ai from './Ai2.jsx'
import ModelLister from './models.jsx'
import Info from './info.jsx'
import Connect from './connectInfo.jsx'*/
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Entry />
  </StrictMode>,
)
