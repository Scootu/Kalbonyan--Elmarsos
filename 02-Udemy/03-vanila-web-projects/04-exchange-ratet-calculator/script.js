const allCurrency = document.querySelectorAll(".coin-change select");

// const outherCoinCurrency = document.querySelector("");
const yourCurrency = document.getElementById("selctedYour");
const outherCurrency = document.getElementById("selectOuther");
const yourCoinValue = document.getElementById("number-your");
const outherCoinValue = document.getElementById("number-outher");
const exancheRate = document.getElementById("exchange-rate");

const btnChange = document.getElementById("save");
let changed = false;
function showUpSelectValues(data) {
  // const responce = await fetch(
  //   `https://v6.exchangerate-api.com/v6/40548a90a31b3d73cf032060/latest/${coin}`
  // );
  changed = true;
  let optionTag = "";

  for (const key in data) {
    const option = `<option value="${key}">${key}</option>`;
    optionTag += option;
  }
  yourCurrency.innerHTML = optionTag;
  outherCurrency.innerHTML = optionTag;
}
const CurrencyList = async () => {
  // const selctedCoin = selectOption.value ;
  const coin = allCurrency[0].value.toUpperCase();
  const outherCoin = allCurrency[1].value.toUpperCase();
  // const responce = await fetch(
  //   `https://v6.exchangerate-api.com/v6/40548a90a31b3d73cf032060/latest/${coin}`
  // );
  // const data = await responce.json();
  //base_code
  //conversion_rates
  // const { conversion_rates } = data;
  if (!changed) {
    showUpSelectValues(conversion_rates);
  }
  // return { coin, outherCoin, base_code, conversion_rates };
  let rateChange = 1;
  // setCurrencyRate({ coin, outherCoin, base_code, conversion_rates });
  for (const key in conversion_rates) {
    if (key === outherCoin) {
      rateChange = conversion_rates[key];
      exancheRate.innerHTML = `1 ${coin} = ${conversion_rates[key]}`;
    }
  }

  const valueCoinOuther = (
    Math.round(+yourCoinValue.value * rateChange * 100) / 100
  ).toFixed(2);

  outherCoinValue.value = valueCoinOuther;
  //setCurrencyRate
};

// function setCurrencyRate(data) {
//   for (const key in data.conversion_rates) {
//     if (key === data.outherCoin) {
//       exancheRate.innerHTML = `1 ${data.coin} = ${data.conversion_rates[key]}`;
//     }
//   }
// }

function changeOutherValue() {
  const yourCoinValue = document.getElementById("number-your");
  const outherCoinValue = document.getElementById("number-outher");
  const coin = allCurrency[0].value.toUpperCase();
  //get rateChange
  const rateChange = 0.988;

  const valueCoinOuther = (
    Math.round(+yourCoinValue.value * rateChange * 100) / 100
  ).toFixed(2);
  exancheRate.innerHTML = `1 ${coin} = ${rateChange}`;
  outherCoinValue.value = valueCoinOuther;
}
function swapValue() {
  let yourCurrency = document.getElementById("selctedYour");
  let outherCurrency = document.getElementById("selectOuther");
  yourCurrency.value = outherCoinValue;
  outherCurrency.value = yourCoinValue;
  changeOutherValue();
}
// CurrencyList();
changeOutherValue();
btnChange.addEventListener("click", swapValue);
yourCoinValue.addEventListener("change", changeOutherValue);
