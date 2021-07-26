const { ipcRenderer, remote } = require("electron");

ipcRenderer.on("message", (ev, data) => {
  console.log(ev);
  alert(data);
});

ipcRenderer.on("alerton", (ev) => {
  alert("Evento recibido");
});

function setFullscreen() {
  var currentWindow = remote.getCurrentWindow();
  remote.BrowserWindow.getAllWindows().forEach((val, i, content) => {
    if (val.id == currentWindow.id) {
      console.log(val.loadFile(__dirname + "/test.html"));
    }
  });
}
