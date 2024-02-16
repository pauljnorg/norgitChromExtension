// menu-functionality.js
// Selecting the toggle and menu elements
let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');

//console.log(toggle);
//console.log(menu);

// Event listener for click on the toggle button
toggle.onclick = function(){
   menu.classList.toggle('active') // Toggle 'active' class on the menu
   applyTransform();// Call the function to apply transformations to li elements
   //console.log("clicked");
}

// Select all li elements within the menu
const listItems = document.querySelectorAll('.menu li');

// Function to apply transformation to each li element
function applyTransform() {
   const radius = 75; // Radius for positioning the li elements in a circle
   const isActive = menu.classList.contains('active'); // Check if the menu is active

   // Loop through each li element
   listItems.forEach((li, index) => {
      if (isActive) {
         // Calculate the angle (for example, for a circular layout)
         const angle = 360 / listItems.length * index; // Calculate the angle for each item
         const radians = angle * Math.PI / 180; // Convert angle to radians for x, y calculation
         //console.log("angle");

        // Calculate x and y position based on the angle
        const x = Math.cos(radians) * radius;
        const y = Math.sin(radians) * radius;
        //console.log(angle + " " + radians + " " + x + " " + y);

         // Apply the transform
         
         li.style.transform = `translate(${x+13}px, ${y-15}px) scale(1.5)`;
         //console.log(li + " out " + index);


      } else {
         // If not active, reverse the transformation
         li.style.transform = 'translate(-50%, -50%) scale(0)';
         //console.log(li + " in " + index);

      }
   });
}
