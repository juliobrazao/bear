import Dialog from "./components/Dialog";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import BandForm from "./components/BandForm";
import BandTable from "./components/BandTable";

export default function App() {
  return (
    <>
      <Navbar title="Band Storage" />
      <Container>
        <BandTable />
      </Container>
      <Dialog title="Add Band" content={<BandForm />} />
    </>
  );
}
