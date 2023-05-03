import { useState } from "react";
import Heart from "../../images/2764.jpg";
import Down from "../../images/down.png";
import Modal from "../Modal";

function HornedBeast({ title, imageUrl, description }) {
  const [votes, setVotes] = useState(0);
  const incrementVotes = () => setVotes(votes + 1);
  let decrementVotes = () => setVotes(votes - 1);
  if (votes <= 0) {
    decrementVotes = () => setVotes(0);
  }

  function resetVotes() {
    setVotes(0);
  }
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const [modalDes, setModalDes] = useState("");

  function handleModal(imgParam, desParam) {
    setShowModal(!showModal);
    setModalImg(imgParam);
    setModalDes(desParam);
  }

  return (
    <div className="beast">
      <h2>{title}</h2>
      <img
        onClick={() => handleModal(imageUrl, description)}
        id="beasts"
        src={imageUrl}
        alt={description}
        title={title}
      />
      {showModal && (
        <Modal
          modalImg={modalImg}
          modalDes={modalDes}
          handleModal={handleModal}
        />
      )}
      <p>{description}</p>
      <p>
        <img onClick={incrementVotes} id="heart" src={Heart} alt="heart" />{" "}
        {votes}
        <img onClick={decrementVotes} id="down" src={Down} alt="sad" />
      </p>
      <button onClick={resetVotes}>RESET</button>
    </div>
  );
}

export default HornedBeast;
