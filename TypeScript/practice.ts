// interface User {
//   // it is used to define your custom types
//   name: string;
//   age: number;
//   address: {
//     city: string;
//     country: string;
//     pincode: number;
//   };
// }

// let user = {
//   name: "jitender",
//   age: 24,
//   address: {
//     city: "delhi",
//     country: "india",
//     pincode: 110059,
//   },
// };

// function isLegal(user): boolean {
//   return user.age > 18;
// }

// Classes in TS

// interface Shape {
//   width: number;
//   height: number;
//   area(): boolean;
// }

// class Rectangle implements Shape {
//   width: number;
//   height: number;
//   area() {
//     return this.height > 18;
//   }

//   constructor(width: number, height: number) {
//     this.width = width;
//     this.height = height;
//   }
// }

// let answer = new Rectangle(10, 19);

interface admin {
  name: string;
  permission: string;
}

interface user {
  name: string;
  age: number;
}

type UserOrAdmin = admin & user; // union -> present in both the sides

function greet(user: UserOrAdmin) {
  console.log(user.age);
}
