class User {
    constructor(email, password, firstName, lastName, city, address, phone) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.address = address;
        this.phone = phone;
    }
}

module.exports = User;
