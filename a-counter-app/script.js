const counter = document.getElementById("counter")

let count = 0

const updateCounter = () => {
    counter.textContent = count
    counter.classList.add("pop")

    setTimeout(() => {
        counter.classList.remove("pop")
    }, 150)

    if (count===0) {
        counter.style.color = "gray"
    } else if (count <= 10 ) {
        counter.style.color = "orange"
    } else {
        counter.style.color = "blue"
    }
}

const increment = document.getElementById("increment")
increment.addEventListener("click", () => {
    count++
    updateCounter()
})

const decrement = document.getElementById("decrement")
decrement.addEventListener("click", () => {
    if (count > 0) {
        count--
    }
    updateCounter()
})

const upgrade = document.getElementById("upgrade")
upgrade.addEventListener("click", () => {
    count += 5
    updateCounter()
})

const downgrade = document.getElementById("downgrade")
downgrade.addEventListener("click", () => {
    count -= 5
    if (count < 0) {
        count = 0
    }
    updateCounter()
})

const reset = document.getElementById("reset")
reset.addEventListener("click", () => {
    count = 0
    updateCounter()
})

updateCounter()