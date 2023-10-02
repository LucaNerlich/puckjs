var kb = require("ble_hid_keyboard");
NRF.setServices(undefined, { hid : kb.report });
function btnPressed() {
  kb.tap(kb.KEY.A, kb.MODIFY.LEFT_GUI, kb.MODIFY.LEFT_ALT);
}
setWatch(btnPressed, BTN, {edge:"rising",repeat:true,debounce:50});