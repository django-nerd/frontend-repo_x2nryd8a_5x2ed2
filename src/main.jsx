import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import SolutionsHome from './pages/SolutionsHome'
import SolutionsBusiness from './pages/SolutionsBusiness'
import Services from './pages/Services'
import CompanyAbout from './pages/CompanyAbout'
import CompanyGreen from './pages/CompanyGreen'
import CompanyPartners from './pages/CompanyPartners'
import Contact from './pages/Contact'
import Store from './pages/Store'
import Login from './pages/Login'
import Test from './Test'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}> 
          <Route path="/" element={<Home />} />
          <Route path="/solutions/home" element={<SolutionsHome />} />
          <Route path="/solutions/business" element={<SolutionsBusiness />} />
          <Route path="/services" element={<Services />} />
          <Route path="/company/about" element={<CompanyAbout />} />
          <Route path="/company/green" element={<CompanyGreen />} />
          <Route path="/company/partners" element={<CompanyPartners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<Store />} />
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<Test />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
