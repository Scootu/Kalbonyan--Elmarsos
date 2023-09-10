const overviewList = document.querySelector(".list-mi");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");

/*DataBase */

let data = [];

async function generatePerson(num = 3) {
  const responce = await fetch(
    `https://randomuser.me/api/?page=1&results=${num}&inc=name`
  );
  const { results } = await responce.json();

  results.forEach((item) => {
    // Generate a random number between 10,000 and 1,000,000
    const min = 1000;
    const max = 1000000;
    const wealth = Math.floor(Math.random() * (max - min + 1)) + min;
    const fullName = `${item.name.first} ${item.name.last}`;
    data.push({
      persone: fullName,
      wealth: wealth,
    });
  });
  showPersone();
}
function showPersone() {
  let liTag = "";
  data.forEach((item) => {
    const formattedNumber = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(item.wealth);
    let li = `<li class="elem-person elem-flex">
                            <strong class="name">${item.persone}</strong>
                            <span class="wealth">${formattedNumber}</span>
                        </li>`;
    liTag += li;
  });
  overviewList.innerHTML = liTag;
}
function doubleMoney() {
  const DoubledData = data.map((item) => {
    return { ...item, wealth: item.wealth * 2 };
  });
  data = DoubledData;
  console.log(data);
  showPersone();
}
addUserBtn.addEventListener("click", generatePerson.bind(null, 1));
doubleBtn.addEventListener("click", doubleMoney);
/*Show persons */
generatePerson();
