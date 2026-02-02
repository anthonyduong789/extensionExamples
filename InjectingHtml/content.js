// Wait for the page to load
let response
let html
// async function loadHtmlAndScript() {
//  response = await fetch('./mypage.html');
//  response = chrome.runtime.getURl("./mypage.html");
//    html = await response.text();
//    console.log(html)
// }



// Load the file
fetch(chrome.runtime.getURL('mypage.html'))
  .then(response => response.text())
  .then(res => {
    console.log(res);
    html = res;
    // document.getElementById('container').innerHTML = html;
  });


window.addEventListener('load', async () => {
  // await loadHtmlAndScript();
  // Create a new div element
  //  response = chrome.runtime.
  //  console.log(response);
  const injectedDiv = document.createElement('div');
  // Set its HTML content
  // injectedDiv.innerHTML = ` <div style=" position: fixed;
  //     top: 20px;
  //     right: 20px;
  //     background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  //     color: white;
  //     padding: 20px;
  //     border-radius: 10px;
  //     box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  //     z-index: 10000;
  //     font-family: Arial, sans-serif;
  //   ">
  //     <h3 style="margin: 0 0 10px 0;">Hello from Extension!</h3>
  //     <p style="margin: 0;">This HTML was injected by your Edge extension.</p>
  //     <button id="closeInjected" style="
  //       margin-top: 10px;
  //       padding: 5px 15px;
  //       background: white;
  //       color: #667eea;
  //       border: none;
  //       border-radius: 5px;
  //       cursor: pointer;
  //     ">Close</button>
  //   </div>
  // `;

  injectedDiv.innerHTML = html




  // injectedDiv.innerHTML = html
  console.log(html);

  // Append it to the body
  document.body.appendChild(injectedDiv);


  // Add close button functionality
  const closeButton = document.getElementById('closeInjected');
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      injectedDiv.remove();
    });
  }

  let isInjected = false;



  document.addEventListener('keydown', function (event) {
    if (event.altKey && event.key === '8') {
      // Toggle the state of isInjected
      isInjected = !isInjected;

      if (isInjected) {
        // Append the injectedDiv if it's not already appended
        if (!document.body.contains(injectedDiv)) {
          document.body.appendChild(injectedDiv);
        }
      } else {
        // Remove the injectedDiv if it's already appended
        if (document.body.contains(injectedDiv)) {
          injectedDiv.remove();
        }
      }
    }
  })
});


//   "action": {
//     "default_popup": "popup.html"
//   }