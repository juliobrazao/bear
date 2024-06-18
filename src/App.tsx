import Dialog from "./components/Dialog";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import BandForm from "./components/BandForm";
import BandTable from "./components/BandTable";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar title={t("main")} />
      <Container>
        <BandTable />
      </Container>
      <Dialog title="Add Band" content={<BandForm />} />
    </>
  );
}
