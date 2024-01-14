import { createRoot } from 'react-dom/client'
import './index.css'
import { App as Canvas } from './Canvas'
import Overlay from './Overlay'

createRoot(document.getElementById('root')).render(
  <>
    <Canvas />
    <Overlay />
  </>
)

