import Footer from "./components/Footer";
import Main from "./components/Main";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import "./App.css";
import List from "./components/List";
// import style from "./components/App.module.css"

const App = () => {
  const nameList = ["John", "Jane", "Mary"];

  return (
    <>
      <List name={nameList[0]} age={22} isDone={true} />
      <List name={nameList[1]} age={22} isDone={false} />
      <List name={nameList[2]} age={22} isDone={false} />
      <div className="container">
        <Nav />
        <div className="midContainer">
          <SideBar />
          <Main />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
