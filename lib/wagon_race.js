let q = 0;
let p = 0;

document.addEventListener("keyup", (event) => {
  const tdOfPlayer1 = document.querySelectorAll("#player1_race td");
  const tdOfPlayer2 = document.querySelectorAll("#player2_race td");
  if (q === tdOfPlayer1.length - 2) {
    alert("Christoph siegt");
  } else if (p === tdOfPlayer2.length - 2) {
    alert("Deniz siegt!");
  } else if (q < tdOfPlayer1.length || p < tdOfPlayer2.length) {
    if (event.key === "q") {
      const activeWagon = document.querySelector("#player1_race .active");
      activeWagon.nextElementSibling.classList.add("active");
      activeWagon.classList.remove("active");
      q += 1;
      console.log("1");
    } else if (event.key === "p") {
      const activeWagon = document.querySelector("#player2_race .active");
      activeWagon.nextElementSibling.classList.add("active");
      activeWagon.classList.remove("active");
      console.log("2");
      p += 1;
    }
  }
});
