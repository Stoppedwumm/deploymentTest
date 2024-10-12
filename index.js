const {app, BrowserWindow, ipcMain} = require('electron')

app.on('ready', () => {
    let win = new BrowserWindow({width: 800, height: 600, webPreferences: {preload: "./preload.js"}})
    ipcMain.on('closeWindow', () => {
        win.close()
    })
    win.loadURL(`https://order-frontend-eta.vercel.app`)
    win.setFullScreen(true)
})