// const outherCoinCurrency = document.querySelector("");
const yourCurrency = document.getElementById("selctedYour");
const outherCurrency = document.getElementById("selectOuther");
const yourCoinValue = document.getElementById("number-your");
const outherCoinValue = document.getElementById("number-outher");
const exancheRate = document.getElementById("exchange-rate");

const btnChange = document.getElementById("save");
let changed = false;
let rate_fetched_data = undefined;

async function CurrencyList() {
  // const selctedCoin = selectOption.value ;
  const coin = yourCurrency.value.toUpperCase();
  const responce = await fetch(
    `https://v6.exchangerate-api.com/v6/40548a90a31b3d73cf032060/latest/${coin}`
  );
  const data = await responce.json();
  if (!responce.ok) {
    throw new Error("Coulde not fetch the data , check your internet!");
  }
  // base_code
  // conversion_rates
  const { conversion_rates } = data;

  rate_fetched_data = conversion_rates;
  changeOutherValue();
}

function changeOutherValue() {
  const coin = yourCurrency.value.toUpperCase();
  const outherCoin = outherCurrency.value.toUpperCase();

  let rateChange = 1;
  for (const key in rate_fetched_data) {
    if (key === outherCoin) {
      rateChange = rate_fetched_data[key];
      exancheRate.innerHTML = `1 ${coin} = ${rate_fetched_data[key]}`;
    }
  }
  const valueCoinOuther = (
    Math.round(+yourCoinValue.value * rateChange * 100) / 100
  ).toFixed(2);
  exancheRate.innerHTML = `1 ${coin} = ${rateChange} ${outherCoin}`;

  outherCoinValue.value = valueCoinOuther;
}

CurrencyList();
btnChange.addEventListener("click", () => {
  const temp = yourCurrency.value;
  yourCurrency.value = outherCurrency.value;
  outherCurrency.value = temp;
  CurrencyList();
});
yourCoinValue.addEventListener("input", changeOutherValue);
yourCurrency.addEventListener("change", CurrencyList);
outherCurrency.addEventListener("change", CurrencyList);
