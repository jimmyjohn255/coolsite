var sub = document.getElementById("subtitle")
var splash = [
    "this site is for ethical hackering B)",
    "i will ddos ur cat",
    "your so skibidi, your so sigmaer",
    "powered by godot",
    "i dont know how to animate, i just use javascript",
    "a",
    "just for hacker pranks >:D",
]

function delay(time) {

    return new Promise(resolve => setTimeout(resolve, time))

}

async function reveal_splash(msg) {

    var current = ""

    for (let i = 0; i < msg.length; i++) {

        current += msg.charAt(i)
        document.getElementById("subtitle").innerText = current + "_"
        await delay(Math.random() * 100.0)

    }
}

var idx = Math.round(Math.random() * splash.length)
reveal_splash(splash[idx - 1])