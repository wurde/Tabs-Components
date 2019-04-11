'use strict'

/**
 * Define component
 */

class Dropdown {
  constructor(element) {

    // Assign this.element to the dropdown element
    this.element

    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector()

    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content

    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => {

    })
  }

  toggleContent() {

    // Toggle the ".dropdown-hidden" class off and on
    this.content
  }
}

/**
 * Attach component to DOM
 */

let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown))
