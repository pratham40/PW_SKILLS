let users=["Radha","Krishna","Sudama","Mithun"]
function isUserPresent(user) {
    if (users.includes(user)) {
        console.log(`Yes ${user} is a valid user.`);
    } else {
        console.log(`No ${user} is not a valid user.`);
    }
}
isUserPresent("Mithun");
isUserPresent("Someone");