import Cardlist from './Cardlist'
import "./App.css"
function App() {
  const cards = [
    {
      image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982137137/the-7-habits-of-highly-effective-people-9781982137137_lg.jpg",
      title: "The 7 habites of highly effective people",
      description: "The 7 Habits of Highly Effective People by Stephen R. Covey teaches essential habits for personal and professional success through proactive, goal-oriented, and collaborative principles.",
    },
    {
      image: "https://www.portersquarebooks.com/sites/portersquarebooks.com/files/teaspoonearthandsea.jpg",
      title: " A teaspoon earth and sea",
      description: "A Teaspoon of Earth and Sea by Dina Nayeri is a poignant novel about identity, family, and the clash of cultures, following an Iranian girl’s journey of self-discovery amid loss and longing in post-revolutionary Iran",
    },
    {
      image: "https://d29xot63vimef3.cloudfront.net/image/stephen-king-books/2-8.jpg",
      title: " The stand ",
      description: "The Sand by Jeanine Cummins is a suspenseful tale of resilience and survival, where a young boy’s beach discovery leads him on an unexpected journey that uncovers hidden truths and tests his courage.",
    },
  ]
  return (
    <div className='app'>
    <Cardlist cards={cards}/>
    
    </div>
    
    
  )
}

export default App