class Employee {
    constructor(name, salary, hireDate) {
      this.name = name;
      this.salary = salary;
      this.hireDate = hireDate;
    }
    getName() {
      console.log(this.name.toUpperCase());
    }
    getSalary() {
      console.log(this.salary);
    }
    getHireDate() {
      console.log(this.hireDate);
    }
  }
  class Manager extends Employee {
      constructor( name, hireDate, salary, descriptionOfJob) {
        super(name, salary, hireDate);
        this. descriptionOfJob = descriptionOfJob;
      }
      jobDescription(){
        console.log(this.name + " was hired on " + this.hireDate + " and makes " + this.salary + " and always will be the  " + this.jobDescriptionOfJob);
    }
  }
  
  class Designer extends Employee {
       constructor(name, hireDate, salary, experience) {
         super(name, salary, hireDate);
         this.experience = experience;
       }
       yearsExperience() {
        console.log (this.name + " was hired on " + this.hireDate + " and makes " + this.salary + " and has " + this.experience);
   }
  }

   class SalesAssociate extends Employee {
       constructor(name, hireDate, salary, degrees) {
         super(name, salary, hireDate);
        this.degrees = degrees;
       }
       degreeCompleted() {
        console.log (this.name + " was hired on " + this.hireDate + " and makes " + this.salary + " and has Computer Science " + this.degrees);
       }
      }
  
   let Jesus = new Manager("Jesus", "7/7/2017" , 77777, "King of Kings.");
    Jesus.jobDescription();
   let Christ = new Designer("Christ","1/1/2011", 1111111, "Infinite years experience");
   Christ.yearsExperience();
   let Paul = new SalesAssociate ("Paul","2/2/2012", 80000, "Masters Degree");
   Paul.degreeCompleted();