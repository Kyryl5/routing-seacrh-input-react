import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ErrorBoundary from './Components/ErrorBoundary'
import MainPage from './Components/MainPage'
import Lesson from './Components/Lesson'
export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/routing-seacrh-input-react" element={<MainPage />} />
          <Route
            path="/routing-seacrh-input-react/lessons/:lessonName"
            element={<Lesson />}
          />
        </Routes>
      </Router>
    </ErrorBoundary>
  )
}
