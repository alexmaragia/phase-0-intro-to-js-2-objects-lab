// Initialize the employee object
let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  console.log("Initial employee object:", employee);
  
  // Function to update employee non-destructively
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = {
      ...employee,
      [key]: value
    };
    console.log(`Non-destructive update: key='${key}', value='${value}'`);
    console.log("Updated employee object (non-destructive):", updatedEmployee);
    return updatedEmployee;
  }
  
  // Function to update employee destructively
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    console.log(`Destructive update: key='${key}', value='${value}'`);
    console.log("Updated employee object (destructive):", employee);
    return employee;
  }
  
  // Function to delete a key from employee non-destructively
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    console.log(`Non-destructive delete: key='${key}'`);
    console.log("Updated employee object (non-destructive delete):", newEmployee);
    return newEmployee;
  }
  
  // Function to delete a key from employee destructively
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    console.log(`Destructive delete: key='${key}'`);
    console.log("Updated employee object (destructive delete):", employee);
    return employee;
  }
  
  // Exporting the functions for testing purposes
  module.exports = {
    employee,
    updateEmployeeWithKeyAndValue,
    destructivelyUpdateEmployeeWithKeyAndValue,
    deleteFromEmployeeByKey,
    destructivelyDeleteFromEmployeeByKey
  };
  
  // Test the functions
  console.log("\n--- Testing Functions ---\n");
  
  // Testing non-destructive update
  updateEmployeeWithKeyAndValue(employee, 'email', 'john.doe@example.com');
  
  // Testing destructive update
  destructivelyUpdateEmployeeWithKeyAndValue(employee, 'phone', '555-1234');
  
  // Reset employee for consistent results
  employee = { name: "John Doe", streetAddress: "123 Main St" };
  
  // Testing non-destructive delete
  deleteFromEmployeeByKey(employee, 'streetAddress');
  
  // Testing destructive delete
  destructivelyDeleteFromEmployeeByKey(employee, 'name');
  