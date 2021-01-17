const container = document.querySelector('.container') as HTMLDivElement;
const url = 'https://source.unsplash.com/random/';
const rows = 5;

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 300;
}

function getRandomSize() {
  return `${getRandomNumber()}x${getRandomNumber()} `;
}

for (let i = 0; i < rows * 3; i++) {
  const randomSize = getRandomSize();
  const img = document.createElement('img');
  img.src = `${url}${randomSize}`;
  container.appendChild(img);
}
