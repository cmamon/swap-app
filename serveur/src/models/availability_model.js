class Availability {
    constructor(availabilityId, propOrServ, propOrServId, days) {
        this.availabilityId = availabilityId;
        this.propOrServ = propOrServ;
        this.propOrServId = propOrServId;
        this.days = days;
    }
}

module.exports = Availability;
