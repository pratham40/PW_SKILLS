let parameters={
    radius:23
}

function calculateArea(parameters) {
    console.log(`Area of circle of radius ${Object.values(parameters)} is ${Math.PI*Object.values(parameters)}`)
}

calculateArea(parameters)

