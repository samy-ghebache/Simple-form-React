import "./pop-up-style.css";
export default function Model({ isVisible, errMsg = null }) {
  if (isVisible) {
    return (
      <div class="master-container">
        <div class="phone-container">
          <h2
            style={{
              backgroundColor: "white",
              color: errMsg == null ? "green" : "red",
              padding: "10px",
            }}
          >
            {errMsg == null ? "Form Submitted Successfully" : errMsg}
          </h2>
        </div>
      </div>
    );
  }
  return <></>;
}
