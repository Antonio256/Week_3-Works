/*
Contact that Conatct represents objects from n phone contacts address book.
It contains first and second names, phone number, Email address
And local address

*/
function Contact (firstName, lastName, phoneNumber,emailAddress, localAddress) {

  this.firstName = firstName,
  this.lastName = lastName,
  this.phoneNumber = phoneNumber,
  this.emailAddress = emailAddress,
  this.localAddress = localAddress
};

var contact1 = new Contact ("Atwine", "Antonio", "256772122083", "anthonybakunda@gmail.com", "firstName");
var contact1 = new Contact ("Atwine", "Antonio", "256772122083", "anthonybakunda@gmail.com", "lastName");
var contact1 = new Contact ("Atwine", "Antonio", "256772122083", "anthonybakunda@gmail.com", "phoneNumber");
var contact1 = new Contact ("Atwine", "Antonio", "256772122083", "anthonybakunda@gmail.com", "emailAddress");
var contact1 = new Contact ("Atwine", "Antonio", "256772122083", "anthonybakunda@gmail.com", "Kasangati");


console.log(contact1.firstName);
console.log(contact1.lastName);
console.log(contact1.phoneNumber);
console.log(contact1.emailAddress);
console.log(contact1.localAddress);

//Address as an object to store the city, street and COuntry
