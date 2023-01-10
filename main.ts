input.onButtonPressed(Button.A, function () {
    if (paddle_a.get(LedSpriteProperty.X) > 0) {
        paddle_a.change(LedSpriteProperty.X, -1)
        paddle_b.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (paddle_a.get(LedSpriteProperty.X) < 3) {
        paddle_a.change(LedSpriteProperty.X, 1)
        paddle_b.change(LedSpriteProperty.X, 1)
    }
})
let paddle_b: game.LedSprite = null
let paddle_a: game.LedSprite = null
paddle_a = game.createSprite(2, 4)
paddle_b = game.createSprite(3, 4)
let ball = game.createSprite(randint(0, 4), 0)
let direction_x = randint(-1, 1)
let direction_y = 1
basic.pause(500)
basic.forever(function () {
    ball.change(LedSpriteProperty.X, direction_x)
    ball.change(LedSpriteProperty.Y, direction_y)
    if (ball.isTouching(paddle_a) || ball.isTouching(paddle_b)) {
        ball.change(LedSpriteProperty.Y, 1)
        ball.change(LedSpriteProperty.X, direction_x * -1)
        direction_y = -1
        direction_x = randint(-1, 1)
    } else {
        if (ball.get(LedSpriteProperty.Y) <= 0) {
            direction_y = 0
            direction_x = randint(-1, 1)
        }
    }
})
