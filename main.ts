let msSpare = 0
let morse = ""
let OneBeat = 80
let morseCodes = [
"*",
"",
" ",
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
"?"
]
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        led.plot(0, morse.length)
        music.playTone(587, OneBeat)
        music.rest(OneBeat)
        morse = "" + morse + "."
        msSpare = input.runningTime()
    }
    while (input.buttonIsPressed(Button.B)) {
        led.plot(0, morse.length)
        led.plot(1, morse.length)
        led.plot(2, morse.length)
        morse = "" + morse + "-"
        msSpare = input.runningTime()
        music.playTone(587, OneBeat * 3)
        music.rest(OneBeat)
    }
    if (input.runningTime() - msSpare > 3 * OneBeat) {
        // , 3 * OneBeat
        basic.showString("" + (morseCodes[morseCodes.indexOf(morse) + 1]))
        morse = ""
        basic.clearScreen()
    }
})
