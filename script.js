const canvas = document.getElementById("stars");

const ctx = canvas.getContext("2d");

let width = window.innerWidth;
let height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let stars = [];

/* ================= CREATE STARS ================= */

function createStars(){

    stars = [];

    for(let i = 0; i < 900; i++){

        stars.push({

            x:Math.random() * width,

            y:Math.random() * height,

            radius:Math.random() * 2,

            alpha:Math.random() * Math.PI * 2
        });
    }
}

createStars();

/* ================= ANIMATE STARS ================= */

function animateStars(){

    ctx.clearRect(0,0,width,height);

    const gradient =
        ctx.createLinearGradient(
            0,0,width,height
        );

    gradient.addColorStop(0,"#02040a");
    gradient.addColorStop(1,"#000");

    ctx.fillStyle = gradient;

    ctx.fillRect(0,0,width,height);

    stars.forEach(star=>{

        const opacity =
            0.5 +
            Math.sin(
                Date.now() * 0.001
                + star.alpha
            ) * 0.5;

        ctx.beginPath();

        ctx.arc(
            star.x,
            star.y,
            star.radius,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            `rgba(255,255,255,${opacity})`;

        ctx.fill();
    });

    requestAnimationFrame(animateStars);
}

animateStars();

/* ================= FACTS ================= */

const facts = {

    sun:{
        title:"☀️ THE SUN",

        info:[
            "Contains 99.86% of Solar System mass",
            "Surface temperature: 5500°C",
            "Core reaches 15 million °C",
            "Light reaches Earth in 8 minutes"
        ]
    },

    mercury:{
        title:"☿ MERCURY",

        info:[
            "Closest planet to the Sun",
            "Smallest planet",
            "No atmosphere",
            "Year lasts 88 Earth days"
        ]
    },

    venus:{
        title:"♀ VENUS",

        info:[
            "Hottest planet",
            "Rotates backwards",
            "Covered with toxic clouds",
            "Called Earth's twin"
        ]
    },

    earth:{
        title:"🌍 EARTH",

        info:[
            "Only known planet with life",
            "71% covered with water",
            "Protected by magnetic field",
            "Has one Moon"
        ]
    },

    mars:{
        title:"♂ MARS",

        info:[
            "Known as Red Planet",
            "Olympus Mons volcano",
            "Ancient river evidence",
            "Future human mission target"
        ]
    },

    jupiter:{
        title:"♃ JUPITER",

        info:[
            "Largest planet",
            "Great Red Spot storm",
            "95+ moons",
            "Day lasts 10 hours"
        ]
    },

    saturn:{
        title:"♄ SATURN",

        info:[
            "Famous for rings",
            "Would float in water",
            "140+ moons",
            "Strong winds"
        ]
    },

    uranus:{
        title:"⛢ URANUS",

        info:[
            "Rotates sideways",
            "Ice giant",
            "Methane atmosphere",
            "84 Earth years around Sun"
        ]
    },

    neptune:{
        title:"♆ NEPTUNE",

        info:[
            "Farthest planet",
            "Strongest winds",
            "Deep blue atmosphere",
            "One year = 165 Earth years"
        ]
    }
};

/* ================= INFO PANEL ================= */

const infoPanel =
    document.getElementById("infoPanel");

const planetTitle =
    document.getElementById("planetTitle");

const planetInfo =
    document.getElementById("planetInfo");

document.querySelectorAll(".clickable")
.forEach(item=>{

    item.addEventListener("click",()=>{

        const planet =
            item.dataset.planet;

        const data =
            facts[planet];

        planetTitle.innerHTML =
            data.title;

        let html = "<ul>";

        data.info.forEach(fact=>{

            html += `<li>✦ ${fact}</li>`;
        });

        html += "</ul>";

        planetInfo.innerHTML = html;

        infoPanel.classList.add("active");
    });
});

/* ================= CLOSE PANEL ================= */

document.getElementById("closeBtn")
.addEventListener("click",()=>{

    infoPanel.classList.remove("active");
});

/* ================= RESIZE ================= */

window.addEventListener("resize",()=>{

    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    createStars();
});