import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem"


const ImageGallery = ({ imgArr, showModal }) => {
  return (
    <ul className="ImageGallery">
      {imgArr.map(({ webformatURL, tags, largeImageURL, id }) =>
        <ImageGalleryItem
          key={id}
          preview={webformatURL}
          tags={tags}
          showModal={showModal}
          largeImage={largeImageURL} />)}
    </ul>
  )
}

export default ImageGallery
