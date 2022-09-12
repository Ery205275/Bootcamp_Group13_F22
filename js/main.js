const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

//Bio Const
const giaSelect = document.querySelector("#giaBio");
const braviaSelect = document.querySelector("#braviaBio");
const sarojSelect = document.querySelector("#sarojBio");
const yukiSelect = document.querySelector("#yukiBio");
const aaronSelect = document.querySelector("#aaronBio");
const lalaineSelect = document.querySelector("#lalaineBio");



//Gia Enter Info Here
let gia = {
    name: "Gia Linh Nguyen",
    role: "UX/UI Design",
    bio: "I do everything you ask for. User research, Design, Branding."
};
//Elif Enter Info Here
let bravia = {
    name: "Bravia Sarikaya",
    role: "Front-end developer | Visual design",
    bio: "Bhavya is UX/UI designer, who is so much interested in learning project management and front-end developer. She contributed in research, branding & front-end development in the project."
};
//saroj Enter Info Here
let saroj = {
    name: "Saroj",
    role: "Developer",
    bio: "saroj is currently studying Interactive Media Design at Fanshawe College, He is International Student from Nepal. Expect to reach to people as well as clients as a Developer. Helping in this assignment as a developer ."
};

let yuki = {
    name: "Yuki Ngai",
    role: "Front-End Designer",
    bio: "Yuki has passion on developing design skills and apply with psychology knowledge. Fanshawe College offers her a great opportunity to develop related skills in interactive media design. Assisting in design works, website content and fixing html, css problems for this project."
};
//Aaron Enter Info here
let aaron = {
    name: "Aaron Do",
    role: "Motion Design, Developer",
    bio: "Aaron is currently studying Interactive Media Design at Fanshawe College, enjoy all creative work, brainstorm and build up ideas. Expect to reach to people as well as clients as a professional designer. Helping in this assignment as a developer and video editor."
};

//Lalaine Enter Info here
let lalaine = {

    name: "Lalaine S",
    role: "Video Producer",
    bio: "Lalaine (aka LiL) is excited to learn more! She looks forward to meeting everyone and making new friends."

};



function showGia() {
    let info = document.querySelector("#giaBio").children;

    info[1].textContent = gia.name;
    info[2].textContent = gia.role;
    info[3].textContent = gia.bio;
    console.log(gia);
}

function showBravia() {
    let info = document.querySelector("#braviaBio").children;

    info[1].textContent = bravia.name;
    info[2].textContent = bravia.role;
    info[3].textContent = bravia.bio;
    console.log(bravia);
}

function showSaroj() {
    let info = document.querySelector("#sarojBio").children;

    info[1].textContent = saroj.name;
    info[2].textContent = saroj.role;
    info[3].textContent = saroj.bio;
    console.log(saroj);
}

function showYuki() {
    let info = document.querySelector("#yukiBio").children;

    info[1].textContent = yuki.name;
    info[2].textContent = yuki.role;
    info[3].textContent = yuki.bio;
    console.log(yuki);
}

function showAaron() {
    let info = document.querySelector("#aaronBio").children;

    info[1].textContent = aaron.name;
    info[2].textContent = aaron.role;
    info[3].textContent = aaron.bio;
    console.log(aaron);
}
function showLalaine() {
    let info = document.querySelector("#lalaineBio").children;

    info[1].textContent = lalaine.name;
    info[2].textContent = lalaine.role;
    info[3].textContent = lalaine.bio;
    console.log(lalaine);
}





//Event Listeners for Bio
giaSelect.addEventListener('click', showGia);
braviaSelect.addEventListener('click', showBravia);
sarojSelect.addEventListener('click', showSaroj);
yukiSelect.addEventListener('click', showYuki);
aaronSelect.addEventListener('click', showAaron);
lalaineSelect.addEventListener('click', showLalaine);

