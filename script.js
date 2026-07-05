// BodyFuel Diet Planner Script

function calculateDiet(){

    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    if(!name || !age || !height || !weight){
        alert("Please fill all details");
        return;
    }

    const bmi = (weight / ((height/100) * (height/100))).toFixed(1);

    let status = "";
    let diet = "";

    if(bmi < 18.5){
        status = "Underweight";
        diet = "High protein diet, milk, banana, nuts, and healthy calories.";
    }
    else if(bmi < 25){
        status = "Normal";
        diet = "Balanced diet with dal, roti, vegetables, fruits, and protein.";
    }
    else {
        status = "Overweight";
        diet = "Low calorie diet, more salads, fruits, and daily walking.";
    }

    document.getElementById("result").innerHTML = `
        <h3>Hello ${name}</h3>
        <p><strong>BMI:</strong> ${bmi}</p>
        <p><strong>Status:</strong> ${status}</p>
        <p><strong>Diet Suggestion:</strong> ${diet}</p>
    `;
}
