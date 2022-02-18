
const quote = document.getElementById('quotes');

function getQuote() {
	return Math.floor(Math.random() * quotes.length);
} 


const quotes = [
  "It is better to fail in originality than to succeed in imitation. <br><br><span>- Herman Melville</span>",

	"The road to success and the road to failure are almost exactly the same.<br><br><span>- Colin R. Davis Churchill</span>", 

	"Success usually comes to those who are too busy to be looking for it.<br><br><span>- Henry David Thoreau</span>", 

	"Opportunities don't happen. You create them.<br><br><span>- Chris Grosser</span>", 

	"Don't be afraid to give up the good to go for the great.<br><br><span>- John D. Rockefeller</span>",

	"I find that the harder I work, the more luck I seem to have.<br><br><span>- Thomas Jefferson</span>", 

	"There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.<br><br><span>- Ray Goforth</span>",

	"Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.<br><br><span>- Jim Rohn</span>",


	"Try not to become a man of success. Rather become a man of value.<br><br><span>- Albert Einstein</span>",

	"Never give in except to convictions of honor and good sense.<br><br><span>- Winston Churchill</span>",

	"Stop chasing the money and start chasing the passion.<br><br><span>- Tony Hsieh</span>",

	"I owe my success to having listened respectfully to the very best advice, and then going away and doing the exact opposite.<br><br><span>- G. K. Chesterton</span>",


	"If you are not willing to risk the usual, you will have to settle for the ordinary.<br><br><span>- Jim Rohn</span>",
	
	"Success is walking from failure to failure with no loss of enthusiasm.<br><br><span>- Winston Churchill</span>",

	"The ones who are crazy enough to think they can change the world, are the ones that do.<br><br><span>- Anonymous</span>",

	"Do one thing every day that scares you.<br><br><span>- Anonymous</span>",

	"All progress takes place outside the comfort zone.<br><br><span>- Michael John Bobak</span>",

	"Don't let the fear of losing be greater than the excitement of winning.<br><br><span>- Robert Kiyosaki</span>",

	"If you really look closely, most overnight successes took a long time.<br><br><span>- Steve Jobs</span>",

	"The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.<br><br><span>- Barack Obama</span>",

	"The only limit to our realization of tomorrow will be our doubts of today.<br><br><span>- Franklin D. Roosevelt</span>",

	"Don't let the fear of losing be greater than the excitement of winning.<br><br><span>- Robert Kiyosaki</span>",

	"Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved.<br><br><span>- Helen Keller</span>",

	"The way to get started is to quit talking and begin doing.<br><br><span>- Walt Disney</span>",

	"Recovery is not one and done. It is a lifelong journey that takes place one day, one step at a time.<br><br><span>- Unknown</span>",

	"Self-care is how you take your power back.<br><br><span>- Lalah Delia</span>",

	"You can’t control everything. Sometimes you just need to relax and have faith that things will work out.Let go a little and just let life happen.<br><br><span>- Kody Keplinger</span>",

	"Your illness is not your identity. Your chemistry is not your character.<br><br><span>- Rick Warren</span>",

	"Emotional pain is not something that should be hidden away and never spoken about. There is truth in your pain, there is growth in your pain, but only if it’s first brought out into the open.<br><br><span>- Steven </span>",

	"You, yourself, as much as anybody in the entire universe, deserve your love and affection.<br><br><span>- Buddha</span>",
]

const generatorBtn = document.getElementById('btn');

generatorBtn.addEventListener('click', () => {
	const randomQuote = getQuote()
  quote.innerHTML = quotes[randomQuote];
})
