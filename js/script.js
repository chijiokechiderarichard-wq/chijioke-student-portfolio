
// Store academic tasks
let tasks = [];

// Function to display tasks
function displayTasks() {

    const taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {

        const li = document.createElement("li");

        const taskText = document.createElement("span");

        taskText.textContent = task.name;

        if (task.completed) {
            taskText.classList.add("completed");
        }

        // Complete button
        const completeButton = document.createElement("button");

        completeButton.textContent = task.completed
            ? "Undo"
            : "Complete";

        completeButton.onclick = function() {
            tasks[index].completed = !tasks[index].completed;
            displayTasks();
        };

        // Delete button
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";

        deleteButton.onclick = function() {
            tasks.splice(index, 1);
            displayTasks();
        };

        li.appendChild(taskText);
        li.appendChild(completeButton);
        li.appendChild(deleteButton);

        taskList.appendChild(li);

    });
}

// Function to add tasks
function addTask() {

    const input = document.getElementById("taskInput");

    const taskName = input.value.trim();

    if (taskName === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push({
        name: taskName,
        completed: false
    });

    input.value = "";

    displayTasks();
}

// CONTACT FORM VALIDATION

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        const feedback = document.getElementById("formFeedback");

        if (!name || !email || !phone || !message) {

            feedback.style.color = "#f87171";
            feedback.textContent = "Please fill in all fields.";
            return;

        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            feedback.style.color = "#f87171";
            feedback.textContent = "Please enter a valid email address.";
            return;

        }

        if (!/^\d+$/.test(phone)) {

            feedback.style.color = "#f87171";
            feedback.textContent = "Phone number must contain digits only.";
            return;

        }

        feedback.style.color = "#4ade80";
        feedback.textContent = "Your form has passed validation!";

        contactForm.reset();

    });

}
