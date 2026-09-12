const { app, BrowserWindow } = require("electron");

function createWindow() {

    const win = new BrowserWindow({

        width: 1400,
        height: 900,

        autoHideMenuBar: true,

        webPreferences: {

            nodeIntegration: false,
            contextIsolation: true

        }

    });

    win.loadFile("index.html");

}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {

    if (process.platform !== "darwin") {

        app.quit();

    }

});