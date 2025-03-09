
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
const goBackLink = document.querySelector("a");
const existingContainer = document.querySelector(".input-container");


if (!existingContainer) {
  const container = document.createElement("div");
  container.classList.add("input-container");
  Object.assign(container.style, {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f8f9fc",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    marginTop: "20px"
  });

  goBackLink.insertAdjacentElement("afterend", container);
  container.append(nameInput, nameOutput.parentElement);
}

Object.assign(nameInput.style, {
  padding: "10px",
  border: "1px solid #dce0e4",
  borderRadius: "5px",
  width: "100%",
  fontSize: "16px",
  boxSizing: "border-box",
  marginBottom: "15px"
});


nameInput.addEventListener("input", (event) => {
  const trimmedValue = event.target.value.trim();
  nameOutput.textContent = trimmedValue || "Anonymous";
});
