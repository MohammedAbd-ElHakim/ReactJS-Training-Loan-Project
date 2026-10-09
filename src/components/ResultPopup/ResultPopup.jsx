function ResultPopup({ type, message, onClose }) {
  return (
    <div
      onClick={(event) => {
        // نغلق الـ popup فقط إذا ضغط المستخدم خارج محتوى النافذة.
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div>
        <h2>{type === "success" ? "Success" : "Error"}</h2>

        <p>{message}</p>

        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default ResultPopup;
