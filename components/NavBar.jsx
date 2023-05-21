import "./styling/NavBar.css";

export default function NavBar() {
  return (
    <div className="navBar">
      <div className="logo">
        <a href="/landingPage">
          <img src="/logo.png"></img>
        </a>
      </div>
      <div className="moto">Chat Through History</div>
    </div>
  );
}
