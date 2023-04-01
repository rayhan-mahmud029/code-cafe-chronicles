import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import BlogContainer from './components/BlogContainer/BlogContainer'
import QABlog from './components/QABlog/QABlog'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <hr />
      <BlogContainer></BlogContainer>
      <hr />
      <QABlog></QABlog>
    </div>
  )
}

export default App
