console.log("Hi from ss.js")

function formatRGB(r, g, b) {
    console.log("Hi from formatRGB")
    return `rgb(${r},${g},${b})`;
}

function randomInt() {
    return Math.round(Math.random() * 750 + 70)
}

function randomcolor() {
    return Math.round(Math.random() * 255)
}

function makeRGB(redInput, greenInput, blueInput, alphaInput) {
    
    let redOutput = redInput ?? randomcolor(255)
    let greenOutput = greenInput ?? randomcolor(255)
    let blueOutput = blueInput ?? randomcolor(255)
    let alphaOutput = alphaInput ?? Math.random() * 0.3 + 0.77

    return `rgb(${redOutput},${greenOutput},${blueOutput}, ${alphaOutput})`
}