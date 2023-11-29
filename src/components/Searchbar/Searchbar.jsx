import { useState } from "react"
import searchIcon from './search.svg'


export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (query.trim() === '') {
      return alert('zapishi q')
    }

    onSubmit(query)
  }

  return (
    <header className="Searchbar" >
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <img src={searchIcon} alt="" width={25} />
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          value={query}
          onChange={handleChange}
          type="text"
          autoComplete="on"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  )
}

/* class Searchbar extends Component {
  state = {
    query: ''
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ query: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()


    const { onSubmit } = this.props
    const { query } = this.state

    if (query.trim() === '') {
      return alert('zapishi q')
    }

    onSubmit(query)
  }

  render() {
    return (
      <header className="Searchbar" >
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <img src={searchIcon} alt="" width={25} />
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            value={this.state.query}
            onChange={this.handleChange}
            type="text"
            autoComplete="on"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    )
  }

}

export default Searchbar */
