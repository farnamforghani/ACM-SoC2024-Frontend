const username = document.getElementById('name');
const math = document.getElementById('math');
const physics = document.getElementById('physics');
const chemistry = document.getElementById('chemistry');
const addBtn = document.getElementById('add');
const rankBtn = document.getElementById('calculate');
const resetBtn = document.getElementById('reset');
const list = document.getElementById('rates');

class Student {
    constructor(name, mathscore, physicsscore, chemistryscore) {
        this.name = name;
        this.math = mathscore;
        this.physics = physicsscore;
        this.chemistry = chemistryscore;
    }
    user() {
        return this.name;
    }
    grade() {
        let score = (parseFloat(this.math) * 3 + parseFloat(this.physics) * 2 + parseFloat(this.chemistry)) / 6
        score = score.toFixed(2);
        return score;
    }
}

let Students = [];

addBtn.addEventListener('click', (e) => {
    if (username.value.length == 0) {
        alert("Please enter the name!");
    }
    else if (math.value.length == 0 || physics.value.length == 0 || chemistry.value.length == 0) {
        alert("Please enter grades completely!");
    }
    else if (parseInt(math.value) < 0 || parseInt(math.value) > 20 || parseInt(physics.value) < 0 || parseInt(physics.value) > 20 || parseInt(chemistry.value) < 0 || parseInt(chemistry.value) > 20) {
        alert("Please enter a number in range of [0,20] for grades!");
    }
    else {
        const li = document.createElement('li');
        let stud = new Student(username.value, math.value, physics.value, chemistry.value)
        Students.push(stud);
        let s = stud.user().toString() + ": " + (stud.grade().toString())
        li.textContent = s;
        li.style.fontFamily = "sans-sherif";
        li.style.fontSize = "15px";
        list.appendChild(li);
    }
});

rankBtn.addEventListener('click', (e) => {
    if (Students.length == 0) {
        alert("you have no students!");
    }
    else {
        while (list.children.length !== 1) {
            list.removeChild(list.lastElementChild);
        }
        const ol = document.createElement('ol');
        list.appendChild(ol);
        for (let i = 0; i < Students.length; i++) {
            for (let j = 0; j < Students.length - 1; j++) {
                if (Students[j].grade() < Students[j + 1].grade()) {
                    let ss = Students[j + 1];
                    Students[j + 1] = Students[j];
                    Students[j] = ss;
                }
            }
        }
        const p = document.createElement('p');
        p.textContent = "The first student: " + Students[0].user().toString()
        ol.appendChild(p);
        for (let i = 0; i < Students.length; i++) {
            let li = document.createElement('li');
            let s = Students[i].user().toString() + ": " + (Students[i].grade().toString())
            li.textContent = s;
            li.style.fontFamily = "sans-sherif";
            li.style.fontSize = "15px";
            ol.appendChild(li);
        }
    }
});

resetBtn.addEventListener('click', (e) => {
    while (Students.length != 0) {
        Students.pop();
    }
    while (list.children.length !== 1) {
        list.removeChild(list.lastElementChild);
    }
});