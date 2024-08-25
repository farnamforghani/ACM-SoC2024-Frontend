const ColorDiv = document.getElementById('back')
const ColorInput = document.getElementById('color-input');
const Title = document.getElementById('htmltext');
const InvalidText = document.getElementById('backtext')


ColorInput.addEventListener('input', (e) => {
    
    if (parseInt(e.target.value.length) == 0) {
        ColorDiv.style.backgroundColor = "#000000";
        Title.style.color = "#ffffff";
        InvalidText.style.display = "none";
    }
    else if ((parseInt(e.target.value.length) != 3 && parseInt(e.target.value.length) != 4 && parseInt(e.target.value.length) != 6 && parseInt(e.target.value.length) != 8) || (e.target.value.search(/^([0-9]|[abcdfe])+$/) == -1)) {
        InvalidText.style.display = "block";
        ColorDiv.style.backgroundColor = "#000000";
        Title.style.color = "#ffffff";
    }
    else {
        ColorDiv.style.backgroundColor = `#${e.target.value}`;
        Title.style.color = `#${e.target.value}`;
        InvalidText.style.display = "none";
    }

});