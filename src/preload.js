const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  saveRecording: (arrayBuffer, defaultName) =>
    ipcRenderer.invoke('save-recording', arrayBuffer, defaultName),
  saveScreenshot: (dataUrl, defaultName) =>
    ipcRenderer.invoke('save-screenshot', dataUrl, defaultName),
});
