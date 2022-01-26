let beatMs=80
let msSpare=0
let iPart=0
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        music.playTone(587, beatMs)
        music.rest(beatMs)
        led.plot(0,iPart++)
        msSpare = input.runningTime()
    }
    while (input.buttonIsPressed(Button.B)) {
        music.playTone(587, beatMs*3)
        msSpare = input.runningTime()
        led.plot(0,iPart)
        led.plot(1,iPart)
        led.plot(2,iPart++)
        music.rest(beatMs)
    }
    if ((input.runningTime()-msSpare)>3*beatMs){
        iPart = 0
        while (!input.buttonIsPressed(Button.A) && !input.buttonIsPressed(Button.B)){
        }
    images.createImage("").showImage(0,0)
    }
})


