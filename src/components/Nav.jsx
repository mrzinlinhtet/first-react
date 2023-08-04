const Nav = () => {
  const menu = ["Home", "Contact", "About", "Service"];

  const style = {
    headerStyle: {
      color: "red",
      backgroundColor: "black",
      padding: "10px",
    },
    menuStyle: {
        color: "red",
    }
  };
  return (
    <div className="nav">
      <div className="">
        <h3 style={style.headerStyle}>MMSIT</h3>
      </div>
      <ul className="menu" style={style.menuStyle}>
        {menu.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
