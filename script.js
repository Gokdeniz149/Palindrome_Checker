
const regex = /[^a-z0-9]/gi;
const button = document.getElementById("check-btn");
const input = document.getElementById("text-input");
const result = document.getElementById("result");
const palindrome = () => {
    if (input.value === "") {
        alert("Please input a value");
        return;
    }
    const str = input.value.replace(regex, "").toLowerCase();
    const reversedStr = str.split("").reverse().join("");
    if (str === reversedStr) {
        result.innerText = `${input.value} is a palindrome`;
    }
    else {
        result.innerText = `${input.value} is not a palindrome`;
    }
}
button.addEventListener("click", palindrome);