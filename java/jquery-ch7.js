// Function to toggle the dropdown content for a specific item
function toggleDropdown(item) {
    const dropdownContent = item.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('show');
  }
  
  // Function to handle the click on a dropdown option and navigate to services.html
  function handleOptionClick(option) {
    // Get the URL of services.html
    const servicesPageUrl = 'services.html';
  
    // Navigate to services.html
    window.location.href = servicesPageUrl;
  }
  
  // Get the list and its items
  const page = document.getElementById('page');
  const itemList = page.querySelector('ul');
  const items = itemList.querySelectorAll('li');
  
  // Iterate through the items and add dropdown functionality
  items.forEach(item => {
    // Wrap the original text content with a <span> element
    const originalText = item.textContent;
    item.innerHTML = '';
    const span = document.createElement('span');
    span.textContent = originalText;
    item.appendChild(span);
  
    // Create a dropdown button
    const button = document.createElement('button');
    button.textContent = 'Dropdown'; // You can customize the button text
  
    // Create a dropdown content container for each item
    const dropdownContent = document.createElement('ul');
    dropdownContent.className = 'dropdown-content';
  
    // Create dropdown options
    const options = ['Diagnosis $50', 'Repair Starting at $125', 'Rebuilds Starting at $200'];
    options.forEach(optionText => {
      const option = document.createElement('li');
      option.textContent = optionText;
  
      // Add a click event listener to each option
      option.addEventListener('click', () => handleOptionClick(option));
  
      dropdownContent.appendChild(option);
  
      // Add CSS styles for hovering over dropdown options
      option.addEventListener('mouseenter', () => {
        option.style.backgroundColor = 'darkgreen';
        option.style.color = 'white';
      });
  
      option.addEventListener('mouseleave', () => {
        option.style.backgroundColor = ''; // Restore original background color
        option.style.color = ''; // Restore original text color
      });
    });
  
    // Add the button and dropdown content to the item
    item.appendChild(button);
    item.appendChild(dropdownContent);
  
    // Add a click event listener to the button to toggle the dropdown
    button.addEventListener('click', () => toggleDropdown(item));
  
    // Add CSS styles for hovering over list items
    item.addEventListener('mouseenter', () => {
      item.style.backgroundColor = 'darkgreen';
      span.style.color = 'white';
    });
  
    item.addEventListener('mouseleave', () => {
      item.style.backgroundColor = ''; // Restore original background color
      span.style.color = ''; // Restore original text color
    });
  });
  
  // Close all dropdowns if the user clicks outside of them
  window.addEventListener('click', (event) => {
    items.forEach(item => {
      const dropdownContent = item.querySelector('.dropdown-content');
      if (event.target !== item && !dropdownContent.contains(event.target)) {
        dropdownContent.classList.remove('show');
      }
    });
    $(document).ready(function() {
        // Add a click event handler for the Checkout button
        $('#showForm').click(function(event) {
          // Prevent the default form submission behavior
          event.preventDefault();
  
          // You can add your custom logic here when the Checkout button is clicked
          // For example, you can show a message or perform some actions.
          alert('Checkout button clicked!');
        });
      });
  });