import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
export default function App() { return <ThemeProvider><BrowserRouter><Layout><Routes><Route path="/" element={<Home/>}/><Route path="/portfolio" element={<Portfolio/>}/><Route path="*" element={<Navigate to="/" replace/>}/></Routes></Layout></BrowserRouter></ThemeProvider> }
