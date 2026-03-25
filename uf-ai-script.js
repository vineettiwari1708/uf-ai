document.addEventListener("DOMContentLoaded", function () {
  const scriptTag = document.getElementById("uf-ai-script");
  if (!scriptTag) return;

  // === Inject CSS ===
  const style = document.createElement("style");
  style.innerHTML = `
    .ai_logo {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background-color: #001f2e;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 99999;
      cursor: pointer;
    }

    .ai_logo::before,
    .ai_logo .pulse2,
    .ai_logo .pulse3 {
      content: '';
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
      filter: blur(10px);
    }

    .ai_logo::before {
      width: 20%;
      height: 20%;
      top: 50%;
      left: 50%;
      background: rgba(0, 242, 255, 0.5);
      transform: translate(-50%, -50%);
      animation: pulse1 2s infinite;
      z-index: 5;
    }

    .ai_logo .pulse2 {
      width: 30%;
      height: 30%;
      top: 50%;
      left: 50%;
      background: rgba(0, 195, 255, 0.4);
      transform: translate(-50%, -50%);
      animation: pulse2 3s infinite;
      z-index: 5;
    }

    .ai_logo .pulse3 {
      width: 25%;
      height: 25%;
      top: 50%;
      left: 50%;
      background: rgba(0, 242, 255, 0.3);
      transform: translate(-50%, -50%);
      animation: pulse3 4s infinite;
      z-index: 5;
    }

    .text_orbit_wrapper {
      position: relative;
      z-index: 20;
    }

    .logo_text {
      font-weight: bold;
      font-size: 1.2rem;
      color: white;
    }

    .orbit-container {
      position: absolute;
      top: 50%;
      left: 50%;
      animation: orbit-rotate 3s linear infinite;
    }

    .orbit {
      position: absolute;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: white;
      transform: rotate(var(--angle)) translateX(20px);
      box-shadow: 0 0 6px rgba(0,242,255,0.8);
      animation: flicker 1s infinite alternate;
    }

    // @keyframes orbit-rotate {
    //   0% { transform: rotate(0deg); }
    //   100% { transform: rotate(360deg); }
    // }

    // @keyframes flicker {
    //   0% { opacity: 0.6; transform: rotate(var(--angle)) translateX(20px) scale(0.8);}
    //   50% { opacity: 1; transform: rotate(var(--angle)) translateX(20px) scale(1.2);}
    //   100% { opacity: 0.5; transform: rotate(var(--angle)) translateX(20px) scale(0.7);}
    // }

    // @keyframes pulse1 {
    //   0% { width: 0; height: 0; opacity: 0.7; }
    //   50% { width: 80%; height: 80%; opacity: 0.25; }
    //   100% { width: 0; height: 0; opacity: 0; }
    // }

    // @keyframes pulse2 {
    //   0% { width: 0; height: 0; opacity: 0.6; }
    //   50% { width: 100%; height: 100%; opacity: 0.2; }
    //   100% { width: 0; height: 0; opacity: 0; }
    // }

    // @keyframes pulse3 {
    //   0% { width: 0; height: 0; opacity: 0.5; }
    //   50% { width: 70%; height: 70%; opacity: 0.15; }
    //   100% { width: 0; height: 0; opacity: 0; }
    // }
  `;
  document.head.appendChild(style);

  // === Inject HTML ===
  const logo = document.createElement("div");
  logo.className = "ai_logo";

  logo.innerHTML = `
    <div class="text_orbit_wrapper">
      <span class="logo_text">AI</span>
      <div class="orbit-container">
        <div class="orbit" style="--angle:0deg"></div>
        <div class="orbit" style="--angle:120deg"></div>
        <div class="orbit" style="--angle:240deg"></div>
      </div>
    </div>
    <div class="pulse2"></div>
    <div class="pulse3"></div>
  `;

  document.body.appendChild(logo);

  // === Click Action (like WhatsApp open) ===
  logo.addEventListener("click", () => {
    alert("Urbanfeat AI module");
  });
});
