import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/cjs/styles/prism";

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter
        style={materialOceanic}
        language={language}
        children={value}
      />
    );
  },
};

const markdown = `
~~~html
<div>
  <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
    <div className="container-fluid">
      <a className="navbar-brand pe-3" href="#">
        <img className="img-fluid" src="/logo.svg" width="28" />
        <span className="ms-3 fw-bold">Navbar</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#simpleNavDropdown"
        aria-controls="simpleNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="simpleNavDropdown">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link fw-bold" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-bold" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-bold" href="#">
              Pricing
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Docs
            </a>
            <ul
              className="dropdown-menu border-0 shadow"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <a className="dropdown-item px-3" href="#">
                  Get Started
                </a>
              </li>
              <li>
                <a className="dropdown-item px-3" href="#">
                  Installation
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item px-3" href="#">
                  Components
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="navbar-nav justify-content-end">
          <li className="nav-item pe-3">
            <a className="nav-link text-primary fw-bold" href="#">
              Login
            </a>
          </li>
          <li className="nav-item ">
            <button className="btn btn-outline-primary shadow-sm">
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
~~~
`;

function SimpleNavDropdown() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
        <div className="container-fluid">
          <a className="navbar-brand pe-3" href="#">
            <img className="img-fluid" src="/logo.svg" width="28" />
            <span className="ms-3 fw-bold">Navbar</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#simpleNavDropdown"
            aria-controls="simpleNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="simpleNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link fw-bold" aria-current="page" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">
                  Link
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">
                  Pricing
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Docs
                </a>
                <ul
                  className="dropdown-menu border-0 shadow"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className="dropdown-item px-3" href="#">
                      Get Started
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item px-3" href="#">
                      Installation
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item px-3" href="#">
                      Components
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav justify-content-end">
              <li className="nav-item pe-3">
                <a className="nav-link text-primary fw-bold" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item ">
                <button className="btn btn-outline-primary shadow-sm">
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export function SimpleNavDropdownView() {
  return (
    <>
      <SimpleNavDropdown />
    </>
  );
}

export function SimpleNavDropdownCode() {
  return (
    <>
      <ReactMarkdown renderers={renderers} children={markdown} />
    </>
  );
}
