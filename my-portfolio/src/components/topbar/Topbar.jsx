import "./topbar.scss";
// import { Person, Mail } from "@material-ui/icons";
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={`topbar ${menuOpen ? "active" : ""}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            asasa
          </a>
          <div className="itemContainer">
            {/* <Person className="icon" />
            <span>+91 1234567890</span> */}
            
          </div>
        </div>
        <div className="right">
          <div className="humburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
