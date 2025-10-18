import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Layout from './Layout'
function App() {

  return (
    <>
      <div className='min-h-screen bg-center bg-cover bg-[url(assets/bg-splash.png)] relative flex justify-center items-center'>
        <Header/>
        <Layout/>
        <Footer/>
      </div>
    </>
  )
}

export default App
