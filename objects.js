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

var contact1 = new Contact ("Atwine", "Antonio", "256772122083", "anthonybakunda@gmail.com", ["Kampala", "Kamwokya", "Uganda"]);

//console.log(contact1.localAddress);

//Address as an object to store the city, street and Country

  contact1.address = function (){
    console.log(this.localAddress[0] + ","+this.localAddress[1]+" "+this.localAddress[2]);
  }
console.log(contact1.address());
console.log(contact1);
