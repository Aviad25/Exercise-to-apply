const data = [
    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"],
    },
    },

    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
    },
    },

    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    },
},

{
name: "Thomas",
birthday: "1-10-1990",
favoriteFoods: {
meats: ["bird", "rooster"],
fish: ["salmon"],
},
},

{
name: "Mary",
birthday: "1-10-1977",
favoriteFoods: {
meats: ["hamburgers", "lamb"],
fish: ["anchovies", "tuna"],
},
},


];

//1. Create a function that 
//returns all the names
// from the array.


function getName(){
    obj={};
    data.forEach((element , index) =>{
        obj[`name ${index + 1}:`]=element.name;
    });
    return obj;
}
console.log(getName())

//6.2 Create a function that returns 
//all the objects that are born
//before 1990.

function bornBefore1990(data) {
    return data.filter((obj) => {
      const year = obj.birthday.split("-")[2];
      return year < 1990;
    });
  }

  const result = bornBefore1990(data);
console.log(result);


//3. Create a function that returns an object of all the different
//foods from all the objects as the key and the number of
//times that food is present in all the objects as the value.


function countFavoriteFoods(data) {
    const foodCounts = {};
    data.forEach((obj) => {
      const { favoriteFoods } = obj;
      Object.values(favoriteFoods).forEach((foodArray) => {
        foodArray.forEach((food) => {
          if (food in foodCounts) {
            foodCounts[food]++;
          } else {
            foodCounts[food] = 1;
          }
        });
      });
    });
    return foodCounts;
  }


  const res = countFavoriteFoods(data);
console.log(res);
  