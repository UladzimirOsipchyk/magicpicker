console.log("content script injected")

window.addEventListener('keypress',function(key){
  console.log(key.code)
  let keyvalue = key.code

  if (key.code === "KeyQ") {
    setTimeout(() => {

      const eyeDropper = new EyeDropper();
      eyeDropper.open().then(result => {
        console.log("Results: ", result)
        chrome.storage.local.get("color_hex_code", (resp) => {
          if (resp.color_hex_code && resp.color_hex_code.length > 0) {
            chrome.storage.local.set({ "color_hex_code": [...resp.color_hex_code, result.sRGBHex] })
          }
          else {
            chrome.storage.local.set({ "color_hex_code": [result.sRGBHex] })
          }
        })
      }).catch(e => {
        console.log(e)
      })
    }, 10);
  }

  chrome.runtime.sendMessage(null, keyvalue, (response)=>{
    console.log("Sent key value" + response)
  })
})

chrome.runtime.onMessage.addListener((message, sender) => {
  console.log("MessageEvent >>>> ")
  console.log("message: ", message)
  console.log("sender: ", sender)
  if ((message.from === "popup" && message.query === "eye_dropper_clicked") || message === "KeyQ") {

    setTimeout(() => {

      const eyeDropper = new EyeDropper();
      eyeDropper.open().then(result => {
        console.log("Results: ", result)
        chrome.storage.local.get("color_hex_code", (resp) => {
          if (resp.color_hex_code && resp.color_hex_code.length > 0) {
            chrome.storage.local.set({ "color_hex_code": [...resp.color_hex_code, result.sRGBHex] })
          }
          else {
            chrome.storage.local.set({ "color_hex_code": [result.sRGBHex] })
          }
        })
      }).catch(e => {
        console.log(e)
      })
    }, 10);
  }
})