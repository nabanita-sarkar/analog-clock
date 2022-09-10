import "./style.css";
import { setSecond, showTicks } from "./clock";

document.querySelector("#app").innerHTML = `
  <div>
    <div class="clock" id="clock">
      <div id="sec"></div>
      <div id="min"></div>
      <div id="hour"></div>
    </div>
  </div>
`;

setSecond();
showTicks();
