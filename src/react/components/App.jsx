import { useState } from 'react';

const App = () => {
  // const [scriptResp, setScriptResp] = useState(null);

  // const getRandomUser = async () => {
  //   try {
  //     // Fetch users from the placeholder API
  //     const resp = await fetch('https://jsonplaceholder.typicode.com/users');
  //     const users = await resp.json();
  //
  //     // Pick a random user's email
  //     const randomEmail = users[Math.floor(Math.random() * users.length)].email;
  //
  //     // Query the active tab in the current window
  //     const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  //     const activeTab = tabs[0];
  //
  //     // Send the random email to the active tab and get the response
  //     const tabResp = await chrome.tabs.sendMessage(activeTab.id, randomEmail);
  //     setScriptResp(tabResp);
  //   } catch (error) {
  //     console.error('Error in getRandomUser:', error);
  //   }
  // };



  return (
    <React.Fragment>
      <div id="mainCont">
        <div id="picker_btn_cont" className="round-button">
          <img src="resources/img/tools/tool.png" style="width: 25px; height: 25px"/>
        </div>

        <div id="clear_history" className="round-button">
          <img src="resources/img/tools/delete-history.png" style="width: 25px; height: 25px"/>
        </div>

        <ul id="result">

        </ul>
      </div>
    </React.Fragment>
  );
};

export default App;