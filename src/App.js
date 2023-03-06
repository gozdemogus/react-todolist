import Header from "./components/Header/NewTodoForm";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <section className="todoapp">
        <Header></Header>
        <Content></Content>
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;
