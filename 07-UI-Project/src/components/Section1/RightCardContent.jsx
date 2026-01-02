import { MoveRight } from 'lucide-react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h2 className='bg-white text-2xl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
        <p className='text-shadow-2xs text-xl leading-normal text-white mb-1 mt-15'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat excepturi quam nemo exercitationem, neque fuga.</p>
        <div className='flex justify-between'>
          <button style={{backgroundColor:props.color}} className='text-white font-medium px-8 py-3 rounded-full'>{props.tag}</button>
          <button className='bg-blue-600 text-white font-medium px-4 py-3 rounded-full'><MoveRight /></button>
        </div>
      </div>
  )
}

export default RightCardContent