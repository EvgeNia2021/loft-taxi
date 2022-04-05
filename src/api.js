export const serverLogIn = data =>
  fetch('https://loft-taxi.glitch.me/auth', {
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
    // mode: 'no-cors',
    method: 'POST'
  }).then(res => res.json());

export const addCard = data =>
  fetch("https://loft-taxi.glitch.me/card", {
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    },
    // mode: 'no-cors',
    method: "POST"
  }).then(res => res.json());

  export const loadCardData = token =>
  fetch(`https://loft-taxi.glitch.me/card?token=${token}`).then(res =>
    res.json()
  );

export const addressList = () =>
  fetch("https://loft-taxi.glitch.me/addressList").then(res =>
    res.json()
  );

export const getRoute = (payload) => 
 fetch(
    `https://loft-taxi.glitch.me/route?address1=${payload.address1}&address2=${payload.address2}`
  ).then(res => res.json());

  export const reg = data =>
  fetch('https://loft-taxi.glitch.me/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json());

  