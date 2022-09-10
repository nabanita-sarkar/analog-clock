function getDegree(val) {
  return (360 / 60) * val - 90;
}

export function setSecond() {
  const secEl = document.getElementById("sec");
  const minEl = document.getElementById("min");
  const hourEl = document.getElementById("hour");

  setInterval(() => {
    const date = new Date();
    const sec = date.getSeconds();
    const min = date.getMinutes();
    const hour = date.getHours() > 11 ? date.getHours() - 12 : date.getHours();

    secEl.style.transform = `rotateZ(${getDegree(sec)}deg)`;

    const incrementPerSecForMin = sec * (6 / 60); // minute progresses 6deg per every min
    minEl.style.transform = `rotateZ(${
      getDegree(min) + incrementPerSecForMin
    }deg)`;

    const incrementPerSecForHour = (min * 60 + sec) * (6 / 3600); // hour progresses 6deg per every hour
    hourEl.style.transform = `rotateZ(${
      getDegree(hour * 5) + incrementPerSecForHour
    }deg)`;
  }, 1 * 1000);
}

export function showTicks() {
  const clock = document.getElementById("clock");

  const segments = 60;
  Array.from(Array(segments).keys()).forEach((val) => {
    const deg = val * (360 / segments);
    const radian = deg * (Math.PI / 180);
    const is5th = val % 5 === 0;

    clock.insertAdjacentHTML(
      "beforeend",
      `<div class="tick" style="
			left: calc(50% - ${is5th ? 1 : 0.5}px + ${100 * Math.sin(radian)}px );
			top: calc(50% - ${is5th ? 6 : 2.5}px + ${100 * Math.cos(radian)}px );
			rotate: ${360 - deg}deg;
			"
			></div>`
    );
  });
}
