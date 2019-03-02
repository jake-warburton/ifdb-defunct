import { store } from 'react-easy-state'

const FullScreenImgStore = store({
  showFullScreenImg: 0,
  currentShownImages: [],
  UpdateCurrentShownImages(receivedArray) {
    FullScreenImgStore.currentShownImages = []
    for (let i = 0; i < receivedArray.length; i++) {
      FullScreenImgStore.currentShownImages[i] = receivedArray[i]
    }
  },
  ToggleShowFullScreenImg(receivedArray) {
    if (receivedArray) {
      FullScreenImgStore.UpdateCurrentShownImages(receivedArray)
    }

    if (FullScreenImgStore.showFullScreenImg === 0) {
      FullScreenImgStore.showFullScreenImg = 1
    } else {
      FullScreenImgStore.showFullScreenImg = 0
    }
  },
})

export default FullScreenImgStore
