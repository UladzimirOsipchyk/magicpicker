// import { hexToFilter } from "./converter/converter";

console.log("AAAaaaaa")

document.getElementById("hiButton")?.addEventListener("click", sayHi);



log()

function sayHi() {
  console.log("Hi from script folder!!!")
  alert("Hey")
}


function log() {
  console.log("hey mudilla")
}


window.addEventListener('DOMContentLoaded', () => {
  const mainCont = document.getElementById("mainCont");
  const buttonCont = document.getElementById("picker_btn_cont");
  const resultList = document.getElementById("result");

  const GiveMetheChild = (color, msg) => {
    const errorLabel = document.createElement("p")
    errorLabel.setAttribute("class", "errorLabel")
    errorLabel.style.backgroundColor = color
    errorLabel.innerText = msg

    mainCont.appendChild(errorLabel)
    setTimeout(() => {
      mainCont.removeChild(errorLabel)
    }, 200)
  }

  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    const tab = tabs[0]

    if (tab.url === undefined || tab.url.indexOf('chrome') == 0) {
      buttonCont.innerHTML = '<span style="font-family: lobster, sans-serif"></span> can\'t access <i>Chrome pages</i>'
    }
    else if (tab.url.indexOf('file') === 0) {
      buttonCont.innerHTML = '<span style="font-family: lobster, sans-serif"></span> can\'t access <i>local pages</i>'

    } else {
      // const button = document.createElement("span")
      // button.setAttribute("id", "picker_btn")
      // button.innerText = "Pick Color"

      // const button = document.getElementById()

      buttonCont.addEventListener("click", () => {
        if (!window.EyeDropper) {
          GiveMetheChild("#ad5049", 'Your browser does not support the EyeDropper API')
          return
        }

        console.log("Clicked!!!")
        chrome.tabs.sendMessage(
          tabs[0].id,
          { from: "popup", query: "eye_dropper_clicked" }
        );
        window.close()
      })

      // buttonCont.appendChild(button)
    }
  });




  chrome.storage.local.get("color_hex_code", (resp) => {

    if (resp.color_hex_code && resp.color_hex_code.length > 0) {
      resp.color_hex_code.forEach(hexCode => {
        const item = document.createElement("div")
        const liElem = document.createElement("span")

        liElem.innerText = hexCode
        liElem.style.backgroundColor = hexCode
        liElem.style.cursor = "pointer"
        liElem.addEventListener("click", () => {
          navigator.clipboard.writeText(hexCode);
          GiveMetheChild("#e19526", "copied!")
        })

        const filterItem = document.createElement("span")

        filterItem.innerText = "Get Filter"
        filterItem.style.backgroundColor = "#EEE7E4FF"
        filterItem.style.cursor = "pointer"
        filterItem.addEventListener("click", () => {
          let filter;
          try {
            filter = hexToFilter(hexCode);
          }catch (e) {
            
          }
          console.log("FILTER GENERATED: ", filter)
        })

        item.appendChild(liElem)
        item.appendChild(filterItem)
        resultList.appendChild(item)
      })

      // const ClearButton = document.createElement("button")
      // ClearButton.innerText = "Clear Memory"
      // ClearButton.setAttribute("id", "ClearButton")
      const ClearButton = document.getElementById("clear_history")
      ClearButton.addEventListener("click", () => {
        console.log("clear...");
        chrome.storage.local.remove("color_hex_code");
        window.close()
      })
      mainCont.appendChild(ClearButton)
    }

  })

})