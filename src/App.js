import React from 'react';
import './App.css';

const quotes = [
	{ 
		"quote" : "The only sin is ignorance", 
		"author" : "Christopher Marlowe" 
	},
	{
		"quote" : "A man is his own easiest dupe, for what he wishes to be true he generally believes to be true", 
		"author" : "Demosthenes"
	},
	{
		"quote" : "A lie can travel halfway around the world while the truth is putting on its shoes", 
		"author" : "Mark Twain"
	},
	{
		"quote" : "Great minds discuss ideas; average minds discuss events; small minds discuss people", 
		"author" : "Eleanor Roosevelt"
	},
	{
		"quote" : "If you have a garden and a library, you have everything you need", 
		"author" : "Marcus Tullius Cicero"
	},
	{
		"quote" : "Truth comes out in wine", 
		"author" : "Pliny the Elder"
	},
	{
		"quote" : "Everything in the universe is within you. Ask all from yourself", 
		"author" : "Rumi"
	},
	{
		"quote" : "When I get a little money I buy books; and if any is left I buy food and clothes", 
		"author" : "Desiderius Erasmus"
	}
]

const random = (props) => {
  let num = (Math.round(Math.random() * (quotes.length - 1)));
  // if (num === props.index) {
  //   this.random();
  // }
  return num;
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: random(),
    }
    this.handleChange = this.handleChange.bind(this);
  }

  
  generateRandomQuote = () => {
  this.setState({index: random()})
  }

  handleChange(e) {
    e.preventDefault();
    this.generateRandomQuote();
  }
  
  render() {
    {console.log(this.state.index)}
    return (
      <div id="quote-box" className="box-wrapper col">
        <div className="quote-author-wrapper col">
          <div id="text" className="quote">
          {quotes[this.state.index]['quote']}
          </div>
          <div id="author" className="author">
            -{quotes[this.state.index]['author']}
          </div>
        </div>
        <div className="btn-tweet-wrapper row">
          <a 
            href="https://www.twitter.com/intent/tweet" 
            target="_blank"
            id="tweet-quote" 
            className="btn tweet-quote"
          >Tweet</a>
          <input 
            id="new-quote" 
            className="new-quote btn"
            type='button'
            value='New Quote'
            onClick={this.handleChange}  
          />
        </div>
      </div>
    );
  }
}

export default App;
