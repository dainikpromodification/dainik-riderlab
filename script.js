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

{
  name: "Yamaha R15 V3 Headlamp Indo",
  price: 19000,
  image: "images/r15v3-headlamp.jpg"
},

{
  name: "Yamaha R15 V3 ECU",
  price: 13800,
  image: "images/r15v3-ecu.jpg"
},

{
  name: "Yamaha R15 V2 Lock Set",
  price: 2800,
  image: "images/r15v2-lock.jpg"
}

];
