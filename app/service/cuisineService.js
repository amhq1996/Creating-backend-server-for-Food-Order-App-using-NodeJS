const fs = require("fs");

class Cuisines {
  constructor() {
    this.cuisines = JSON.parse(fs.readFileSync("./app/data/cuisines.json", "utf-8"));
  }
  //COMPLETE TASK 1(b) HERE
  getAllCuisines(){
    return this.cuisines;
  }

  getCuisineById(id){
  const cuisine = this.cuisines.find((cuisine) => cuisine.id == id);
    return cuisine;
  }

  getCuisineByName(id){
    const name = this.names.find((name) => name.id == id);
      return name;
    }
}

module.exports = Cuisines;