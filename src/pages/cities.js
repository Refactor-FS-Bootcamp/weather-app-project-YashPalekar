import { useContext } from "react";
import Card from "../components/card";
import Modal from "../components/modal";
import { MyContext } from "../context/app-context";
import CityList from "../helper/cities";

const Cities = () => {
  const openModal = () => {
    document.querySelector(".modal").showModal();
  };

  const showDetails = (e) => {
    const card = document.querySelector(".big-card");
    card.style.display = "block";
    card.innerHTML = `<h2 class="card-header">${e.name}</h2>
    <div class="card-body">
    <p>${e.desc}</p>
    <h3>Temperature : ${e.temp}</h3>
    <h3>Humidity : ${e.humidity}</h3>
    </div>`;
  };

  const context = useContext(MyContext);
  return (
    <div className="main-body">
      <Card customClass="card">
        <div
          onClick={openModal}
          className="card-header"
          title="Click to add cities">
          Cities
          <i className="fa-solid fa-plus card-button open-modal"></i>
        </div>
        {CityList.map((e) => {
          if (context.selectedCities.includes(e.name))
            return (
              <div onClick={() => showDetails(e)} className="card-list">
                <h3>{e.name}</h3>
                <p>{e.temp}</p>
              </div>
            );
        })}
      </Card>

      <Card customClass="card big-card"></Card>

      <Modal />
    </div>
  );
};

export default Cities;
