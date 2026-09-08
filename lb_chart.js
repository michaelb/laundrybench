
const xValues = ["Human", "IRobot Roomba 2002", "Claude Fable 5.1 (max)", "ChatGPT 5.6 Sol", "Muse Spark 1.3 (xhigh)", "Kimi-K3-2.8T", "DeepSeek-V4-Flash", "Gemini 3.8-Flash", "Claude Opus 5", "Grok 4.20 (ultra)", "Qwen 3.8 Max", "Gemini 3.7-Flash", "GLM-5.3"];
const yValues = [100, 0.5, 0.5 ,0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5];
const barColors = 
 [ "rgba(0,50,150,0.8)",
  "rgba(0,150,50,0.6)",
  "rgba(150,0,50,0.6)",
  "rgba(0,150,50,0.6)",
  "rgba(50,0,150,0.6)",
  "rgba(50,150,0,0.6)",
  "rgba(0,100,100,0.6)",
  "rgba(100,0,100,0.6)",
  "rgba(50,50,100,0.6)",
  "rgba(150,50,0,0.6)",
  "rgba(150,0,50,0.6)",
  "rgba(50,100,50,0.6)",
  "rgba(100,50,50,0.6)",
 ];

const ctx = document.getElementById('Laundry');

new Chart(ctx, {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    plugins: {
      legend: {display: false},
      title: {
        display: true,
        text: "Laundry v1.3",
        font: {size: 16}
      },
      subtitle: {
          display: true,
          text: 'Higher is better'
      }

    }
  }
});


const yValues2 = [100, 30, 0.5 ,0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5];

const ctx2 = document.getElementById('Floor');

new Chart(ctx2, {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues2
    }]
  },
  options: {
    plugins: {
      legend: {display: false},
      title: {
        display: true,
        text: "Floor 5",
        font: {size: 16}
      },
      subtitle: {
          display: true,
          text: 'Higher is better'
      }

    }
  }
});

const yValues3 = [100, 8, 0.5 ,0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5];

const ctx3 = document.getElementById('Composite');

new Chart(ctx3, {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues3
    }]
  },
  options: {
    plugins: {
      legend: {display: false},
      title: {
        display: true,
        text: "LaundryBench AI Score",
        font: {size: 16}
      },
      subtitle: {
          display: true,
          text: 'Higher is better'
      }

    }
  }
});

const ctx4 = document.getElementById('Microwave');

new Chart(ctx4, {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    plugins: {
      legend: {display: false},
      title: {
        display: true,
        text: "Microwave-Wipe AGI-3",
        font: {size: 16}
      },
      subtitle: {
          display: true,
          text: 'Higher is better'
      }
    }
  }
});
