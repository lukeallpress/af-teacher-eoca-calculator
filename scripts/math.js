console.log("JS successfully loaded")

document.addEventListener('DOMContentLoaded', function(){
  resultsTable.style.visibility = "hidden"
  extra.style.display = "none"
  note.style.display = "none"
  midterm.style.display = "none"

  function makeTable() {
    document.getElementById("aRange").innerHTML = calculateGrade(90,150)
    document.getElementById("bRange").innerHTML = calculateGrade(80,90)
    document.getElementById("cRange").innerHTML = calculateGrade(70,80)
    document.getElementById("dRange").innerHTML = calculateGrade(60,70)
    document.getElementById("fRange").innerHTML = calculateGrade(0,60)
  }

  function calculateGrade(min, max){
    var grade = formgrade.value
    var writingScore = writing.value
    var weight = selection.value
    var mte = mteWeight.value
    var response = "Not Possible"
    if (grade<0 || grade>110 || writingScore<0 || writingScore>110) {
      return "Submit a valid grade"
    }
    if (weight == "Math") {
      if ((min - grade + writingScore * 0.15) / 0.15 < 100 && (max - grade + writingScore * 0.15) / 0.15 > 0) {
        response = ((min - grade + writingScore * 0.15) / 0.15 < 0) ? 0 : Math.round((min - grade + writingScore * 0.15) / 0.15)
        response += "% to "
        response += ((max - grade + writingScore * 0.15) / 0.15 > 100) ? 100 + "%": Math.round((max - grade + writingScore * 0.15) / 0.15) + "%"
      }
    } else if (weight == "English"){
      if ((min - grade + writingScore * 0.1) / 0.1 < 100 && (max - grade + writingScore * 0.1) / 0.1 > 0) {
        response = ((min - grade + writingScore * 0.1) / 0.1 < 0) ? 0 : Math.round((min - grade + writingScore * 0.1) / 0.1)
        response += "% to "
        response += ((max - grade + writingScore * 0.1) / 0.1 > 100) ? 100 + "%": Math.round((max - grade + writingScore * 0.1) / 0.1) + "%"
      }
    } else if (weight == "MTE") {
      if ((min - grade * (1 - mte/100)) * 100/mte < 100 && (max - grade * (1 - mte/100)) * 100/mte > 0) {
        response = ((min - grade * (1 - mte/100)) * 100/mte < 0) ? 0 : Math.round((min - grade * (1 - mte/100)) * 100/mte)
        response += "% to "
        response += ((max - grade * (1 - mte/100)) * 100/mte > 100) ? "100%": Math.round((max - grade * (1 - mte/100)) * 100/mte) + "%"
      }
    } else {
      if ((min - grade * 0.8) * 5 < 100 && (max - grade * 0.8) * 5 > 0) {
        response = ((min - grade * 0.8) * 5 < 0) ? 0 : Math.round((min - grade * 0.8) * 5)
        response += "% to "
        response += ((max - grade * 0.8) * 5 > 100) ? "100%": Math.round((max - grade * 0.8) * 5) + "%"
      }
    }
    return response
  }

  selection.addEventListener("change", function(){
    console.log("weight changed")
    extra.style.display = "none"
    note.style.display = "none"
    midterm.style.display = "none"
    note2.style.display = "none"
    resultsTable.style.visibility = "visible"
    if ((selection.value == "Math") || (selection.value == "English")) {
      extra.style.display = "block"
      note.style.display = "block"
    } else if (selection.value == "MTE") {
        midterm.style.display = "block"
        note2.style.display = "block"
    }
    makeTable()
  })

  formgrade.addEventListener("input", function(){
    console.log("grade changed")
    resultsTable.style.visibility = "visible"
    makeTable()
  })

  writing.addEventListener("input", function(){
    console.log("writing score changed")
    resultsTable.style.visibility = "visible"
    makeTable()
  })

  mteWeight.addEventListener("input", function(){
    console.log("mte weight changed")
    resultsTable.style.visibility = "visible"
    makeTable()
  })

})





// Write an event listener for the button.

// Run calculations based on user data.

// v.1 Return those calculations as a string with a series of breaks between lines.

// v.2 Return those calculations as a table.
