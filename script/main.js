import * as shared from "../shared/shared.js";

window.onload = (e) => {
  console.log(`${shared.calculateRemaining}`);
  let outputPanel = document.getElementById("count-down-suji");
  outputPanel.innerText = `${shared.calculateRemaining()}`;
  if (shared.calculateRemaining() == 0) {
    window.location.href = "on_birthday/index.html"
  }
};