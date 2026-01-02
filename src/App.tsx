import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles.css'
import { AppHeader } from './components/appHeader'
import { AppNav } from './components/AppNav'

// Main/home page
// Use components for header and nav
// useState and useEffect for nav filters/search terms
// Contact API services
// Save country data to array in Context API
// Open individual country pages with React Router
// Deploy a static web application

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppHeader />
      <AppNav />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
