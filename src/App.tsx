import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import ProductTabs from './components/ProductTabs'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import UseCases from './components/UseCases'
import CompanyRegistration from './components/CompanyRegistration'
import { Component as InfiniteGrid } from './components/ui/the-infinite-grid'

const path = window.location.pathname
const isDemo = path === '/demo'
const isCompanyRegister = path === '/cadastro-empresa' || path === '/registro-empresa'

function App() {
  if (isDemo) {
    return <InfiniteGrid />
  }

  if (isCompanyRegister) {
    return <CompanyRegistration />
  }

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <UseCases />
      <ProductTabs />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
