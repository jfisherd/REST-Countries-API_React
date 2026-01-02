import './styles.css'
import { AppHeader } from './components/appHeader'
import { AppNav } from './components/AppNav'
import { contactApi } from './services/apiServices'

// Main/home page
// Use components for header and nav
// useState and useEffect for nav filters/search terms
// useState and useEffect for light/dark mode toggle
// Contact API services
// Save country data to array in Context API, attempt to reduce prop drilling
// Open individual country pages with React Router
// Deploy a static web application

const countryArray = await contactApi() 
console.log(countryArray[0])

function App() {

  return (
    <>
      <AppHeader />
      <AppNav />
    </>
  )
}

export default App
