

class User{
private firstName: string
private lastName: string
private address: string
private phoneNumber: string 

constructor(firstName, lastName, address, phoneNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address
    this.phoneNumber = phoneNumber
}


//Setters and getters
getFirstName() : string{
    return this.firstName
}

setFirstName (fName: string) : void{
    this.firstName = fName
}



}