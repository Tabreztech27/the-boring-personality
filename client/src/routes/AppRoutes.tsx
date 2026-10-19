import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import About from '../pages/About'
import Categories from '../pages/Categories'
import GroomingPage from '../categoriesComponents/grooming/Groomingpage'
import MindsetPage from '../categoriesComponents/mindset/mindset'
import MindsetGuideDetail from '../categoriesComponents/mindset/MindsetGuideDetail'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/grooming" element={<GroomingPage />} />
      <Route path="/mindset" element={<MindsetPage />} />
      <Route path="/mindset/:guideSlug" element={<MindsetGuideDetail />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default AppRoutes