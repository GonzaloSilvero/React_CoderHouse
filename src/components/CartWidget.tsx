import cart from '../assets/cartIcon.svg'

interface CartWidgetProps {
    items: number;
}

export const CartWidget = ({items}: CartWidgetProps) => {
  return (
    <div className=''>
        <p className='text-xs justify-center flex'>{items}</p>
        <img className='w-6' src={cart} alt='cartWidgets'/>
    </div>
  )
}
