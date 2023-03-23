 function clrOutput(){
    document.getElementById("output").innerHTML = "";}

function btnclr(){
    document.getElementById("inputValue").innerHTML = "";
}
    
    
     // Print All Cities
    var cities = ['Faisalabad', ' Lahore', ' Karachi', ' Islamabad', ' Peshawar', ' Quetta', ' Multan'];
    function printAllCities() {
    
        document.getElementById("output").innerHTML = " ";
    
    
        for (let i = 0; i < cities.length; i++) {
            let num = i + 1;
            document.getElementById("output").innerHTML += num + ') ' + cities[i] + '<br>';
    
        }
    
    }
    
    
    // AddYourCity
    function addCity() {
        let city = document.getElementById("input").value;
    
        if (city.length < 3) {
            
            alert("Type your City Correctly.");
            return;
        }
    
        let firstWord = city.slice(0, 1).toUpperCase();
        let secondWord = city.slice(1).toLowerCase();
        let fullWordCity = firstWord + secondWord;
    
        let foundWordCity = false;
    
        for (i = 0; i < cities.length; i++) {
            if (cities[i] === fullWordCity) {
                foundWordCity = true;
                let html = '<span style="color:red; font-size: 20px;">' + fullWordCity + '</span> is already in list. &#128524 ';
                document.getElementById("output").innerHTML = html;
            }
        }
        if (foundWordCity === false) {
            cities.push(fullWordCity);
            let html = '<span style="color:green; font-size:20px;">' + fullWordCity + '</span> added your city in List. &#128151';
            document.getElementById("output").innerHTML = html;
        }
    }
    // 52.52