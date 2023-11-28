/* vores fetch function der henter data fra vores api med et specificeret endpoint */
async function FFGet(endpoint) {
  const url = "http://localhost:8080/";
  const res = await fetch(url + endpoint);
  const data = await res.json().catch((err) => console.error(err));
  return data
}

export { FFGet };
