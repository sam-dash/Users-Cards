import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'

const root = document.getElementById('root');

const container = createRoot(root as HTMLElement);

container.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
