import Card from "./Card";

function Cardlist({ cards }) {
  return (
    <div className='card-container'>
      {cards.map((item,index) => (
       <Card key={index} image={item.image} description={item.description} title={item.title} />
      ))}
    </div>
  );
}

export default Cardlist;
