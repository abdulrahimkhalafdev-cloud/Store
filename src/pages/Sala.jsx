

import Sll from "../Components/Sll"
function Sala({cart,setC}) {
  const deleteCard = (hand) => {
    setC(cart.filter((e,i) => {
       return i !== hand
    }))
  }

  return (
    <div className="bg-red-500 w-full p-10 min-h-screen flex flex-col  items-center ">
      
      {cart.map((e,index) => {
        return <Sll im={e.thumbnail} ti={e.title} pr={e.price} dell={() => deleteCard(index)} />
    })}
    </div>
  )
}

export default Sala
