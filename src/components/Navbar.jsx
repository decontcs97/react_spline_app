import React from 'react'

const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "about",
    },
    {
      id: "contact",
      title: "contact",
    },
];

const Navbar = () => {

  return (
    <nav className="w-full py-8 relative justify-end items-center bg-transparent h-40">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <li className="absolute left-0 list-none p-4 text-2xl w-2 text-center no-underline rounded-s-full text-white">
          <a href="#" className="fa fa-facebook hover:text-cyan-400"></a>
          <a href="#" className="fa fa-twitter hover:text-cyan-400"></a>
          <a href="#" className="fa fa-google hover:text-cyan-400"></a>
        </li>
        <ul className="absolute right-0 list-none sm:flex hidden justify-end items-center flex-1 overflow-hidden top-16">
            {navLinks.map((nav, index) => (
                <li key={nav.id}
                className={`hover:text-cyan-400 font-poppins font-normal cursor-pointer text-[22px] ${index === navLinks.length - 1
                  ? 'mr-0' :'mr-10'} text-white`}
                >
                    <a href={`#${nav.id}`}>
                        {nav.title}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar;