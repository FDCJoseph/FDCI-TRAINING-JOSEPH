
let elements = document.querySelectorAll('img');
let count = 0;
for (let elem of elements) {
    alert(elem.src);
    count++;
}
console.log(count);

//console.log(document.querySelector('img').attributes.alt);
