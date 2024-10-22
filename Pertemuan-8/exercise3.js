const person = {
    name: 'Imelda',
    weight: 44, // in kilograms
    height: 1.49, // in meters (149 cm converted to meters)
    
    calculateBMI: function() {
      // Calculate BMI
      const bmi = this.weight / (this.height * this.height);
      
      // Add bmiValue property with the result
      this.bmiValue = bmi;
      
      // Return BMI so it can be used outside the function if needed
      return bmi;
    },
    
    // Provide a method to get the BMI category
    bmiCategory: function() {
      const bmi = this.calculateBMI();
      
      if (bmi < 18.5) return 'Underweight';
      if (bmi >= 18.5 && bmi < 24.9) return 'Normal weight';
      if (bmi >= 25 && bmi < 29.9) return 'Overweight';
      return 'Obesity';
    },
    
    // Provide a method to display name and BMI result
    displayInfo: function() {
      const bmi = this.calculateBMI();
      const category = this.bmiCategory();
      console.log(`Name: ${this.name}`);
      console.log(`BMI: ${bmi.toFixed(2)}`); // Display BMI with 2 decimal places
      console.log(`Category: ${category}`);
    }
  };
  
  // Example usage
  person.displayInfo(); // Display name, BMI, and category
  