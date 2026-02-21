// No AI was used in the creation of this project.
// Note: The name "EightBall.tsx," among others, reflect an earlier state of this
//       project. The current project has nothing to do with Magic 8-Balls.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
