// Render local timestamp in submission table
const timestampElement = document.getElementById("ts");
if (timestampElement) {
  timestampElement.innerText = new Date().toLocaleString(); //[cite: 4]
}

// Render Grade-level MPS Bar Chart
const chartCanvas = document.getElementById("gradeChart");
if (chartCanvas) {
  new Chart(chartCanvas, {
    type: "bar", //[cite: 4]
    data: {
      labels: ["G1", "G2", "G3", "G4", "G5", "G6"], //[cite: 4]
      datasets: [
        {
          label: "Mean Percentage Score (MPS)", //[cite: 4]
          data: [48.4, 43.33, 64.05, 53.59, 48, 46], //[cite: 4]
          backgroundColor: "rgba(12, 42, 85, 0.85)",
          borderColor: "#0C2A55",
          borderWidth: 1,
          borderRadius: 6
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 100, // Capped at 100% for standard school MPS visualization
          title: {
            display: true,
            text: "MPS (%)"
          }
        },
        x: {
          title: {
            display: true,
            text: "Grade Level"
          }
        }
      },
      plugins: {
        legend: {
          display: true,
          position: "top"
        }
      }
    }
  });
}
