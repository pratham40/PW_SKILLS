let package="standard"
switch (package) {
    case "standard":
        console.log("might take 3-5 days");
        break;
    case "express":
        console.log("might take 1-2 days");
        break;
    case "overnight":
        console.log("deliver next day");
        break    
    default:
        break;
}