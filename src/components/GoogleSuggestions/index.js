// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {inputSearch: ''}

  searchResults = event => {
    this.setState({inputSearch: event.target.value})
  }

  changeInputString = suggestion => {
    this.setState({inputSearch: suggestion})
  }

  render() {
    const {inputSearch} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(item =>
      item.suggestion.toLowerCase().includes(inputSearch.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="main-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="google-container">
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                type="search"
                placeholder="Search Google"
                onChange={this.searchResults}
                value={inputSearch}
              />
            </div>
            <ul className="search-results-container">
              {searchResults.map(result => (
                <SuggestionItem
                  suggestionItem={result}
                  key={result.id}
                  clickEvent={this.changeInputString}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
