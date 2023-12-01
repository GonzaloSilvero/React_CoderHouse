
interface ItemListProps {
  greeting: string;
}

const ItemListContainer = ({greeting}: ItemListProps) => {
    
  return (
    <section className=''>
        <h2 className=''>{greeting}</h2>
        <hr/>
    </section>
  )
}

export default ItemListContainer;
