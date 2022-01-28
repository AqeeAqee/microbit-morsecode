let msSpare = 0
let morse = ""
let iletters = 0
let letter = ""
radio.setGroup(10)
hmi.initialize(DeviceType.ta, CommunicationType.radio)
hmi.setColors(0x00ff00, 0x0)
hmi.clearScreen()
let OneBeat = 80
basic.showNumber(1)
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
"0",
".-",
"A",
"-...",
"B",
"-.-.",
"C",
"-..",
"D",
".",
"E",
"..-.",
"F",
"--.",
"G",
"....",
"H",
"..",
"I",
".---",
"J",
"-.-",
"K",
".-..",
"L",
"--",
"M",
"-.",
"N",
"---",
"o",
".--.",
"P",
"--.-",
"Q",
".-.",
"R",
"...",
"S",
"-",
"T",
"..-",
"U",
"...-",
"V",
".--",
"W",
"-..-",
"X",
"-.--",
"Y",
"--..",
"Z",
    "..--..",
    "?",
"......",
    "_"
]
basic.forever(function () {
    while (input.buttonIsPressed(Button.A) && morse.length < 6) {
        if (morse == "") {
            basic.clearScreen()
        }
        led.plot(0, morse.length)
        music.playTone(587, OneBeat)
        music.rest(OneBeat)
        morse = "" + morse + "."
        msSpare = input.runningTime()
    }
    while (input.buttonIsPressed(Button.B) && morse.length < 6) {
        if (morse == "") {
            basic.clearScreen()
        }
        led.plot(0, morse.length)
        led.plot(1, morse.length)
        led.plot(2, morse.length)
        morse = "" + morse + "-"
        music.playTone(587, OneBeat * 3)
        music.rest(OneBeat)
        msSpare = input.runningTime()
    }
    if (input.runningTime() - msSpare > 1 * OneBeat && morse != "") {
        letter = morseCodes[morseCodes.indexOf(morse) + 1]
        if(morse != "......")
            iletters += 1
        hmi.showText0(letter, FontSize0.fs12, iletters % 32 * 15 + 2, 30 * Math.idiv(iletters, 32), BackgroundColorMode.drawBackground)
        if (morse=="......")
            iletters -= 1
        basic.showString(letter, 1)
        morse = ""
        while (input.runningTime() - msSpare < 3 * OneBeat) {}
    }
    if (input.runningTime() - msSpare > 7 * OneBeat&&letter!="_") {
        letter="_"
        iletters += 1
        hmi.showText0("_", FontSize0.fs12, iletters % 32 * 15 + 2, 30 * Math.idiv(iletters, 32))
        basic.showString("_", 1)
    }
})