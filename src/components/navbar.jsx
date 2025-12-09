import { useEffect, useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  // Toggle dark class on body
  useEffect(() => {
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow-sm px-3 py-2">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          Chrispin
        </a>

        <ul className="navbar-nav ms-auto gap-3 align-items-center">
          {["about", "projects", "contact"].map((section) => (
            <li className="nav-item" key={section}>
              <Link
                className="nav-link"
                to={section}
                smooth={true}
                duration={500}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}

          <li className="nav-item">
            <button
              className="btn btn-outline-dark px-3 py-1"
              onClick={() => setDark(!dark)}
            >
              {dark ? "Light" : "Dark"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
