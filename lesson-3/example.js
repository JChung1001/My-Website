let counter = 0;
document.getElementById('counter').innerHTML = counter;

function hello() {
  console.log('Hello world!');
  counter = counter + 1;
  updateCounter();
}

function bye() {
  console.log('Farewell to this cruel world!');
  counter = counter - 1;
  updateCounter();
}

function updateCounter() {
  console.log(counter);
  document.getElementById('counter').innerHTML = counter;
  if (counter % 3 === 0) {
    document.getElementById('counter').style.color = 'red';
  } else {
    document.getElementById('counter').style.color = 'black';
  }
}