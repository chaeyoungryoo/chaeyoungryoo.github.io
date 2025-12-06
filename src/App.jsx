import Header from '@components/Header'
import Projects from '@components/Projects'
import About from '@components/About'
import Contact from '@components/Contact'
import PageStyle from './PageStyle'

function App() {
  return (
    <PageStyle className="page">
      <Header />

      <main className="main">
        <div className="main-box">
          <About />
          <Projects />
          <Contact />
        </div>
      </main>
    </PageStyle>
  )
}

export default App
