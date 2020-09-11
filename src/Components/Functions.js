const axios = require("axios")


const functions =  {
    add: (num1, num2) => num1+num2,
    isNull: ()  => null,
    checkValue: (x) => x,
    createUser: () => {
        const user = {firstName: "Jitendra",lastName:"Singh"}
        // user ["lastName"] = "Singh";
        return user
    },

   fetchUsers: () => axios.get("https://jsonplaceholder.typicode.com/1")
   .then(res => res.data)
   .catch (error => error)
}
module.exports = functions 