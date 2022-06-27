let colors = ["white", "blue", "yellow", "black", "red", "green"]
const [firstColor, secondColor] = colors
const [, , ...otherColors] = colors
console.log(firstColor, secondColor, otherColors)