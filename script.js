// --- Element Selection ---
const generateBtn = document.getElementById("pasw-btn");
const passwordBoxes = document.querySelectorAll(".box");

function generateSecurePassword(length) {
  const allChars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

  // Create a new array to hold secure random numbers
  const randomValues = new Uint32Array(length);
  window.crypto.getRandomValues(randomValues);

  let password = "";
  for (let i = 0; i < length; i++) {
    // Use the secure random number to pick a character from our list
    password += allChars[randomValues[i] % allChars.length];
  }
  return password;
}

// --- Event Listener ---
generateBtn.addEventListener("click", () => {
  passwordBoxes.forEach((box) => {
    const newPassword = generateSecurePassword(15);
    box.textContent = newPassword;
    box.style.height = "2rem";
  });
});
