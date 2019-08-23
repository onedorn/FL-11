// 1. Create a function which finds max element in array
const arr1 = [1, 2, 3, 4, 56, 7, 8, 76, 5, 241, 5, 356, 567, 2];
const maxElement = arr1 => {
  return Math.max(...arr1);
};

console.log(`Max number from array is: ${maxElement(arr1)}`);


// 2. Create a function which copies array
const array = [1, 2, 3];
const copiedArray = copyArray(array);

function copyArray(arr) {
  return [...arr];
}

console.log(array, copiedArray);


// 3. Create function to enhance element with unique id.
const proto = { name: 123 };
const copy = addUniqueId(proto);

function addUniqueId(object) {
  const brand_new = { ...object };

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      brand_new[Symbol(key)] = object[key];
      return brand_new;
    }
  }
}

console.log(proto, addUniqueId(proto));
console.log(proto === copy);


// 4.	Write a function which regroups object properties
const oldObject = {
  name: "Sebastian",
  details: { id: 1, age: 11, university: "UNI" }
};

const regroupObject = ({
  name: firstName,
  details: { id, age, university }
}) => {
  let restructured = { university, user: { age, firstName, id } };
  return restructured;
};

console.log(regroupObject(oldObject));

// 5.	Create a function which finds unique elements in array
const container = [1, 1, 23, 3, 4, 5, 6, 5, 4, 23, 2, 1, 1, 1, 1, 1];

const findUniqueElements = arr => {
  const sorted = new Set(arr);
  return Array.from(sorted).sort();
};

console.log(findUniqueElements(container));

// 6.	Create a function which masks phone number, leaves only last 4 digits
const phoneNumber = "0123456789";

const hideNumber = cell => {
  let lastDigits = cell.slice(-4);
  let maskNumber = lastDigits.padStart(phoneNumber.length, "*");
  return maskNumber;
};

console.log(hideNumber(phoneNumber));

// 7.	Create function which has all parameters always required
const add = (a, b) => {
  if (!a || !b) {
    throw new Error("Missing parameter!");
  }

  return a + b;
};

console.log(add(1, 3));
// console.log(add(1));

// 8.	Create a function which calls some API and logs array of ‘name’ fields in alphabetical order. Use promises.
function getUserData(yourUser) {
  const link = `https://api.github.com/users/${yourUser}/repos`;

  let names = [];

  fetch(link)
    .then(response => response.json())
    .then(result => result.forEach(user => names.push(user.name)))
    .catch(err => {
      throw new Error(`Something went wrong ${err.message}`);
    });

  return names.sort();
}

console.log(getUserData("onedorn"));

// 9.	Rewrite previous task using async/await instead of promises.
const resource = `https://jsonplaceholder.typicode.com/users`;

async function getUserDataWithAsyncAndAwait() {
  const names = [];
  try {
    const request = await fetch(resource);
    const resolve = await request.json();
    await resolve.forEach(user => names.push(user.name));
  } catch (error) {
    throw new Error("Something went wrong", error.message);
  }

  return names.sort();
}

console.log(getUserDataWithAsyncAndAwait());
