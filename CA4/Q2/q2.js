const themeLight = document.getElementById('sun');
const themeDark = document.getElementById('moon');
const LearnTruth = document.getElementById('scrollbutton');

if (localStorage.getItem("data-theme") == "dark") {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeLight.style.display = "block";
    themeDark.style.display = "none";
}
else if (localStorage.getItem("data-theme") == "light") {
    document.documentElement.setAttribute('data-theme', 'light');
    themeDark.style.display = "block";
    themeLight.style.display = "none";
}

themeLight.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', 'light');
    themeDark.style.display = "block";
    themeLight.style.display = "none";
    localStorage.setItem("data-theme", "light");
});

themeDark.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeLight.style.display = "block";
    themeDark.style.display = "none";
    localStorage.setItem("data-theme", "dark");
});

LearnTruth.addEventListener('click', () => {
    document.getElementById('page2').scrollIntoView({
        behavior: 'smooth'
    });
})