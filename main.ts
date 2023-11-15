basic.forever(function () {
    if (input.temperature() > 22) {
        basic.showString("Calor")
    } else {
        basic.showString("Fred")
    }
    if (input.lightLevel() > 200) {
        music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
    } else if (input.lightLevel() < 50) {
        music.play(music.stringPlayable("C5 A B G A F G E ", 120), music.PlaybackMode.UntilDone)
    } else {
    	
    }
})
