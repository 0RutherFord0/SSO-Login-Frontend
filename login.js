// login.js
async function handleLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();

    document.getElementById("message").innerText = `Login successful.`;
    localStorage.setItem("token", data.token);
    // Redirect the user to the dashboard page
    window.location.replace("/dashboard.html");
  } catch (error) {
    console.error("Error during login:", error);
    document.getElementById("message").innerText =
      "An error occurred during login.";
  }
}

// Function to handle registration
async function handleRegister() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();

    // Display the registration message
    document.getElementById("message").innerText = data.message;
  } catch (error) {
    console.error("Error during registration:", error);
    document.getElementById("message").innerText =
      "An error occurred during registration.";
  }
}
