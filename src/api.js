export const serverLogIn = data =>
  fetch('https://loft-taxi.glitch.me/auth', {
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  }).then(res => res.json());

export const addCard = data =>
  fetch("https://loft-taxi.glitch.me/card", {
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  }).then(res => res.json());

export const addressList = () =>
  fetch("https://loft-taxi.glitch.me/addressList").then(res =>
    res.json()
  );

export const route = (address1, address2) => {
  return fetch(
    `https://loft-taxi.glitch.me/route?address1=${address1}&address2=${address2}`
  ).then(res => res.json());
};

