const confirmBtn = document.querySelector("#confirmBtn");
const cancelBtn = document.querySelector("#cancelBtn");
const submitBtn = document.querySelector("#submitBtn");
const resetBtn = document.querySelector("#resetBtn");
const callInput = document.querySelector("#callInput");
const screenId = document.querySelector("#screenId");

const rand = () => Math.floor(Math.random() * 9999999);

const id = rand();
callInput.value = id;
screenId.textContent = id.toString().padStart(7, "0");

confirmBtn.addEventListener("click", () => {
  submitBtn.click();
});

cancelBtn.addEventListener("click", () => {
  resetBtn.click();
});
