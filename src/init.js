const { app, BrowserWindow, screen } = require("electron");
const path = require("path");

exports.createWindow = () => {
  var screenSize = screen.getPrimaryDisplay().size;
  const win = new BrowserWindow({
    width: screenSize.width,
    height: screenSize.height,
    // frame: false,
    // fullscreen: true,
    // backgroundColor: "#333",
    opacity: 1,
    titleBarStyle: "hiddenInset",
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      defaultFontFamily: "san-serif",
      contextIsolation: false,
    },
  });
  // win.setMenuBarVisibility(false);
  // win.setMenu(null);
  win.webContents.openDevTools();

  win.loadFile(path.join(__dirname, "/render/main/index.html"));

  win.on("closed", () => {
    app.quit();
  });
};

exports.createDisplay = () => {
  const win = new BrowserWindow({
    width: 900,
    height: 500,
    frame: false,
    alwaysOnTop: false,
    opacity: 0.6,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      defaultFontFamily: "sans-serif",
    },
  });

  win.once("show", (ev) => {
    return win;
  });

  win.loadFile(__dirname + "/secondary.html");
};
