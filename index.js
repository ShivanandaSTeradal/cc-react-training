function handler(event) {
  const value = event.target.innerText
  const display = document.getElementById("display")
  
  switch(value) {
    case "CE":
      display.innerText = ""
      break

    case "Del":
      display.innerText = display.innerText.slice(0, -1)
      break
      
    case "=":
      display.innerText = eval(display.innerText)
      break
    
    default:
      display.innerText += value
  }
}

Array
 
 .from(
    document.getElementsByTagName("td")
  )
  .forEach(
    (td) => {
      td.addEventListener("click", handler)
    }
  )