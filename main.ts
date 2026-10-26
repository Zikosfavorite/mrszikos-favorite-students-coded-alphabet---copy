input.onButtonPressed(Button.A, function () {
    let message = 0
    basic.showString("" + (message))
    basic.showLeds(`
        . # # # .
        # . # . #
        # # . # #
        # . # . #
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # . . . .
        # # . . .
        # . # . .
        # # # # .
        # . . . #
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        # . # . #
        # . # . #
        `)
    basic.pause(1000)
    basic.showLeds(`
        # . . . .
        # # . . .
        # . # . .
        # # # # .
        # . . . #
        `)
    basic.pause(1000)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # . . . .
        # # . . .
        # . # . .
        # # # # .
        # . . . #
        `)
})
input.onButtonPressed(Button.AB, function () {
	
})
