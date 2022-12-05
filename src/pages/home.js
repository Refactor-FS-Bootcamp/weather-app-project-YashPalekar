import { useContext } from "react";
import Header from "../components/header";
import Modal from "../components/modal";
import { MyContext } from "../context/app-context";

const Home = () => {
  const context = useContext(MyContext);
  return (
    <>
      <div className="wrapper-column">
        <Header title="My favorite cities" />
        <p className="description">No Cities Selected yet.</p>
        <Modal></Modal>
      </div>
    </>
  );
};

export default Home;
