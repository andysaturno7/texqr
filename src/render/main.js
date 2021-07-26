const { remote, ipcRenderer, ipcMain, app, dialog } = require("electron");
const path = require("path");
const os = require("os");
const fs = require("fs");
const csv = require("fast-csv");

const BrowserWindow = remote.BrowserWindow;

var btn = document.getElementById("button");

btn.addEventListener("click", (ev) => {
  ipcRenderer.send("deployDisplay", [{ message: "deploy" }]);
});

var interfaces = os.networkInterfaces();
var addresses = [];
for (var k in interfaces) {
  for (var k2 in interfaces[k]) {
    let address = interfaces[k][k2];
    if (address.family === "IPv4" && !address.internal) {
      addresses.push(address.address);
    }
  }
}

document.getElementById("ip_address").innerHTML = addresses[0];

function launch_import() {
  ipcRenderer.send("launch_import");
}

getRegistrants();

function getRegistrants() {
  ipcRenderer
    .invoke("get_registrants")
    .then((res) => {
      console.log(res);
      let codeTag = createTagCode(JSON.stringify(res));
      codeTag.style.color = "#333";
      document.body.appendChild(codeTag);
    })
    .catch((e) => console.log(e));
}

function createTagCode(text) {
  let code = document.createElement("code");
  code.innerHTML = text;

  return code;
}
