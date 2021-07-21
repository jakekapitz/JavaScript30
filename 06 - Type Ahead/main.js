const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const input = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

const cities = [];
fetch(endpoint)
    .then(response => response.json())
    .then(data=> cities.push(...data));

console.log(cities)

const handleInput = (e) => {
    let search = e.currentTarget.value;
    let results = cities.filter(city => city.city.includes(search));
    console.log(results)
    let html = results.map(result => {
        return `<li>${result.city}, ${result.state} <span class="population">${result.population}</span></li>`
    }).join('');
    return suggestions.innerHTML = html;
}

input.addEventListener('change', handleInput);
input.addEventListener('keyup', handleInput);