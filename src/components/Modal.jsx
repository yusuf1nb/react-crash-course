import "./Modal.css";

function Modal({ title, onModalDelete }) {
  return (
    <>
      <div className="modal">
        <p className="modal__title">{title}</p>
        <div className="modal__buttons">
          <button
            className="btn btn__cancel"
            onClick={onModalDelete}
          >
            Cancel
          </button>
          <button className="btn" onClick={onModalDelete}>
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </>
  );
}

export default Modal;
