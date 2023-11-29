const ImageGalleryItem = ({ preview, tags, showModal, largeImage }) => {
  return (
    <li className="ImageGalleryItem" onClick={() => showModal(largeImage,
    )}>
      <img className="ImageGalleryItem-image" src={preview} alt={tags} />
    </li>
  )
}

export default ImageGalleryItem
