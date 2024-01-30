import React, {useState, useEffect} from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: localStorage.getItem('contactName') || '',
    email: localStorage.getItem('contactEmail') || '',
    message: localStorage.getItem('contacyMessage') || '',
  });

  useEffect(() => {
    localStorage.setItem('contactName', formData.name);
    localStorage.setItem('contactEmail', formData.email);
    localStorage.setItem('contactMessage', formData.message);
  }, [formData]);

  const handleInputChange = (e) => {
    e.preventDefault();

  }
  return (
    <section name="contact" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="text-2xl pb-0 text-center">
             {/* <p className="text-4xl font-bold inline border-b-6 border-gray-500">
                Contact
                </p> */}
                
                <p className="py-6 font-bold">Get in touch with me!</p>   
        </div>
        <div className="flex justify-center items-center">
            <form action="https://getform.io/f/64172f00-e30c-473a-9f9c-9fdacd6baafe" method="POST" className="flex flex-col w-full md:w-1/2">
                <input
                type="text"
                name="name"
                placeholder="enter your name"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                <input 
                type="text"
                name="email"
                placeholder="enter your email"
                className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                <textarea 
                name="message"
                placeholder="Enter your message" 
                rows="10" 
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
              <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration:300" >
                 Send your Text
              </button>
            </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
