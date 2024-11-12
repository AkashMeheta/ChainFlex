import './App.css'
import './index.css';
import { Outlet } from 'react-router-dom';
import { Header, Footer, Container } from "./components/index";

function App() {

  return (
    <>
      <Container>
        <Header></Header>
        <main>
        <Outlet />
        </main>
        <Footer></Footer>
      </Container>
    </>
  )
}

export default App


