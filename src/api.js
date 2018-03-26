export default {
  search: query => new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.status === 200 && this.readyState === 4) {
        resolve(JSON.parse(this.response));
      }
    };
    xhr.open('GET', `http://www.omdbapi.com/?s=${query}&apikey=989123b1`);
    xhr.send();
  })
}