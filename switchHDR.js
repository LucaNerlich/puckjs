// http://www.espruino.com/BLE+Keyboard
var kb = require("ble_hid_keyboard");
NRF.setServices(undefined, { hid: kb.report });

// https://forum.espruino.com/conversations/390668/#comment17145677
NRF.setAdvertising([
  2, 1, 6,  // standard Bluetooth
  8, 9, 80, 117, 99, 107, 46, 106, 115, // 'Puck.js' name
  3, 3, 0x12, 0x18, // HID Service
  3, 0x19, 0xc1, 0x03 // Appearance: Keyboard https://btprodspecificationrefs.blob.core.windows.net/assigned-numbers/Assigned%20Number%20Types/Assigned_Numbers.pdf
]);

function btnPressed() {
  kb.tap(kb.KEY.B, kb.MODIFY.LEFT_GUI | kb.MODIFY.LEFT_ALT);
}
setWatch(btnPressed, BTN, { edge: "rising", repeat: true, debounce: 50 });