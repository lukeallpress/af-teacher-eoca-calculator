console.log("JS successfully loaded")

document.addEventListener('DOMContentLoaded', function(){
  var calculateButton = document.getElementById("calculateButton")

  var resultsTable = document.getElementById("resultsTable")
  resultsTable.style.visibility = "hidden"

  calculateButton.addEventListener("click", function(){
    console.log("button pressed")
    var grade = parseFloat(document.getElementById("grade").value)
    console.log(grade)
    var aMin = grade - 5
    var aMax = grade + 5
    var bMin = grade - 16
    var bMax = grade - 6
    // Look up JS ternary statements later
    document.getElementById("aMin").innerHTML = aMin
    document.getElementById("aMax").innerHTML = aMax
    document.getElementById("bMin").innerHTML = bMin
    document.getElementById("bMax").innerHTML = bMax
    // show the table
    resultsTable.style.visibility = "visible"
  })
})





// Write an event listener for the button.

// Run calculations based on user data.

// v.1 Return those calculations as a string with a series of breaks between lines.

// v.2 Return those calculations as a table.
