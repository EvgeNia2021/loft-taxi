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