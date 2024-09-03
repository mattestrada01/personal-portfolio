import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, 
Hero, Navbar, Tech, StarsCanvas, 
Projects } from './components';


const App = () => {
  return (
    <BrowserRouter> 
      <div className="relative z-0 bg-primary">
        <div className="mt-6 mb-10 bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Experience />
        <Projects />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
