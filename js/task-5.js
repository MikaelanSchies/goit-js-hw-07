function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

document.addEventListener("DOMContentLoaded", () => {
  const changeColorButton = document.querySelector(".change-color");
  const colorSpan = document.querySelector(".color");

  changeColorButton.addEventListener("click", () => {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
    colorSpan.textContent = randomColor;
  });

  const style = document.createElement("style");
  style.textContent = `
    body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      height: 100vh;
      background-color: #f5f5f5;
      font-family: Arial, sans-serif;
      margin: 0;
      padding-top: 50px;
    }
  `;
  document.head.appendChild(style);

});

