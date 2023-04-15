// Using 'new' with functions 
log = console.log;
function Car(make,model) {
    //log(this)
    this.props = { 
        make,
        model
    };
    let info = function () {
        return this.props
    }
}

Car.prototype.info = function () {
    return this.props;
}

let c1 = new Car('hoonde','accod');
console.log(c1);

// c1.info()
// {make: 'hoonde', model: 'accod'}

