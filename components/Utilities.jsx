const url = "http://localhost:8080/";
/* vores fetch function der henter data fra vores api med et specificeret endpoint */
async function FFGet(endpoint) {
  return await fetch(url + endpoint)
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((err) => console.error(err));
}

export { FFGet};
