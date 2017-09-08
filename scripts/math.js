console.log("JS successfully loaded")

document.addEventListener('DOMContentLoaded', function(){
  var calculateButton = document.getElementById("calculateButton")

  var resultsTable = document.getElementById("resultsTable")
  resultsTable.style.visibility = "hidden"

  calculateButton.addEventListener("click", function(){
    console.log("button pressed")
    var grade = parseFloat(document.getElementById("grade").value)
    console.log(grade)
    var aMin = (90 - grade*.8)*5
    var aMax = (100-grade*.8)*5
    var bMin = (80 - grade*.8)*5
    var bMax = (90 - grade*.8)*5
    var cMin = (70 - grade*.8)*5
    var cMax = (80 - grade*.8)*5
    var dMin = (60 - grade*.8)*5
    var dMax = (70 - grade*.8)*5
    var fMin = (0 - grade*.8)*5
    var fMax = (70 - grade*.8)*5
    // Look up JS ternary statements later
    document.getElementById("aMin").innerHTML = aMin
    document.getElementById("aMax").innerHTML = aMax
    document.getElementById("bMin").innerHTML = bMin
    document.getElementById("bMax").innerHTML = bMax
    document.getElementById("cMin").innerHTML = cMin
    document.getElementById("cMax").innerHTML = cMax
    document.getElementById("dMin").innerHTML = dMin
    document.getElementById("dMax").innerHTML = dMax
    document.getElementById("fMin").innerHTML = fMin
    document.getElementById("fMax").innerHTML = fMax
    // show the table
    resultsTable.style.visibility = "visible"
  })
})





// Write an event listener for the button.

// Run calculations based on user data.

// v.1 Return those calculations as a string with a series of breaks between lines.

// v.2 Return those calculations as a table.
