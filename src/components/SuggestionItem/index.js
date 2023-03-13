// Write your code here
const SuggestionItem = props => {
  const {suggestionItem, clickEvent} = props
  const {suggestion} = suggestionItem
  const fn = () => {
    clickEvent(suggestion)
  }
  return (
    <li className="suggestion-container">
      <p>{suggestion}</p>
      <button type="button" onClick={fn}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
