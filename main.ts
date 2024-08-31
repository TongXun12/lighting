basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else {
        if (input.buttonIsPressed(Button.B)) {
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.pause(1000)
            pins.digitalWritePin(DigitalPin.P2, 0)
        }
    }
})
