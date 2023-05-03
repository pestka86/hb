function Modal({ modalImg, modalDes, handleModal }) {
  return (
    <div className="modal" onClick={handleModal}>
      <img className="mod_img" src={modalImg} alt="modal" />
      <p id="mod_des">{modalDes}</p>
    </div>
  );
}

export default Modal;
