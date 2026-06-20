const habits = [
{
name: "Exercise",
days: Array(30).fill(false)
},
{
name: "Read",
days: Array(30).fill(false)
}
];

const container =
document.getElementById("habitList");

function render(){

container.innerHTML="";

habits.forEach((habit,habitIndex)=>{

const row=document.createElement("div");
row.className="habit";

const title=document.createElement("div");
title.className="habit-name";
title.textContent=habit.name;

const grid=document.createElement("div");
grid.className="grid";

habit.days.forEach((done,dayIndex)=>{

const day=document.createElement("div");
day.className=`day ${done ? "active" : ""}`;

day.onclick=()=>{
habit.days[dayIndex]=!habit.days[dayIndex];
save();
render();
};

grid.appendChild(day);

});

row.appendChild(title);
row.appendChild(grid);

container.appendChild(row);

});

}

function save(){
localStorage.setItem(
"personaTracker",
JSON.stringify(habits)
);
}

const saved=
localStorage.getItem(
"personaTracker"
);

if(saved){
const parsed=JSON.parse(saved);
habits.splice(0,habits.length,...parsed);
}

render();

document
.getElementById("addHabit")
.onclick=()=>{

const name=
prompt("Habit name");

if(!name) return;

habits.push({
name,
days:Array(30).fill(false)
});

save();
render();
};
