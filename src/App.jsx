import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/admin/ProtectedRoute'
import './styles/admin.css'
import './styles/responsive.css'
import './App.css'

// Lazy load main pages
const Home = lazy(() => import('./pages/Home/Home'))
const About = lazy(() => import('./pages/About/About'))
const Contact = lazy(() => import('./pages/Contact/Contact'))
const AllProduct = lazy(() => import('./pages/Product/AllProduct'))
const SubProduct = lazy(() => import('./pages/Product/SubProduct')) 

// Lazy load admin pages
const AdminLayout = lazy(() => import('./components/admin/AdminLayout'))
const AdminDashboard = lazy(() => import('./pages/admin/Dashboard'))
const EventsManager = lazy(() => import('./pages/admin/EventsManager'))
const ProductsManager = lazy(() => import('./pages/admin/ProductsManager'))
const AdminLogin = lazy(() => import('./pages/admin/Login'))

// Public Components
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const PublicLayout = () => (
    <>
        <Header />
        <main className="main-content">
            <Outlet />
        </main>
        <Footer />
    </>
)

function App() {
    return (
        <AuthProvider>
            <Router basename={process.env.NODE_ENV === 'production' ? '/champagne' : '/'}>
                <Suspense fallback={
                    <div className="loading-screen">
                        <div className="loading-spinner"></div>
                    </div>
                }>
                    <Routes>
                        {/* Admin Routes */}
                        <Route path="/admin">
                            <Route path="login" element={<AdminLogin />} />
                            <Route element={
                                <ProtectedRoute>
                                    <AdminLayout />
                                </ProtectedRoute>
                            }>
                                <Route index element={<AdminDashboard />} />
                                <Route path="dashboard" element={<AdminDashboard />} />
                                <Route path="products" element={<ProductsManager />} />
                                <Route path="events" element={<EventsManager />} />
                            </Route>
                        </Route>

                        {/* Public Routes */}
                        <Route path="/" element={<PublicLayout />}>
                            <Route index element={<Home />} />
                            <Route path="about" element={<About />} />
                            <Route path="contact" element={<Contact />} />
                            <Route path="products" element={<AllProduct />} />
                            <Route path="products/:id" element={<SubProduct />} />
                        </Route>

                        {/* Catch all route */}
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </Suspense>
            </Router>
        </AuthProvider>
    )
}

export default App
