basic.showString("Hello!")
basic.showString("TEMP")
basic.showNumber(Environment.dht11value(Environment.DHT11Type.DHT11_temperature_C, DigitalPin.P15))
basic.forever(function () {
    if (Environment.dht11value(Environment.DHT11Type.DHT11_temperature_C, DigitalPin.P0) < 26 && Environment.ReadSoilHumidity(AnalogPin.P1) > 40) {
        basic.showString("DO NOT WATER ME")
    } else if (Environment.dht11value(Environment.DHT11Type.DHT11_temperature_C, DigitalPin.P0) < 26 && Environment.ReadSoilHumidity(AnalogPin.P1) > 40) {
        basic.showString("PLEASE DO NOT WATER ME")
    } else if (Environment.dht11value(Environment.DHT11Type.DHT11_temperature_C, DigitalPin.P0) > 26 && Environment.ReadSoilHumidity(AnalogPin.P1) < 40) {
        servos.P0.setAngle(31)
        basic.showString("PLEASE WATER ME")
    } else {
        basic.showString("I AM WELL WATERED")
        basic.showIcon(IconNames.Butterfly)
    }
    basic.showString("SOIL MOISTURE")
    basic.showNumber(Environment.ReadSoilHumidity(AnalogPin.P1))
})
