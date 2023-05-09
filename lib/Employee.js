class Employee {
    constructor(name, id, email) {
      this._name = name;
      this._id = id;
      this._email = email;
    }
  
    get name() {
      return this._name;
    }
  
    get id() {
      return this._id;
    }
  
    get email() {
      return this._email;
    }
  
    getRole() {
      return 'Employee';
    } 
  }
  
  module.exports = Employee;
  