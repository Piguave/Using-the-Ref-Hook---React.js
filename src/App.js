import NavbarKruger from "./components/NavbarKruger";
import InputEmoji from "./components/InputEmoji";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
function App() {

  return (
    <>
      <NavbarKruger />
      <Container className="conetenedor justify-content-center">
        <InputEmoji />
      </Container>
      <Footer />
    </>
  );
}

export default App;