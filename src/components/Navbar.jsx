import { NavbarThemeOptions } from "./NavbarThemeOptions";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container px-5">
        <a className="navbar-brand text-white-50" href="/">
          Click & Fix
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseMenu"
          aria-controls="collapseMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapseMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="home" href="/">
                Página Principal
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/helloimbyron/click-and-fix"
                target="_blank"
                rel="noreferrer"
              >
                Código en GitHub
              </a>
            </li>
          </ul>

          <NavbarThemeOptions />
        </div>
      </div>
    </nav>
  );
}
