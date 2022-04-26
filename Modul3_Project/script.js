const items1 = document.querySelectorAll('.menu1 .menuItem');
const items2 = document.querySelectorAll('.menu2 .menuItem');
const info1 = document.querySelector('.info1')
const info2 = document.querySelector('.info2')
const input1 = document.querySelector('.mainBox1 input')
const result = document.querySelector('#result')
let base2;
let base1;

items1.forEach((item) => {
    item.addEventListener('click', () => {
        items1.forEach((item) => {
            item.style.backgroundColor = 'white';
        })
        item.style.backgroundColor = '#833AE0';
        base1 = item.textContent;
    })
})

items2.forEach((item) => {
    item.addEventListener('click', () => {
        items2.forEach((item) => {
            item.style.backgroundColor = 'white';
        })
        item.style.backgroundColor = '#833AE0';
        base2 = item.textContent;
    })
})

input1.addEventListener('keyup', () => {
    
    fetch(`https://api.exchangerate.host/latest?base=${base1}&symbols=${base2}`)
        .then(res => res.json())
        .then((data) => {
            input1.value = input1.value.replace(",", ".");
            result.textContent = data.rates[base2] * Number(input1.value)
            info1.textContent = '1' + base1 + ' = ' + data.rates[base2] + base2;
            fetch(`https://api.exchangerate.host/latest?base=${base2}&symbols=${base1}`).then(res => res.json()).then((data) => {
                info2.textContent = '1' + base2 + ' = ' + data.rates[base1] + base1;
            });
        })
})