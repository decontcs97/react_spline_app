import React from 'react'

const footer = () => {
  return (
    <footer className="bg-primary rounded-lg m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <div className="flex items-center mb-4 sm:mb-0">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" className="h-8 mr-3" alt="React logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Software</span>
                </div>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 text-white">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Release</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <span className="block text-sm text-white sm:text-center">© 2023 Software™. All Rights Reserved.</span>
        </div>
    </footer>


  )
}

export default footer