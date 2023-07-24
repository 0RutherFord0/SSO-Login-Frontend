// dashboard.js
function checkToken() {
  console.log("Checking");
  const token = localStorage.getItem("token");
  if (!token) {
    alert("Token not found");
    window.location.replace("/"); // Redirect to the login page if token is not found
    return;
  }

  try {
    // Decode the token to check the expiration date
    const decodedToken = jwt_decode(token);
    const currentTime = Date.now() / 1000; // Get current time in seconds

    if (decodedToken.exp < currentTime) {
      localStorage.removeItem("token"); // Remove expired token from local storage
      window.location.replace("/"); // Redirect to the login page if token is expired
    }
  } catch (error) {
    console.error("Error decoding token:", error);
    window.location.replace("/"); // Redirect to the login page if token decoding fails
  }
}

function jwt_decode(token) {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    const decodedToken = JSON.parse(atob(base64));
    return decodedToken;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
}

window.onload = checkToken();
