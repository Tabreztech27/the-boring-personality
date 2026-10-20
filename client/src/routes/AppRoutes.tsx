import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import About from '../pages/About'
import Categories from '../pages/Categories'
import GroomingPage from '../categoriesComponents/grooming/Groomingpage'
<<<<<<< Updated upstream
import MindsetPage from '../categoriesComponents/mindset/mindset'
import MindsetGuideDetail from '../categoriesComponents/mindset/MindsetGuideDetail'
=======
import DressingStyleLandingPage, {
  OutfitIdeasPage,
  WardrobePlannerPage,
  BudgetFashionShoppingPage,
  OccasionBasedStylingPage,
} from '../categoriesComponents/DressingStyle'
>>>>>>> Stashed changes

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/grooming" element={<GroomingPage />} />
<<<<<<< Updated upstream
      <Route path="/mindset" element={<MindsetPage />} />
      <Route path="/mindset/:guideSlug" element={<MindsetGuideDetail />} />
=======

      {/* Dressing Style Section */}
      <Route path="/dressing-style" element={<DressingStyleLandingPage />} />
      <Route path="/dressing-style/outfit-ideas" element={<OutfitIdeasPage />} />
      <Route path="/dressing-style/wardrobe-planner" element={<WardrobePlannerPage />} />
      <Route path="/dressing-style/budget-shopping" element={<BudgetFashionShoppingPage />} />
      <Route path="/dressing-style/occasion-styling" element={<OccasionBasedStylingPage />} />

>>>>>>> Stashed changes
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default AppRoutes