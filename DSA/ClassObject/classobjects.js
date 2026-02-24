// class Person {
//     constructor(username) {
//         this.username = username
//     }
//     getUser() {
//         console.log(this.username)
//     }
// }


// const p1 = new Person("Sundari")
// p1.getUser()


// const p2 = new Person("Tinku")
// p2.getUser()




class Car {
    constructor(name, color, price) {
        this.name = name
        this.color = color
        this.price = price
    }

    // getDetails() {
    //     console.log("Car Name:", this.name)
    //     console.log("Car Color:", this.color)
    //     console.log("Car Price:", this.price)
    // }

    getDetails() {
        console.log(`Car: ${this.name}, Color: ${this.color}, Price: ${this.price}`)
    }

}

const c1 = new Car("Nexon", "Blue", 1200000)
c1.getDetails()

//Object creation

const c2 = new Car("Suzuki", "Red", 1200000)
c2.getDetails()

const c3 = new Car("Kia", "Black", 1000000)
c3.getDetails()
