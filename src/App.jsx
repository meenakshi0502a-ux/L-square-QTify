import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <Section
        title="Top Albums"
        endpoint="https://qtify-backend.labs.crio.do/albums/top"
      />

      <Section
        title="New Albums"
        endpoint="https://qtify-backend.labs.crio.do/albums/new"
      />

      <Section
        title="Songs"
        endpoint="https://qtify-backend.labs.crio.do/songs"
        type="songs"
      />
    </>
  );
}

export default App;