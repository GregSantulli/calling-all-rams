let name = "[name]";
let classYear = "[year]"

function updateName(input){
  name = input
  updateFirstLine()
}

function updateClassYear(input){
  classYear = input
  updateFirstLine()
}

function getFirstLine(){
  return "This is " + name + " from Fordham Class of " + classYear + ". I am a proud Fordham Ram." 
}

function updateFirstLine(){
  document.getElementById("first-line").innerText = getFirstLine()
  document.getElementById("body-text").innerText = BODY_TEXT
}

const BODY_TEXT = "We appreciate your statement on the death of George Floyd. We specifically call on Fordham to divest from the NYPD and to donate to NYC Bail Funds in support of those protesting racial injustice right now. We look to you for actionable leadership regarding the university's commitment to racial justice for Black lives."

function getLetterContent(){
  return [
    "Hi Father McShane,",
    getFirstLine(),
    BODY_TEXT,
    "Thank you."
  ]
}

function validInfo() {
  if (name == "[name]" || name == ""){
    alert("Please enter a name")
    return false
  } else if (classYear == "[year]" || classYear == "") {
    alert("Please enter a class year")
    return false
  }
  return true
}

function sendEmail(){
  if (!validInfo()) return
  url = "mailto:president@fordham.edu?" +
    "&subject=Fordhams%20Commitment%20to%20Racial%20Justice" +
    "&body=" + getLetterContent().join("%0A%0A")
  window.open(url, '_blank')
}

function copyToClipboard(element) {
  if (!validInfo()) return
  var text = getLetterContent().join("\r\n\r\n")
  element = $('<textarea>').appendTo('body').val(text).select()
  document.execCommand('copy')
  element.remove()
  alert("Text copied to clipboard")
}

updateFirstLine()
