import { createBrowserRouter, Navigate } from 'react-router-dom'
import { lazy } from 'react'
import MainLayout from './layouts/MainLayout.jsx'
import LoadingPage from '../pages/LoadingPage.jsx'
import NotFoundPage from '../pages/NotFoundPage.jsx'

const HomePage = lazy(() => import('../pages/HomePage.jsx'))
const TripsPage = lazy(() => import('../pages/TripsPage.jsx'))
const ClassesPage = lazy(() => import('../pages/ClassesPage.jsx'))
const StayPage = lazy(() => import('../pages/StayPage.jsx'))
const BuildPage = lazy(() => import('../pages/BuildPage.jsx'))
const FaqPage = lazy(() => import('../pages/FaqPage.jsx'))
const ContactPage = lazy(() => import('../pages/ContactPage.jsx'))
const ReviewsPage = lazy(() => import('../pages/ReviewPage.jsx'))
const WavesPage = lazy(() => import('../pages/waves/Waves.jsx'))
const BlogPage = lazy(() => import('../pages/BlogPage.jsx'))
const BlogPostPage = lazy(() => import('../pages/blog/BlogPostPage.jsx'))

const SITE_ROUTES = [
  { path: 'home', element: <HomePage /> },
  { path: 'trips', element: <TripsPage /> },
  { path: 'trips/:slug', element: <Navigate to="/build" replace /> },
  { path: 'classes', element: <ClassesPage /> },
  { path: 'stay', element: <StayPage /> },
  { path: 'build', element: <BuildPage /> },
  { path: 'blog', element: <BlogPage /> },
  { path: 'blog/:slug', element: <BlogPostPage /> },
  { path: 'faq', element: <FaqPage /> },
  { path: 'contact', element: <ContactPage /> },
  { path: 'reviews', element: <ReviewsPage /> },
  { path: 'waves', element: <WavesPage /> },
]

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, element: <Navigate to="/loading" replace state={{ redirectTo: '/home' }} /> },
      { path: 'loading', element: <LoadingPage /> },
      { path: 'intro', element: <Navigate to="/loading" replace state={{ redirectTo: '/home' }} /> },
      { path: 'esp', element: <Navigate to="/loading" replace state={{ redirectTo: '/esp/home' }} /> },
      { path: 'fr', element: <Navigate to="/loading" replace state={{ redirectTo: '/fr/home' }} /> },
      {
        element: <MainLayout />,
        children: [
          ...SITE_ROUTES,
          { path: 'esp', children: SITE_ROUTES.map((route) => ({ ...route })) },
          { path: 'fr', children: SITE_ROUTES.map((route) => ({ ...route })) },
          { path: '*', element: <NotFoundPage /> },
        ],
      },
    ],
  },
])
