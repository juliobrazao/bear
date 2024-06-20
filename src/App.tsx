import Dialog from "./components/Dialog";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import BandForm from "./components/BandForm";
import BandTable from "./components/BandTable";
import { useTranslation } from "react-i18next";
import DateRangePicker from "./components/DateRangePicker";

export default function App() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar title={t("main")} />
      <Container>
        {/* <BandTable /> */}
        <DateRangePicker />
      </Container>
      <Dialog title="Add Band" content={<BandForm />} />
    </>
  );
}
