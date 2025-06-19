const { app, BrowserWindow } = require('electron')
const path = require('path');
// app, which controls your application's event lifecycle.
// BrowserWindow, which creates and manages app windows.

//play, pause, skip, go back

const createWindow = () => {
    const win = new BrowserWindow({
        width: 425,
        height: 526,
        resizable: false,
        transparent: true,
        frame: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false
        },
    })
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})

 app.on('window-all-closed', () => {
     if (process.platform !== 'darwin') app.quit()
 })

// ipcMain.on('close', () => {
//   app.quit()
// })
