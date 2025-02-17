window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); 
        }
    });
}, {
    threshold: 0.8
});

document.querySelectorAll('.fade-in-text').forEach((el) => observer.observe(el));


/*---------back to top button----------*/

window.addEventListener("scroll", function() {
    const button = document.getElementById("back-to-top");
    if (window.scrollY > 200) {  
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
});

document.getElementById("back-to-top").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"  
    });
});


window.addEventListener("scroll", function() {
    const button = document.getElementById("back-to-top");
    if (window.scrollY > 200) {
        button.classList.add("show");
    } else {
        button.classList.remove("show");
    }
});

/*Drop nav technology*/

document.addEventListener("DOMContentLoaded", function () {
    let techNavItem = document.querySelector(".navbar ul li:nth-child(2) a"); 
    let dropdownMenu = document.querySelector("nav-drop-down-technology");

    techNavItem.addEventListener("click", function (event) {
        event.preventDefault(); 
        dropdownMenu.classList.toggle("active"); 
    });

   
    document.addEventListener("click", function (event) {
        if (!dropdownMenu.contains(event.target) && event.target !== techNavItem) {
            dropdownMenu.classList.remove("active");
        }
    });
});

/*Drop nav Services*/

document.addEventListener("DOMContentLoaded", function () {
    let techNavItem = document.querySelector(".navbar ul li:nth-child(3) a"); 
    let dropdownMenu = document.querySelector("nav-drop-down-services");

    techNavItem.addEventListener("click", function (event) {
        event.preventDefault(); 
        dropdownMenu.classList.toggle("active"); 
    });

   
    document.addEventListener("click", function (event) {
        if (!dropdownMenu.contains(event.target) && event.target !== techNavItem) {
            dropdownMenu.classList.remove("active");
        }
    });
});

/*-------------------------------------Lan drop--------------------------------------------*/

let translations = {}; 

function loadTranslations() {
    fetch("/public/JS/translations.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            translations = data;
            console.log("Translations loaded:", translations);

            let savedLang = localStorage.getItem("selectedLanguage") || "en";
            changeLanguage(savedLang, false); 
        })
        .catch(error => console.error("Error loading translations:", error));
}


document.addEventListener("DOMContentLoaded", loadTranslations);

function changeLanguage(lang, save = true) {
    if (!translations || !translations[lang]) {
        console.error("Error: translations not loaded or missing language:", lang);
        return;
    }

    console.log(`Applying language: ${lang}`);

    const elements = [
        "nav-Home", "nav-tech", "nav-services", "nav-partners",
        "nav-costumers", "nav-cu", "foo-au-h", "foo-au",
        "content-foo", "content-tech-body-1", "content-tech-body-2",
        "content-service-body","foo-ql-h","foo-Home","foo-tech","foo-services",
        "foo-partners","foo-costumers","foo-cu","foo-cu-2","foo-arr","nav-tech-2",
        "contact-us","contact-us-send"
    ];

    elements.forEach(id => {
        let element = document.getElementById(id);
        if (element && translations[lang][id]) {
            element.innerText = translations[lang][id];
        } else {
            console.warn(`Missing element or translation: ${id}`);
        }
    });

    document.body.style.textAlign = lang === "he" ? "right" : "left";

    if (save) {
        localStorage.setItem("selectedLanguage", lang);
    }

    let dropdown = document.getElementById("languageDropdown");
    if (dropdown && dropdown.classList.contains("show")) { 
        toggleDropdown(); 
    }
}

function toggleDropdown() {
    let dropdown = document.getElementById("languageDropdown");
    if (dropdown) {
        dropdown.classList.toggle("show");
    }
}

document.addEventListener("click", function(event) {
    let dropdown = document.getElementById("languageDropdown");
    let icon = document.querySelector(".language-icon");

    if (dropdown && icon && !icon.contains(event.target) && dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
    }
});
