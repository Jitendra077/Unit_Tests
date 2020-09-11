

const functions = require("../Components/Functions");

test("add 2+2 to equal 4", () => {
    expect(functions.add(2,2)).toBe(4)
} )

test("add 2+2 to  not equal to   5", () => {
    expect(functions.add(2,2)).not.toBe(5)
} )

//toBeNull
test("Should be null", () => {
    expect(functions.isNull()).toBeNull()
} )

// toBeFalsy
test("Should be falsy", () => {
    expect(functions.checkValue(null)).toBeFalsy()
} )



test("user should be Jitendra Singh object", () => {
    expect(functions.createUser()).toBe({firstName:"Jitendra",lastName:"Singh"})
} )

//toBeLessThanOrEqual
test("should be under 1600", () => {
const load1 = 800;
const load2 = 800;
expect(load1 + load2).toBeLessThanOrEqual(1600);    
} )


//Regular Expression (Regex)

test("There is no K in team ", () => {
    expect("team").not.toMatch("K")
})



// Arrays
test(" Jitendra should be in userNames",() => {
    userNames = ["Jitendra", "Mohit", "Akshay", "Admin"];
    expect(userNames).toContain("Jitendra")
} )


//working with async data
test( "User fetch name should be Leanne Graham",() => {
    expect.assertions(1);
    return functions.fetchUsers()
    .then(data => {
        expect(data.name).toEqual("Leanne Graham")
    } )
} )



//Async await

// test( "User fetch name should be Leanne Graham", async() => {
//     expect.assertions(1);
//     const data = await functions.fetchUsers();
//     expect(data.name).toEqual("Leanne Graham")
// } )