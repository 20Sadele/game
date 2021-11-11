input.onButtonPressed(Button.A, function () {
    if (_1 < _1 + _2) {
        _1 = _2
        _1 += 1
        basic.showNumber(_1)
    } else if (_1 > _1 + _3) {
        _1 = _3
        _1 += 1
        basic.showNumber(_1)
    } else {
        _1 += 1
        basic.showNumber(_1)
    }
    if (_1 == _7) {
        basic.showString("you win")
        _1 = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    _3 += _3 + _1
    basic.showNumber(_3)
    if (_3 == _7) {
        basic.showString("you win")
        _3 = 0
    }
})
input.onButtonPressed(Button.B, function () {
    _2 += _1 + _2
    basic.showNumber(_2)
    if (_2 == _7) {
        basic.showString("you win")
        _2 = 0
    }
})
let _7 = 0
let _3 = 0
let _2 = 0
let _1 = 0
_7 = 7
_1 = 0
_2 = 0
_3 = 0
let lives = 7
basic.forever(function () {
    if (_3 > _7) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.clearScreen()
        basic.showString("try again")
        _3 = 0
        _1 = 0
        _2 = 0
    }
    if (_2 > _7) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.clearScreen()
        basic.showString("try again")
        _2 = 0
        _3 = 0
        _1 = 0
    }
    if (_1 > _7) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.clearScreen()
        basic.showString("try again")
        _1 = 0
        _2 = 0
        _3 = 0
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.pause(500)
        lives += 3
        basic.showNumber(lives)
        basic.showLeds(`
            # . . . #
            # . . . #
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    if (input.buttonIsPressed(Button.A)) {
        basic.pause(500)
        lives += 1 - 2
        basic.showNumber(lives)
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . .
            . # # # .
            # . . . #
            `)
        basic.showString("lives  left ")
    }
})
