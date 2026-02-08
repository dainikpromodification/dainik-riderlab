 function searchParts() {
  const input = document.getElementById('partSearch').value.toLowerCase();
  const list = document.getElementById('partsList').getElementsByTagName('li');

  for (let i = 0; i < list.length; i++) {
    let text = list[i].textContent || list[i].innerText;
    if (text.toLowerCase().indexOf(input) > -1) {
      list[i].classList.remove('hidden');
    } else {
      list[i].classList.add('hidden');
    }
  }
}
function searchParts() {
  const input = document.getElementById('partSearch').value.toLowerCase();
  const list = document.getElementById('partsList').getElementsByTagName('li');

  for (let i = 0; i < list.length; i++) {
    let text = list[i].textContent || list[i].innerText;
    if (text.toLowerCase().indexOf(input) > -1) {
      list[i].classList.remove('hidden');
    } else {
      list[i].classList.add('hidden');
    }
  }
}
// Bike parts data for search & gallery
const bikeParts = [
    // Yamaha R15 V3
    {
        brand: "Yamaha",
        model: "R15 V3",
        parts: [
            { name: "ফেয়ারিং Set", price: 12000, img: "images/yamaha_r15_v3_fairing.jpg" },
            { name: "হেডলাইট", price: 5500, img: "images/yamaha_r15_v3_headlight.jpg" },
            { name: "টেল লাইট", price: 3000, img: "images/yamaha_r15_v3_taillight.jpg" },
            { name: "সাইড মিরর", price: 1500, img: "images/yamaha_r15_v3_mirror.jpg" },
            { name: "চাকা (Front/Rear)", price: 7000, img: "images/yamaha_r15_v3_wheel.jpg" },
            { name: "ব্রেক ক্যালিপার", price: 4500, img: "images/yamaha_r15_v3_brake.jpg" }
        ]
    },

    // Aprilia GPR 150
    {
        brand: "Aprilia",
        model: "GPR 150",
        parts: [
            { name: "ফেয়ারিং Set", price: 14000, img: "images/aprilia_gpr150_fairing.jpg" },
            { name: "হেডলাইট", price: 6000, img: "images/aprilia_gpr150_headlight.jpg" },
            { name: "টেল লাইট", price: 3500, img: "images/aprilia_gpr150_taillight.jpg" },
            { name: "সাইড মিরর", price: 1800, img: "images/aprilia_gpr150_mirror.jpg" },
            { name: "চাকা (Front/Rear)", price: 8000, img: "images/aprilia_gpr150_wheel.jpg" },
            { name: "ব্রেক ক্যালিপার", price: 5000, img: "images/aprilia_gpr150_brake.jpg" }
        ]
    },

    // CF Moto 300
    {
        brand: "CF Moto",
        model: "300",
        parts: [
            { name: "ফেয়ারিং Set", price: 18000, img: "images/cfmoto_300_fairing.jpg" },
            { name: "হেডলাইট", price: 7500, img: "images/cfmoto_300_headlight.jpg" },
            { name: "টেল লাইট", price: 4000, img: "images/cfmoto_300_taillight.jpg" },
            { name: "সাইড মিরর", price: 2000, img: "images/cfmoto_300_mirror.jpg" },
            { name: "চাকা (Front/Rear)", price: 9500, img: "images/cfmoto_300_wheel.jpg" },
            { name: "ব্রেক ক্যালিপার", price: 5500, img: "images/cfmoto_300_brake.jpg" }
        ]
    },

    // Taro GP
    {
        brand: "Taro GP",
        model: "GP",
        parts: [
            { name: "ফেয়ারিং Set", price: 13000, img: "images/taro_gp_fairing.jpg" },
            { name: "হেডলাইট", price: 5500, img: "images/taro_gp_headlight.jpg" },
            { name: "টেল লাইট", price: 3200, img: "images/taro_gp_taillight.jpg" },
            { name: "সাইড মিরর", price: 1700, img: "images/taro_gp_mirror.jpg" },
            { name: "চাকা (Front/Rear)", price: 7800, img: "images/taro_gp_wheel.jpg" },
            { name: "ব্রেক ক্যালিপার", price: 4800, img: "images/taro_gp_brake.jpg" }
        ]
    },

    // Indian / Indo Bikes
    {
        brand: "Indian",
        model: "Indian",
        parts: [
            { name: "ফেয়ারিং Set", price: 15000, img: "images/indian_bike_fairing.jpg" },
            { name: "হেডলাইট", price: 6500, img: "images/indian_bike_headlight.jpg" },
            { name: "টেল লাইট", price: 3500, img: "images/indian_bike_taillight.jpg" },
            { name: "সাইড মিরর", price: 1800, img: "images/indian_bike_mirror.jpg" }
        ]
    },
    {
        brand: "Indo",
        model: "Indo",
        parts: [
            { name: "ফেয়ারিং Set", price: 14000, img: "images/indo_bike_fairing.jpg" },
            { name: "হেডলাইট", price: 6000, img: "images/indo_bike_headlight.jpg" },
            { name: "টেল লাইট", price: 3300, img: "images/indo_bike_taillight.jpg" },
            { name: "সাইড মিরর", price: 1700, img: "images/indo_bike_mirror.jpg" }
        ]
    }
];
const products = [
  {name: "Front Fairing", compatible: "R15 V3 / V4", type: "Body / Exterior", price: "6000-9000", filename: "r15-v3-front-fairing.jpg"},
  {name: "Side Fairing Left", compatible: "R15 V3 / V4", type: "Body / Exterior", price: "5500-8000", filename: "r15-v3-side-fairing-left.jpg"},
  {name: "Side Fairing Right", compatible: "R15 V3 / V4", type: "Body / Exterior", price: "5500-8000", filename: "r15-v3-side-fairing-right.jpg"},
  {name: "Belly Pan", compatible: "R15 V3 / V4", type: "Body / Exterior", price: "4000-6500", filename: "r15-v3-belly-pan.jpg"},
  {name: "Rear Fairing", compatible: "R15 V3 / V4", type: "Body / Exterior", price: "5000-7500", filename: "r15-v3-rear-fairing.jpg"},
  {name: "Fuel Tank", compatible: "R15 V3 / V4", type: "Body / Exterior", price: "12000-18000", filename: "r15-v3-fuel-tank.jpg"},
  {name: "Seat Set (Rider + Pillion)", compatible: "R15 V3 / V4", type: "Body / Exterior", price: "4000-6500", filename: "r15-v3-seat-set.jpg"},
  {name: "Headlight Assembly", compatible: "R15 V3 / V4", type: "Electrical", price: "3500-6000", filename: "r15-v3-headlight.jpg"},
  {name: "Tail Light", compatible: "R15 V3 / V4", type: "Electrical", price: "1500-3000", filename: "r15-v3-tail-light.jpg"},
  {name: "Indicator Set (Front + Rear)", compatible: "R15 V3 / V4", type: "Electrical", price: "800-1500", filename: "r15-v3-indicator-set.jpg"},
  {name: "Clutch Cable", compatible: "R15 V3 / V4", type: "Engine Control", price: "800-1200", filename: "r15-v3-clutch-cable.jpg"},
  {name: "Camshaft", compatible: "R15 V3 / V4", type: "Engine", price: "4000-7000", filename: "r15-v3-camshaft.jpg"},
  {name: "Piston", compatible: "R15 V3 / V4", type: "Engine", price: "2000-3500", filename: "r15-v3-piston.jpg"},
  {name: "Cylinder Block", compatible: "R15 V3 / V4", type: "Engine", price: "6000-10000", filename: "r15-v3-cylinder-block.jpg"},
  {name: "Crankshaft", compatible: "R15 V3 / V4", type: "Engine", price: "5500-9000", filename: "r15-v3-crankshaft.jpg"},
  {name: "Oil Pump", compatible: "R15 V3 / V4", type: "Engine", price: "1500-2500", filename: "r15-v3-oil-pump.jpg"},
  {name: "Front Rim", compatible: "R15 V3 / V4", type: "Wheel", price: "3500-5500", filename: "r15-v3-front-rim.jpg"},
  {name: "Rear Rim", compatible: "R15 V3 / V4", type: "Wheel", price: "4000-6000", filename: "r15-v3-rear-rim.jpg"},
  {name: "Front Disc Plate", compatible: "R15 V3 / V4", type: "Brake", price: "2500-4000", filename: "r15-v3-front-disc.jpg"},
  {name: "Rear Disc Plate", compatible: "R15 V3 / V4", type: "Brake", price: "2500-4000", filename: "r15-v3-rear-disc.jpg"},
  {name: "Brake Pad Front", compatible: "R15 V3 / V4", type: "Brake", price: "1200-2000", filename: "r15-v3-front-brake-pad.jpg"},
  {name: "Brake Pad Rear", compatible: "R15 V3 / V4", type: "Brake", price: "1200-2000", filename: "r15-v3-rear-brake-pad.jpg"},
  {name: "Aftermarket Exhaust", compatible: "R15 V3 / V4", type: "Modification", price: "6000-12000", filename: "r15-v3-exhaust.jpg"},
  {name: "Frame Slider", compatible: "R15 V3 / V4", type: "Modification", price: "2500-4500", filename: "r15-v3-frame-slider.jpg"},
  {name: "Crash Guard", compatible: "R15 V3 / V4", type: "Modification", price: "2000-3500", filename: "r15-v3-crash-guard.jpg"},
  {name: "LED Headlight", compatible: "R15 V3 / V4", type: "Modification", price: "3000-5500", filename: "r15-v3-led-headlight.jpg"},
  {name: "Wiring Harness", compatible: "R15 V3 / V4", type: "Electrical", price: "2500-4000", filename: "r15-v3-wiring.jpg"},
  {name: "Battery", compatible: "R15 V3 / V4", type: "Electrical", price: "2000-3000", filename: "r15-v3-battery.jpg"},
  {name: "Regulator Rectifier", compatible: "R15 V3 / V4", type: "Electrical", price: "1800-3000", filename: "r15-v3-regulator.jpg"},
  {name: "Ignition Coil", compatible: "R15 V3 / V4", type: "Electrical", price: "1500-2500", filename: "r15-v3-ignition-coil.jpg"},
  {name: "Self Starter Motor", compatible: "R15 V3 / V4", type: "Electrical", price: "3500-5500", filename: "r15-v3-starter-motor.jpg"},
  {name: "Starter Relay", compatible: "R15 V3 / V4", type: "Electrical", price: "800-1500", filename: "r15-v3-starter-relay.jpg"},
  {name: "Speed Sensor", compatible: "R15 V3 / V4", type: "Electrical", price: "1200-2000", filename: "r15-v3-speed-sensor.jpg"},
  {name: "TPS Sensor", compatible: "R15 V3 / V4", type: "Electrical", price: "1800-3000", filename: "r15-v3-tps.jpg"},
  {name: "Radiator Fan", compatible: "R15 V3 / V4", type: "Electrical", price: "1500-2500", filename: "r15-v3-radiator-fan.jpg"},
  {name: "Handle Bar", compatible: "R15 V3 / V4", type: "Control", price: "2000-3500", filename: "r15-v3-handle-bar.jpg"},
  {name: "Handle Switch Set", compatible: "R15 V3 / V4", type: "Control", price: "1800-3000", filename: "r15-v3-handle-switch.jpg"},
  {name: "Throttle Cable", compatible: "R15 V3 / V4", type: "Control", price: "800-1500", filename: "r15-v3-throttle-cable.jpg"},
  {name: "Front Brake Lever", compatible: "R15 V3 / V4", type: "Control", price: "500-1200", filename: "r15-v3-front-brake-lever.jpg"},
  {name: "Rear Brake Pedal", compatible: "R15 V3 / V4", type: "Control", price: "500-1000", filename: "r15-v3-rear-brake-pedal.jpg"},
  {name: "Gear Lever", compatible: "R15 V3 / V4", type: "Control", price: "700-1500", filename: "r15-v3-gear-lever.jpg"},
  {name: "Foot Rest Set", compatible: "R15 V3 / V4", type: "Control", price: "1500-2500", filename: "r15-v3-foot-rest.jpg"},
  {name: "Side Stand", compatible: "R15 V3 / V4", type: "Control", price: "800-1200", filename: "r15-v3-side-stand.jpg"},
  {name: "Main Stand", compatible: "R15 V3 / V4", type: "Control", price: "1200-2000", filename: "r15-v3-main-stand.jpg"},
  {name: "Front Suspension (Fork)", compatible: "R15 V3 / V4", type: "Suspension", price: "12000-18000", filename: "r15-v3-front-fork.jpg"},
  {name: "Rear Mono Shock", compatible: "R15 V3 / V4", type: "Suspension", price: "9000-14000", filename: "r15-v3-rear-shock.jpg"},
  {name: "Swing Arm", compatible: "R15 V3 / V4", type: "Suspension", price: "6500-10000", filename: "r15-v3-swing-arm.jpg"},
  {name: "Chain Sprocket Set", compatible: "R15 V3 / V4", type: "Drive", price: "2000-3500", filename: "r15-v3-chain-sprocket.jpg"},
  {name: "Tank Pad", compatible: "R15 V3 / V4", type: "Modification", price: "800-1500", filename: "r15-v3-tank-pad.jpg"},
  {name: "Grip Set", compatible: "R15 V3 / V4", type: "Modification", price: "500-1000", filename: "r15-v3-grip-set.jpg"},
  {name: "Short Visor", compatible: "R15 V3 / V4", type: "Modification", price: "1000-2000", filename: "r15-v3-short-visor.jpg"}
];
