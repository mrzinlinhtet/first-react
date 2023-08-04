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
    <div className="container">
      <Nav />
      <div className="midContainer">
        <SideBar />
        <List name={nameList} age={22} />
        <Main />
      </div>
      <Footer />
    </div>
  );
};

export default App;
