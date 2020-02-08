const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')
const express = require('express')


//let api = express()
// api.get('/api', (req, res) => res.send('aaa'))
// let server = api.listen(3000, () => console.log('api running on port 3000'))

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
  // mainWindow.webContents.openDevTools()

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

let questionsWindow

ipcMain.on('openQuestionsWindow', async () => {
  questionsWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
    },
    parent: mainWindow
  })

  questionsWindow.loadFile('src/questions/index.html')
  questionsWindow.webContents.openDevTools()
  questionsWindow.on('closed', () => {
    questionsWindow = null
  })
})

let questionWindow

ipcMain.on('openQuestionWindow', async () => {
  questionWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
    },
    parent: questionsWindow
  })

  questionWindow.loadFile('src/question/index.html')
  questionWindow.webContents.openDevTools()
  questionWindow.on('closed', () => {
    questionWindow = null
  })
})

ipcMain.on('closeQuestionWindow', async () => {
  questionWindow.close()
})
