const Contact = () => {
    return (
      <section
        id="contact"
        className="section-padding bg-[#001726] text-white w-full"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold uppercase tracking-wide text-sm">
              Contact Us
            </span>
            <h2 className="text-4xl font-bold mt-3">Get In Touch</h2>
            <p className="max-w-2xl mx-auto mt-4 text-gray-300">
              Have a project in mind or need more information? We're here to help.
              Reach out to us and we'll respond as soon as possible.
            </p>
          </div>
  
          <div className="max-w-5xl mx-auto">
            <div className="bg-[#DBF227] rounded-3xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-5">
                
                <div className="md:col-span-2 bg-accent p-10 text-black space-y-8">
                  <h3 className="text-2xl font-bold border-b border-white/20 pb-4">
                    Contact Information
                  </h3>
  
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      {/* Mail SVG */}
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M4 4h16v16H4V4zm0 0l8 8 8-8" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <a href="mailto:mor.sahil05.28@gmail.com" className="hover:underline">
                        mor.sahil05.28@gmail.com
                      </a><br/>
                      <a href="mailto:zorawarsingh315@gmail.com" className="hover:underline">
                        zorawarsingh315@gmail.com
                      </a>
                    </div>
                  </div>
  
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      {/* MapPin SVG */}
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M12 21s6-5.686 6-10A6 6 0 0 0 6 11c0 4.314 6 10 6 10z" />
                        <circle cx="12" cy="11" r="2.5" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Address</h4>
                      <address className="not-italic">
                        123 Construction Blvd.<br />
                        New York, NY 10001
                      </address>
                    </div>
                  </div>
  
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      {/* Clock SVG */}
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Business Hours</h4>
                      <p>
                        Mon - Fri: 8:00 AM - 6:00 PM<br />
                        Sat: 9:00 AM - 3:00 PM
                      </p>
                    </div>
                  </div>
                </div>
  
                <div className="md:col-span-3 p-10 bg-[#031e2f]">
                  <h3 className="text-2xl font-bold border-b pb-4 border-gray-700 mb-6">
                    Send Us a Message
                  </h3>
  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block font-medium text-gray-300">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="Your name"
                          className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-600 bg-[#001726] text-white placeholder-gray-400 focus:border-accent focus:ring-accent focus:ring-1 outline-none transition"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block font-medium text-gray-300">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="Your email"
                          className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-600 bg-[#001726] text-white placeholder-gray-400 focus:border-accent focus:ring-accent focus:ring-1 outline-none transition"
                        />
                      </div>
                    </div>
  
                    <div>
                      <label htmlFor="message" className="block font-medium text-gray-300">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us about your project or inquiry"
                        className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-600 bg-[#001726] text-white placeholder-gray-400 focus:border-accent focus:ring-accent focus:ring-1 outline-none transition"
                      ></textarea>
                    </div>
  
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center items-center bg-[#DBF227] hover:bg-[#657011] text-white py-3 rounded-lg font-semibold transition shadow-md hover:shadow-lg"
                    >
                      Send Message
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M22 2L11 13" />
                        <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                      </svg>
                    </button>
                  </form>
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  