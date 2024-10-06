

export class User  {
    firstName: string;
    lastName: string;
    birthDate: number |string;
    street: string;
    zipCode: number |string;
    city: string;
    email:string;
    userId:string;
    constructor(obj?:User) {
        this.firstName = obj ? obj.firstName : "";
        this.lastName = obj ? obj.lastName : "";
        this.email = obj ? obj.city : "";
        this.birthDate = obj ? obj.birthDate : "";
        this.street = obj ? obj.street : "";
        this.zipCode = obj ? obj.zipCode : "";
        this.city = obj ? obj.city : "";
        this.userId = obj ? obj.city : "";
        
    }
    
    toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            birthDate: this.birthDate,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
            userId: this.userId
          
        }
    }
}