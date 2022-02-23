function ledOn() {
    Puck.write('LED1.set();\n');
}

function ledOff() {
    Puck.write('LED1.reset();\n');
}

function logBattery() {
    Puck.eval("{bat:Puck.getBatteryPercentage()}", function (data, error) {
        console.log("data", data);
        console.log("error", error);
    });
}



