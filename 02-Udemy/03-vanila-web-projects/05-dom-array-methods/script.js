const overviewList = document.querySelector(".list-mi");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");
const calculateContainer = document.querySelector(".calculate");
const totalWealthContainer = document.getElementById("totalWealth");
/*DataBase */

let data = [];

async function generatePerson(num = 3) {
  const responce = await fetch(
    `https://randomuser.me/api/?page=1&results=${num}&inc=name`
  );
  const { results } = await responce.json();

  results.forEach((item) => {
    // Generate a random number between 10,000 and 1,000,000
    const min = 100;
    const max = 800000;

    // Generate a random exponent between 0 and some maximum value
    const maxExponent = Math.log10(max);
    const minExponent = Math.log10(min);
    const randomExponent =
      Math.random() * (maxExponent - minExponent) + minExponent;

    // Calculate the wealth value based on the exponent
    const wealth = Math.pow(10, randomExponent);
    
    const fullName = `${item.name.first} ${item.name.last}`;
    data.push({
      persone: fullName,
      wealth: wealth,
    });
  });
  showPersone();
}
function foramteNumber(number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(number);
}
function showPersone(dataPersone = data) {
  let liTag = "";
  dataPersone.forEach((item) => {
    const formattedNumber = foramteNumber(item.wealth);
    let li = `<li class="elem-person elem-flex">
                            <strong class="name">${item.persone}</strong>
                            <span class="wealth">${formattedNumber}</span>
                        </li>`;
    liTag += li;
  });
  overviewList.innerHTML = liTag;
   calculateContainer.classList.add("hidden");
}
function doubleMoney() {
  data = data.map((item) => {
    return { ...item, wealth: item.wealth * 2 };
  });

  showPersone();
}
function showMillionaires() {
  data = data.filter((item) => {
    return item.wealth > 1000000;
  });

  showPersone();
}
function sortByMillonaires() {
  data.sort((a, b) => {
    return b.wealth - a.wealth;
  });
  console.log(data);
  showPersone();
}
function calculateTotalWealth() {
  const totalWealth = data.reduce((p, c) => {
    return p + c.wealth;
  }, 0);

  calculateContainer.classList.remove("hidden");

  totalWealthContainer.textContent = foramteNumber(totalWealth);
  // Check if welathEl already exists in DOM
}
addUserBtn.addEventListener("click", generatePerson.bind(null, 1));
doubleBtn.addEventListener("click", doubleMoney);
showMillionairesBtn.addEventListener("click", showMillionaires);
sortBtn.addEventListener("click", sortByMillonaires);
calculateWealthBtn.addEventListener("click", calculateTotalWealth);
/*Show persons */
generatePerson();
