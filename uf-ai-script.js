document.addEventListener("DOMContentLoaded", function () {

  // if (window.location.pathname === "/aiuf-cf") return;
  
  const scriptTag = document.getElementById("uf-ai-script");
  if (!scriptTag) return;

  // === Inject CSS ===
  const style = document.createElement("style");
  style.innerHTML = `
    // .ufai_logo_icon {
    //   position: fixed;
    //   bottom: 20px;
    //   right: 20px;
    //   width: 70px;
    //   height: 70px;
    //   border-radius: 50%;
    //   background-color: #001f2e;
    //   display: flex;
    //   align-items: center;
    //   justify-content: center;
    //   z-index: 99999;
    //   cursor: pointer;
    //   box-shadow:
    //     0 0 10px rgba(255, 255, 255, 0.4),
    //     0 0 20px rgba(0, 242, 255, 0.6),
    //     0 0 30px rgba(0, 195, 255, 0.4);
    // }
// .ufai_logo_icon {
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
  
//   width: 70px;
//   height: 70px;
//   border-radius: 50%;
//   background-color: #001f2e;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 99999;
//   cursor: pointer;
  
//   box-shadow:
//     0 0 10px rgba(255, 255, 255, 0.4),
//     0 0 20px rgba(0, 242, 255, 0.6),
//     0 0 30px rgba(0, 195, 255, 0.4);
// }
.ufai_logo_icon {
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #001f2e;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  cursor: pointer;

  box-shadow:
    0 0 10px rgba(255, 255, 255, 0.4),
    0 0 20px rgba(0, 242, 255, 0.6),
    0 0 30px rgba(0, 195, 255, 0.4);
}
    .ufai_logo_icon::after {
      content: '';
      position: absolute;
      top: -4px;
      left: -4px;
      width: calc(100% + 8px);
      height: calc(100% + 8px);
      border-radius: 50%;
      background: transparent;
      box-shadow: 0 0 15px rgba(255,255,255,0.6),
                  0 0 25px rgba(255,255,255,0.4);
      z-index: -1;
      animation: ufai_pulseGlow 2s infinite alternate;
    }

    @keyframes ufai_pulseGlow {
      0% { transform: scale(1); opacity: 0.6; }
      50% { transform: scale(1.1); opacity: 0.8; }
      100% { transform: scale(1.2); opacity: 0.5; }
    }

    .ufai_logo_icon::before,
    .ufai_logo_icon .ufai_pulse2,
    .ufai_logo_icon .ufai_pulse3 {
      content: '';
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
      filter: blur(10px);
    }

    .ufai_logo_icon::before {
      width: 20%;
      height: 20%;
      top: 50%;
      left: 50%;
      background: rgba(0, 242, 255, 0.5);
      transform: translate(-50%, -50%);
      animation: ufai_pulse1 2s infinite;
      z-index: 5;
    }

    .ufai_logo_icon .ufai_pulse2 {
      width: 30%;
      height: 30%;
      top: 50%;
      left: 50%;
      background: rgba(0, 195, 255, 0.4);
      transform: translate(-50%, -50%);
      animation: ufai_pulse2 3s infinite;
      z-index: 5;
    }

    .ufai_logo_icon .ufai_pulse3 {
      width: 25%;
      height: 25%;
      top: 50%;
      left: 50%;
      background: rgba(0, 242, 255, 0.3);
      transform: translate(-50%, -50%);
      animation: ufai_pulse3 4s infinite;
      z-index: 5;
    }

    .ufai_text_wrapper {
      position: relative;
      z-index: 20;
    }

    .ufai_logo_text {
      font-weight: bold;
      font-size: 1.2rem;
      color: white;
    }

    .ufai_orbit_container {
      position: absolute;
      top: 50%;
      left: 50%;
      animation: ufai_orbit_rotate 3s linear infinite;
    }

    .ufai_orbit {
      position: absolute;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: white;
      transform: rotate(var(--angle)) translateX(20px);
      box-shadow: 0 0 6px rgba(0,242,255,0.8);
      animation: ufai_flicker 1s infinite alternate;
    }

    @keyframes ufai_orbit_rotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    @keyframes ufai_flicker {
      0% { opacity: 0.6; transform: rotate(var(--angle)) translateX(20px) scale(0.8);}
      50% { opacity: 1; transform: rotate(var(--angle)) translateX(20px) scale(1.2);}
      100% { opacity: 0.5; transform: rotate(var(--angle)) translateX(20px) scale(0.7);}
    }

    @keyframes ufai_pulse1 {
      0% { width: 0; height: 0; opacity: 0.7; }
      50% { width: 80%; height: 80%; opacity: 0.25; }
      100% { width: 0; height: 0; opacity: 0; }
    }

    @keyframes ufai_pulse2 {
      0% { width: 0; height: 0; opacity: 0.6; }
      50% { width: 100%; height: 100%; opacity: 0.2; }
      100% { width: 0; height: 0; opacity: 0; }
    }

    @keyframes ufai_pulse3 {
      0% { width: 0; height: 0; opacity: 0.5; }
      50% { width: 70%; height: 70%; opacity: 0.15; }
      100% { width: 0; height: 0; opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  // === Inject HTML ===
  const logo = document.createElement("div");
  logo.className = "ufai_logo_icon";

  logo.innerHTML = `
    <div class="ufai_text_wrapper">
      <span class="ufai_logo_text">AI</span>
      <div class="ufai_orbit_container">
        <div class="ufai_orbit" style="--angle:0deg"></div>
        <div class="ufai_orbit" style="--angle:120deg"></div>
        <div class="ufai_orbit" style="--angle:240deg"></div>
      </div>
    </div>
    <div class="ufai_pulse2"></div>
    <div class="ufai_pulse3"></div>
  `;

  document.body.appendChild(logo);

  logo.addEventListener("click", () => {
  window.open("https://urbanfeatconstruction.com/aiuf", "_blank");
});
});
