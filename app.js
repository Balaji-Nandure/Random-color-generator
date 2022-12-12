/** @format */

const getcolor = function () {
    const randomNumber = Math.floor(Math.random() * 16777215.99);
    const randomCode = `#` + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color_code").innerText = randomCode;
    console.log(randomCode);

    // for copying the color to the clipboard
    navigator.clipboard.writeText(randomCode);
};

// event call
document.getElementById("btn").addEventListener("click", getcolor);

// initial call
getcolor();
