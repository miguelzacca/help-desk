const confirmBtn = document.querySelector("#confirmBtn");
const cancelBtn = document.querySelector("#cancelBtn");
const submitBtn = document.querySelector("#submitBtn");
const resetBtn = document.querySelector("#resetBtn");

confirmBtn.addEventListener("click", () => {
  submitBtn.click();
});

cancelBtn.addEventListener("click", () => {
  resetBtn.click();
});
