let value = 0
alert("Hello TEJ!")

const say_hello = document.getElementById("say")
const increment = document.getElementById("increase")
const decrement = document.getElementById("decrease")
const val = document.getElementById("value")

say_hello.addEventListener('click', function() {
    alert('Hello there!')
})
increment.addEventListener("click", function () {
    value++
    val.innerHTML = value
})
decrement.addEventListener("click", function () {
    value--
    val.innerHTML = value
})