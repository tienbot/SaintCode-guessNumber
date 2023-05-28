let guessButton = document.querySelector('#guessButton');
let guessInput = document.querySelector('#guessInput');
let feedback = document.querySelector('#feedback');
let gamesQ = document.querySelector('#games');
let numb = document.querySelector('.numb');
let repeat = document.querySelector('#repeat');

let secretNumber = Math.floor(Math.random() * 100) + 1; // Выбираем случайное число от 1 до 100
let attempts = 0; // Обнуляем количество попыток
let games = 0; //количество игр

function Play() {
    ++attempts;
    // Получаем значение из поля ввода
    var guess = parseInt(guessInput.value);
  
    // Проверяем, является ли введенное значение числом
    if (isNaN(guess)) {
    } else {
      // Сравниваем введенное значение с загаданным числом
        if (guess === secretNumber) {
            ++games;
            gamesQ.innerHTML = `Сыграно игр: ${games}`;
            numb.classList.add('d-none');
            repeat.classList.remove('d-none');
            if (attempts === 1){
                feedback.innerHTML = `Угадал за ${attempts} ход`;
            } else if (attempts>1 && attempts<5){
                feedback.innerHTML = `Угадал за ${attempts} ходa`;
            } else {
                feedback.innerHTML = `Угадал за ${attempts} ходов`;
            }
        } else if (guess < secretNumber) {
            feedback.innerHTML = "Больше";
        } else {
            feedback.innerHTML = "Меньше";
        }
    }
};

guessButton.addEventListener('click', Play);

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      Play();
    }
});

repeat.onclick = function() {
    console.log('ok')
    repeat.classList.add('d-none');
    numb.classList.remove('d-none');
    feedback.innerHTML = '-';
    guessInput.value = '';
    attempts = 0;
    secretNumber = Math.floor(Math.random() * 100) + 1;
}