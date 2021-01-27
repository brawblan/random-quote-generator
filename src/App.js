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

function App() {
  return (
    <div id="quote-box" className="box-wrapper col">
      <div className="quote-author-wrapper col">
        <div id="text" className="quote">
        {quotes[0]['quote']}
        </div>
        <div id="author" className="author">
          -{quotes[0]['author']}
        </div>
      </div>
      <div className="btn-tweet-wrapper row">
        <a href="#" id="tweet-quote" className="btn tweet-quote">Tweet</a>
        <button id="new-quote" className="btn new-quote">New Quote</button>
      </div>
    </div>
  );
}

export default App;
