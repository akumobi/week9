const allLetters = 'The quick brown fox jumps over the lazy dog';

// const title = document.querySelector('h1');

// title.textContent = allLetters;

document.querySelector('h1').textContent = allLetters;

const lists = document.querySelectorAll('ul li');

//Change to Uppercase
lists[6].textContent = allLetters.toUpperCase();

//Change to Lowercase
lists[1].textContent = allLetters.toLowerCase();

//length Method
lists[2].innerHTML = '<strong>Length of string: </strong>' + allLetters.length

//charAt Method
lists[4].innerHTML = '<strong>Character at Index 10 is </strong>: '.concat('letter ', allLetters.charAt(10))

//replace Method
lists[3].innerHTML = allLetters.replace('dog', 'cat');

//replaceAll Method
lists[5].innerText = allLetters.toLowerCase().replaceAll('the', 'that');

document.getElementById('week1').innerText = 
`Society grows when
\nmen plant tress
            whose shed they will never sit under`

document.getElementById('week2').innerText = `Fox is at index ${allLetters.indexOf("fox")}`

document.getElementById("week3").innerHTML = 'Fox is at index of ' + allLetters.indexOf('fox')

document.querySelector('#week4').textContent = allLetters.lastIndexOf('o');

document.getElementsByClassName('front')[0].textContent = 'Does the string contain "lazy": ' + allLetters.includes('lazy')

document.getElementsByClassName('front')[1].textContent = 'Does the string contain "hardworking": ' + allLetters.includes('hardworking')

document.querySelectorAll('.front')[2].innerHTML = 'Does the string start with "The": ' + allLetters.startsWith('The')

document.querySelectorAll('.front')[3].innerHTML = 'Count the number of words: ' + allLetters.split(' ').length

document.getElementsByTagName('li')[17].textContent = allLetters.slice(allLetters.indexOf('b'), allLetters.indexOf('g')+1)