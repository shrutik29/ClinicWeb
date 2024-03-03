import React from 'react'


export const Appointment = () => {
  return (
    <div>
      <div className=" lg:px-32 px-5 pt-2 lg:pt-1">
      <div className=" lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start mb-5">
            Book Appointment 
          </h1>
        </div>
          <form action="/" method="POST">
          <div className="my-2">
            <label for="name" className="block text-base font-medium mb-3 "> Full Name </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-full px-6 py-3 rounded-md border focus:outline-none focus:border-sky-500 bg-white "
            />
          </div>
          <div className="my-2">
            <label for="phone" className="block text-base font-medium mb-3"> Phone Number </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              className="w-full px-6 py-3 rounded-md border focus:outline-none focus:border-sky-500 bg-white "
            />
          </div>
          <div className="my-2">
            <label for="email" className="block text-base font-medium mb-3"> Email Address </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-6 py-3 rounded-md border focus:outline-none focus:border-sky-500 bg-white"
            />
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full sm:w-half px-3">
              <div className="mb-5 w-full">
                <label for="date" className="block text-base font-medium mb-3"> Date </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="w-full px-6 py-3 rounded-md border focus:outline-none focus:border-sky-500 bg-white"
                />
              </div>
            </div>
            <div className="w-full sm:w-half px-3">
              <div className="mb-5">
                <label for="time" className="block text-base font-medium mb-3"> Time </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  className="w-full px-6 py-3 rounded-md border focus:outline-none focus:border-sky-500 bg-white"
                />
              </div>
            </div>
          </div>
          <div>



          </div>
          <div className="mb-5 pt-3">
            <label className="block text-base font-medium mb-3 formbold-form-label-2">
              Address Details
            </label>
            <div className="flex flex-wrap -mx-3">
              <div className="w-full sm:w-half px-3">
                <div className="mb-5">
                  <input
                    type="text"
                    name="area"
                    id="area"
                    placeholder="Enter area"
                    className="w-full px-6 py-3 rounded-md border focus:outline-none focus:border-sky-500 bg-white"
                  />
                </div>
              </div>
              <div className="w-full sm:w-half px-3">
                <div className="mb-5">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Enter city"
                    className="w-full px-6 py-3 rounded-md border focus:outline-none focus:border-sky-500 bg-white"
                  />
                </div>
              </div>
              <div className="w-full sm:w-half px-3">
                <div className="mb-5">
                  <input
                    type="text"
                    name="state"
                    id="state"
                    placeholder="Enter state"
                    className="w-full px-6 py-3 rounded-md border focus:outline-none focus:border-sky-500 bg-white"
                  />
                </div>
              </div>
              <div className="w-full sm:w-half px-3">
                <div className="mb-5">
                  <input
                    type="text"
                    name="post-code"
                    id="post-code"
                    placeholder="Post Code"
                    className="w-full px-6 py-3 rounded-md border focus:outline-none focus:border-sky-500 bg-white"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <button className="text-center font-base rounded-md px-8 py-4 font-semibold w-full cursor-pointer bg-[#6a64f1] mb-12 text-white">Book Appointment</button>
          </div>
        </form>
       
      </div>
      </div>
    </div>
  )
}
