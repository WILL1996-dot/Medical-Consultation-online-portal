const specialties = [
  "Cardiologist",
  "Dermatologist",
  "General Practitioner",
  "Neurologist",
  "Pediatrician",
  "Psychiatrist",
  "Radiologist",
  "Orthopedic Surgeon",
  "Ophthalmologist",
  "Dentist"
];

const searchInput = document.getElementById("searchInput");
const suggestionsList = document.getElementById("suggestionsList");

searchInput.addEventListener("input", function () {
  const input = this.value.toLowerCase();
  suggestionsList.innerHTML = "";

  if (input === "") {
    suggestionsList.style.display = "none";
    return;
  }

  const filtered = specialties.filter(specialty =>
    specialty.toLowerCase().includes(input)
  );

  if (filtered.length === 0) {
    suggestionsList.style.display = "none";
    return;
  }

  filtered.forEach(specialty => {
    const li = document.createElement("li");
    li.textContent = specialty;
    li.addEventListener("click", function () {
      searchInput.value = specialty;
      suggestionsList.innerHTML = "";
      suggestionsList.style.display = "none";
    });
    suggestionsList.appendChild(li);
  });

  suggestionsList.style.display = "block";
});

document.addEventListener("click", function (e) {
  if (!searchInput.contains(e.target) && !suggestionsList.contains(e.target)) {
    suggestionsList.style.display = "none";
  }
});
