const { useEffect } = require("react");


export const Modal = ({ onCloseModal, modalInfo: { img, alt } }) => {

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeyPress = (e) => {
    const isEsc = e.code === 'Escape'


    if (isEsc) {
      onCloseModal()
    }
  }

  const handleClick = (e) => {
    if (e.currentTarget === e.target) {
      onCloseModal()
    }
  }
  return (
    <div className="Overlay" onClick={handleClick}>
      <div className="Modal">
        <img src={img} alt={alt} />
      </div>
    </div>
  )
}

/* export default class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress)
  }

  handleKeyPress = (e) => {
    if (e.code === 'Escape') {
      this.props.onCloseModal()
    }
  }

  handleClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onCloseModal()
    }
  }

  render() {
    const { modalInfo: { img, alt } } = this.props
    return (
      <div className="Overlay" onClick={this.handleClick}>
        <div className="Modal">
          <img src={img} alt={alt} />
        </div>
      </div>
    )
  }
} */
