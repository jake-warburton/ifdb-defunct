import React, { Component } from 'react'
import { view } from 'react-easy-state'

import FullScreenImgStore from './store.js'
import './style.css'

class FullScreenImg extends Component {
  render() {
    const { showFullScreenImg, currentShownImages } = FullScreenImgStore

    let iKey = -1

    const renderedCurrentImages = currentShownImages.map(image => (
      <img key={iKey++} src={image} className="img-fluid w-100" alt={image} />
    ))

    const imagesHolder = (
      <div
        className="w-100 full-screen-images-holder"
        onClick={() => FullScreenImgStore.ToggleShowFullScreenImg()}
      >
        <div className="full-screen-image-closer d-flex justify-content-around align-items-center">
          <span className="button-sleek">CLOSE X</span>
        </div>
        {renderedCurrentImages}
      </div>
    )

    return <div>{showFullScreenImg === 1 && imagesHolder}</div>
  }
}

export default view(FullScreenImg)
