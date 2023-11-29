import { useEffect, useState } from "react";
import fetchUrl from "tools/fetch";
import Button from "./Button/Button";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import { Modal } from "./Modal/Modal";
import { Searchbar } from "./Searchbar/Searchbar";


export const App = () => {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [imgArr, setImgArr] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [modalInfo, setModalInfo] = useState({})

  useEffect(() => {
    if (!query) {
      return
    }
    fetchImgArr()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, page]);

  const fetchImgArr = async () => {

    setIsLoading(true)

    setTimeout(async () => {
      try {
        const response = await fetchUrl(query, page)
        const { hits } = await response.json()

        if (hits.length === 0) {
          return alert('not found images')
        }

        setImgArr(prevState => [...prevState, ...hits])
      }
      catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false)
      }
    }, page === 1 ? 1000 : 0);
  }

  const loadMore = () => {
    setPage(prev => prev + 1)
  }

  const handleSubmit = (val) => {

    if (query === val) {
      return alert('idi nahooi')
    }

    setQuery(val)
    setImgArr([])
    setPage(1)
  }

  const toggleModal = (img, alt) => {
    setShowModal(p => !p)
    setModalInfo({ img, alt })
  }

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      <ImageGallery
        imgArr={imgArr}
        showModal={toggleModal} />
      {(imgArr.length > 0 && imgArr.length % 15 === 0) &&
        <Button
          onClick={loadMore} />}
      {showModal && < Modal
        onCloseModal={toggleModal}
        modalInfo={modalInfo} />}
    </>
  )
}

/* xport class App extends Component {
  state = {
    query: '',
    page: 1,
    imgArr: [],
    isLoading: false,
    showModal: false,
    modalInfo: {},
  }

  componentDidUpdate(_, prevState) {
    if (prevState.query !== this.state.query ||
      prevState.page !== this.state.page) {
      this.fetchImgArr()
    }
  }

  fetchImgArr = async () => {
    const { query, page } = this.state
    this.setState({ isLoading: true })
    setTimeout(async () => {
      try {
        const response = await fetchUrl(query, page)
        const { hits } = await response.json()
        if (hits.length === 0) {
          return alert('not found images')
        }
        this.setState(prevState => ({ imgArr: [...prevState.imgArr, ...hits] }))
      }
      catch (error) {
        console.log(error);
      } finally {
        this.setState({ isLoading: false })
      }
    }, 1000);
  }

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 })
    )
  }

  handleSubmit = (val) => {
    if (this.state.query === val) {
      return alert('idi nahooi')
    }
    this.setState({
      query: val,
      imgArr: [],
      page: 1
    })
  }

  toggleModal = (img, alt) => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      modalInfo: { img, alt },
    }))
  }

  render() {
    const { imgArr, isLoading, showModal, modalInfo } = this.state
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoading && <Loader />}
        <ImageGallery
          imgArr={imgArr}
          showModal={this.toggleModal} />
        {(imgArr.length > 0 && imgArr.length % 15 === 0) &&
          <Button
            onClick={this.loadMore} />}
        {showModal && < Modal
          onCloseModal={this.toggleModal}
          modalInfo={modalInfo} />}
      </>
    );
  }
};
 */
