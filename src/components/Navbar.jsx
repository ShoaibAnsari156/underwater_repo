import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='flex justify-between bg-cyan-800 text-white h-auto p-2 border-2 border-black '>
      <ul className='font-bold flex space-x-10'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='about'>About</Link>
        </li>
      </ul>
      <div className=''>
        <input type="search" placeholder="Type Search" className='p-1 border-2 border-black rounded-2xl' />
      </div>
    </div>
  )
}

export default Navbar