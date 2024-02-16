


/* <div class="avatar toggle">
        <img src="Frog.png" alt="Frogs Against Cancer">
    </div>

 */

/* <li style="--i:0;">
<a href="#"><i class="fa-solid fa-ghost fa-lg"></i></a>
</li> */

    // get numKeys - the number of menu items
    // iterate through all numKeys as key.n

/*    
    numKeys - the number of menu items key.n - the key format for each key name, key.1, key.2 and so on
    key.n - value is URL for target
    icon.n - value is the Fontawesome name for the icon to be used
     */

  // Create the popout menu list item

setValue('numKeys',2);

setValue('key.1','https://www.facebook.com/pnorg/');
setValue('icon.1','fa-facebook');

setValue('key.2','http://google.com');
setValue('icon.2','fa-ghost');


async function createList() {
    var target = document.querySelector('.list-container'); // Target list container
  
    try {
      const numKeys = await getValue('numKeys'); // Assume numKeys is stored and retrieved correctly
  
      for (let i = 1; i <= numKeys; i++) {
        const keyUrl = await getValue(`key.${i}`);
        const iconClass = await getValue(`icon.${i}`);
  
        var li = document.createElement("li");
        var ali = document.createElement("a");
        ali.href = keyUrl; // Use the dynamically retrieved URL
        ali.setAttribute('aria-label', `Visit page ${i}`); 
        ali.innerHTML = `<i class="fab fa-lg ${iconClass}"></i>`; // Use the dynamically retrieved icon class
        li.appendChild(ali);
  
        target.appendChild(li);
      }
    } catch (error) {
      console.error("Failed to create list:", error);
    }
  }
  


  document.addEventListener('DOMContentLoaded', async function() {
    createList();// Make sure this runs after the DOM is fully loaded
  
    // Your existing logic to dynamically create and append list items
  });




/*   var liFacebook = document.createElement("li");
  var aFacebook = document.createElement("a");
  aFacebook.href = "https://www.facebook.com/pnorg/";
  aFacebook.setAttribute('aria-label', "Visit Facebook page"); 
  aFacebook.innerHTML = '<i class="fab fa-lg fa-facebook"></i>';
  liFacebook.appendChild(aFacebook); */

/*     <div class="avatar toggle">
        <img src="Frog.png" alt="Frogs Against Cancer">
    </div>
    <!--<a class="buycoffee" href="https://www.buymeacoffee.com/paulnorg" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>-->
    <!-- Toggle button for the menu -->
    <!-- div class="toggle"><ion-icon name="home-outline"></ion-icon></div> -->

    <!-- Menu items (li) with a CSS variable for their index -->
    <!-- Note: Ideally, li elements should be inside a ul or ol -->
    <li style="--i:0;">
        <a href="#"><i class="fa-solid fa-ghost fa-lg"></i></a>
    </li> */

    async function getValue(key) {
        try {
          const result = await chrome.storage.sync.get([key]);
          console.log("Value is " + result[key]); // Optional: for logging
          return result[key]; // Return the value associated with the key
        } catch (error) {
          console.error(`Error getting value for key "${key}":`, error);
          throw error; // Re-throw the error if you want to allow the caller to handle it
        }
      }

      async function setValue(key, value) {
        try {
          await chrome.storage.sync.set({ [key]: value });
          console.log("Value is set for key:", key);
        } catch (error) {
          console.error(`Error setting value for key "${key}":`, error);
          throw error; // Re-throw the error if you want to allow the caller to handle it
        }
      }

      data = getValue('preferences');

      chrome.storage.sync.get(null, function(data) {
        Object.keys(data).forEach(key => {
          console.log(`${key}: ${JSON.stringify(data[key])}`);
        });
      });