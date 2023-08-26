// 1
// const field1 = document.getElementById("field1");
// const field2 = document.getElementById("field2");
// const checkButton = document.getElementById("checkButton");
// const resultMessage = document.getElementById("resultMessage");

// checkButton.addEventListener("click", function () {
//   const value1 = field1.value;
//   const value2 = field2.value;

//   if (value1 && value2) {
//     resultMessage.textContent = "Обидва поля заповнені";
//   } else {
//     resultMessage.textContent = "Не всі поля заповнені";
//   }
// });

// 2
// const gjkt1 = document.getElementById("gjkt1");
// const gjkt2 = document.getElementById("gjkt2");
// const checkB = document.getElementById("checkB");
// const resultM = document.getElementById("resultM");

// checkB.addEventListener('click', function() {
//     const value1 = parseFloat(gjkt1.value);
//     const value2 = parseFloat(gjkt2.value);
//     const sum = value1 + value2;

//     if (sum > 10) {
//         resultM.textContent = "Сума більша за 10";
//     } else {
//         resultM.textContent = "Сума менша або дорівнює 10";
//     }
// });

// 3
// const textField = document.getElementById('textField');
// const check = document.getElementById('check');
// const result = document.getElementById('result');

// check.addEventListener('click', function() {
//     const text = textField.value.toLowerCase();

//     if (text.includes("javascript")) {
//         result.textContent = "Текст містить слово JavaScript";
//     } else {
//         result.textContent = "Текст не містить слово JavaScript";
//     }
// });

// 4
// const numberInput = document.getElementById("numberInput");
// const Button = document.getElementById("Button");
// const Message = document.getElementById("Message");

// Button.addEventListener("click", function () {
//   const number = parseFloat(numberInput.value);

//   if (number > 10 && number < 20) {
//     Message.textContent = "Число входить в діапазон від 10 до 20";
//   } else {
//     Message.textContent = "Число не входить в діапазон від 10 до 20";
//   }
// });

// 5
// const nameInput = document.getElementById("nameInput");
// const emailInput = document.getElementById("emailInput");
// const passwordInput = document.getElementById("passwordInput");
// const submitButton = document.getElementById("submitButton");
// const errorMessage = document.getElementById("errorMessage");

// submitButton.addEventListener("click", function () {
//   const name = nameInput.value;
//   const email = emailInput.value;
//   const password = passwordInput.value;

//   if (
//     name.length >= 3 &&
//     email.includes("@") &&
//     email.includes(".") &&
//     password.length >= 6
//   ) {
//     window.location.href = "інша_сторінка.html";
//   } else {
//     errorMessage.textContent = "Дані не відповідають вимогам";
//   }
// });
