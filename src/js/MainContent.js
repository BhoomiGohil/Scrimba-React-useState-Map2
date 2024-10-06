import React from "react";

export default function MainContent() {
  // State to manage the array of things
  const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"]); // Initializing state with two items

  // Function to add a new item to the array
  function addItem() {
    setThingsArray((prevState) => {
      // Using a functional update to safely add an item to the previous state
      return [...prevState, `Thing ${prevState.length + 1}`]; // Creating a new array with the new item added
    });
  }

  // Mapping through the array to create a paragraph element for each item
  const thingsElements = thingsArray.map((thing) => <p key={thing}>{thing}</p>); // Using the item's value as a key

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {/* Button to trigger addItem function */}
      {thingsElements} {/* Rendering the list of things */}
    </div>
  );
}
