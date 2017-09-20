console.log("JS successfully loaded")

document.addEventListener('DOMContentLoaded', function(){
  // var calculateButton = document.getElementById("calculateButton")
  document.getElementById("grade").defaultValue = "75";
  document.getElementById("aRange").innerHTML = calculateGrade(75,90,100)
  document.getElementById("bRange").innerHTML = calculateGrade(75,80,90)
  document.getElementById("cRange").innerHTML = calculateGrade(75,70,80)
  document.getElementById("dRange").innerHTML = calculateGrade(75,60,70)
  document.getElementById("fRange").innerHTML = calculateGrade(75,0,60)
  var resultsTable = document.getElementById("resultsTable")
  resultsTable.style.visibility = "visible"

  //resultsTable.style.visibility = "hidden"

  function calculateGrade(grade, min, max){
    var response = "Not Possible"
    if (grade<0 || grade>110) {
      return "Submit a valid grade"
    }
    if ((min - grade * 0.8) * 5 < 100 && (max - grade * 0.8) * 5 > 0) {
      response = ((min - grade * 0.8) * 5 < 0) ? 0 : Math.round((min - grade * 0.8) * 5)
      response += "% to "
      response += ((max - grade * 0.8) * 5 > 100) ? "100%": Math.round((max - grade * .8) * 5) + "%"
    }
    return response
  }

  /*
  calculateButton.addEventListener("click", function(){
    console.log("button pressed")
    var grade = parseFloat(document.getElementById("grade").value)
    console.log(grade)
    // calculate ranges
    document.getElementById("aRange").innerHTML = calculateGrade(grade,90,100)
    document.getElementById("bRange").innerHTML = calculateGrade(grade,80,90)
    document.getElementById("cRange").innerHTML = calculateGrade(grade,70,80)
    document.getElementById("dRange").innerHTML = calculateGrade(grade,60,70)
    document.getElementById("fRange").innerHTML = calculateGrade(grade,0,60)
    // show the table
    resultsTable.style.visibility = "visible"
  })
*/

  grade.addEventListener("input", function(){
    console.log("value changed")
    var grade = parseFloat(document.getElementById("grade").value)
    console.log(grade)
    // calculate ranges
    document.getElementById("aRange").innerHTML = calculateGrade(grade,90,100)
    document.getElementById("bRange").innerHTML = calculateGrade(grade,80,90)
    document.getElementById("cRange").innerHTML = calculateGrade(grade,70,80)
    document.getElementById("dRange").innerHTML = calculateGrade(grade,60,70)
    document.getElementById("fRange").innerHTML = calculateGrade(grade,0,60)
    // show the table
    resultsTable.style.visibility = "visible"
  })

})





// Write an event listener for the button.

// Run calculations based on user data.

// v.1 Return those calculations as a string with a series of breaks between lines.

// v.2 Return those calculations as a table.
