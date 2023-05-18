console.log("Hi from script.js")

// Test formatRGB
console.log(formatRGB(0, 0, 0))

// Test ===
console.assert(formatRGB(10, 20, 30) === "rgb(0, 0, 0)", "false")

console.log(formatRGB(0, 0, randomInt(255)))

// Set base-svg

let width = "100%"
let height = 500

let svg = document.getElementById("base-svg")

svg.setAttribute("width",width)
svg.setAttribute("height",height)
console.log(svg)

// Creat clouds

function drawclouds(cx, cy, r) {
    let newcircle = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    let xrandom = randomInt(800)

    newcircle.setAttribute("cx", cx ?? xrandom)
    newcircle.setAttribute("cy", cy)
    newcircle.setAttribute("r", r)
    newcircle.setAttribute("fill", `rgb(128, 193, 247)`)
    svg.appendChild(newcircle)
    return xrandom
}

let xcircle = drawclouds(null, 80, 30)
drawclouds(xcircle, 90, 35)
drawclouds(xcircle, 70, 35)
drawclouds(xcircle+30, 70, 30)
drawclouds(xcircle-30, 70, 30)
drawclouds(xcircle+30, 90, 30)
drawclouds(xcircle-30, 90, 30)
drawclouds(xcircle+48, 80, 30)
drawclouds(xcircle-48, 80, 30)

let xcircle1 = drawclouds(null, 120, 30)
drawclouds(xcircle1, 130, 35)
drawclouds(xcircle1, 110, 35)
drawclouds(xcircle1+30, 110, 30)
drawclouds(xcircle1-30, 110, 30)
drawclouds(xcircle1+30, 130, 30)
drawclouds(xcircle1-30, 130, 30)
drawclouds(xcircle1+48, 120, 30)
drawclouds(xcircle1-48, 120, 30)

// Creat a sea
function drawsea(x, y, w, h, seac) {
    let newrect = document.createElementNS("http://www.w3.org/2000/svg", "rect")

    newrect.setAttribute("x", x)
    newrect.setAttribute("y", y)
    newrect.setAttribute("width", "100%")
    newrect.setAttribute("height", h)
    newrect.setAttribute("fill", seac)
    svg.appendChild(newrect)
}

drawsea(0, 200, 1000, 20, makeRGB(58, 134, 227, null))
drawsea(0, 220, 1000, 20, makeRGB(58, 134, 227, null))
drawsea(0, 240, 1000, 20, makeRGB(58, 134, 227, null))
drawsea(0, 260, 1000, 20, makeRGB(58, 134, 227, null))
drawsea(0, 280, 1000, 20, makeRGB(58, 134, 227, null))
drawsea(0, 300, 1000, 20, makeRGB(58, 134, 227, null))
drawsea(0, 320, 1000, 20, makeRGB(58, 134, 227, null))

// Creat a sandbeach

drawsea(0, 340, 1000, 20, makeRGB(206, 158, 0, null))
drawsea(0, 360, 1000, 20, makeRGB(206, 158, 0, null))
drawsea(0, 380, 1000, 20, makeRGB(206, 158, 0, null))
drawsea(0, 400, 1000, 20, makeRGB(206, 158, 0, null))
drawsea(0, 420, 1000, 20, makeRGB(206, 158, 0, null))
drawsea(0, 440, 1000, 20, makeRGB(206, 158, 0, null))
drawsea(0, 460, 1000, 20, makeRGB(206, 158, 0, null))

window.addEventListener("resize", resizeSvg);

function resizeSvg() {
    let bbox = svg.getBoundingClientRect();
    svg.setAttribute("viewBox", `0 0 ${bbox.width} ${bbox.height}`);
}
