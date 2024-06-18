import { Cassette, PlusCircle, Translate } from "react-bootstrap-icons";
import { useDialogStore } from "../store/dialog";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  title?: string;
}

export default function Navbar({ title = "Generic" }: NavbarProps) {
  const { t, i18n } = useTranslation();
  const { show, setShow } = useDialogStore();

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand">
            <Cassette color="white" size={25} />
            &nbsp;&nbsp;
            {t("main.title")}
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
                    &nbsp; {t("main.add_band")}
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
                    &nbsp; {t("main.language.title")}
                  </span>
                  <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <span
                      className="dropdown-item"
                      onClick={() => i18n.changeLanguage("pt")}
                    >
                      {t("main.language.portuguese")}
                    </span>
                    <span
                      className="dropdown-item"
                      onClick={() => i18n.changeLanguage("en")}
                    >
                      {t("main.language.english")}
                    </span>
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
