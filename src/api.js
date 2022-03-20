// export const serverLogIn = async (email, password) => {
//   return fetch(
//     `https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`
//   ).then(res => res.json()).then(data => data.success);
// };

export const serverLogIn = data =>
  fetch('https://loft-taxi.glitch.me/auth', {
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  }).then(res => res.json());