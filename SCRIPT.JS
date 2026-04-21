// Smooth scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// BMI Calculator
function calculateBMI() {
    let h = document.getElementById("height").value / 100;
    let w = document.getElementById("weight").value;

    if (!h || !w) {
        document.getElementById("result").innerText = "Enter valid values";
        return;
    }

    let bmi = (w / (h * h)).toFixed(2);
    let status = "";

    if (bmi < 18.5) status = "Underweight";
    else if (bmi < 25) status = "Normal";
    else status = "Overweight";

    document.getElementById("result").innerText = `BMI: ${bmi} (${status})`;
}

// Workout Planner with delete button
function addTask() {
    let input = document.getElementById("taskInput");

    if (input.value === "") return;

    let li = document.createElement("li");
    li.textContent = input.value;

    let delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.className = "deleteBtn";

    delBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(delBtn);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

// Form validation
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill all fields");
    } else {
        alert("Form Submitted!");
    }
}