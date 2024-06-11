import { Cassette, PlusCircle, Translate } from "react-bootstrap-icons";
import { useDialogStore } from "../store/dialog";

interface NavbarProps {
  title?: string;
}

export default function Navbar({ title = "Generic" }: NavbarProps) {
  const { show, setShow } = useDialogStore();

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand">
            <Cassette color="white" size={25} />
            &nbsp;&nbsp;
            {title}
          </span>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0"></ul>
            <div className="d-flex my-2 my-lg-0">
              <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <span
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                    onClick={() => setShow(!show)}
                  >
                    <PlusCircle size={16} />
                    &nbsp; Add Band
                  </span>
                </li>
                <li className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    id="dropdownId"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ cursor: "pointer" }}
                  >
                    <Translate size={16} />
                    &nbsp; Language
                  </span>
                  <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <span className="dropdown-item">Portuguese</span>
                    <span className="dropdown-item">English</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
