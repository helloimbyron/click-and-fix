// Components:
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

// Context:
import { FormProvider } from "./context/FormContext";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <FormProvider>
        <Main />
      </FormProvider>
      <Footer />
    </>
  );
}

export default App;
