import Header from "./components/Header/NewTodoForm";
import Footer from "./components/Footer";
import { TodoProvider } from "./contexts/TodoContext";
import Content  from "./components/Content";

function App() {
  return (
    <>
      <TodoProvider>
        <section className="todoapp">
          <Header></Header>
          <Content></Content>
        </section>
        <Footer></Footer>
      </TodoProvider>
    </>
  );
}

export default App;
