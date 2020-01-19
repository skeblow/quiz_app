const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
    }
  })

  mainWindow.loadFile('src/index.html')
  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

ipcMain.on('createdQuestion', async (e, question) => {
  console.log('question', question)

  if (! question.text) {
    mainWindow.webContents.send('createSuccess:error', 'error!')
    return
  }

  mainWindow.webContents.send('createSuccess', 'Answer stored')
})

let newWindow

ipcMain.on('newWindow', async () => {
  console.log('opening new window')
  newWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
    },
    parent: mainWindow
  })

  newWindow.loadFile('src/add/index.html')

  newWindow.on('closed', () => {
    newWindow = null
  })
})
