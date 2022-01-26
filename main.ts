function getMorseLetter (s: string) {
    // for(let i=0;i<morseCodes.length;i+=2){
    //     if(s==morseCodes[i])
    //         return morseCodes[i+1]
    // }
    return morseCodes[morseCodes.indexOf(s)+1]
}
let msSpare = 0
let morse=""
let iPart=0
let beatMs = 80
let morseCodes = [
    "*",
".----",
"1",
"..---",
"2",
"...--",
"3",
"....-",
"4",
".....",
"5",
"-....",
"6",
"--...",
"7",
"---..",
"8",
"----.",
"9",
"-----",
"0"
]
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        music.playTone(587, beatMs)
        music.rest(beatMs)
        led.plot(0, iPart++)
        msSpare = input.runningTime()
        morse = "" + morse + "."
    }
    while (input.buttonIsPressed(Button.B)) {
        music.playTone(587, beatMs * 3)
        msSpare = input.runningTime()
        led.plot(0, iPart)
        led.plot(1, iPart)
        led.plot(2, iPart++)
        music.rest(beatMs)
        morse = "" + morse + "-"
    }
    if (input.runningTime() - msSpare > 3 * beatMs) {
        iPart = 0
        basic.showString(morseCodes[morseCodes.indexOf(morse) + 1],100)
        while (!(input.buttonIsPressed(Button.A)) && !(input.buttonIsPressed(Button.B))) {}
        images.createImage(``).showImage(0, 0)
        morse = ""
    }
})
