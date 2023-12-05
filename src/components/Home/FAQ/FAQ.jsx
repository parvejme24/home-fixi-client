import React from "react";

const FAQ = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="md:w-3/4 lg:w-1/2 mx-auto text-center mb-8">
        <h2 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Frequently Asked Questions
        </h2>
        <p className="text-xl">
          Explore common questions about our services. If you have more
          inquiries, feel free to reach out to our support team
        </p>
      </div>

      <div className="md:w-3/4 px-4 md:px-0 md:mx-auto">
        <div className="join join-vertical space-y-4">
          <div className="shadow-md collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              What kind of services do you offer?
            </div>
            <div className="collapse-content">
              <p>
                Our home service website offers a wide range of services
                including plumbing, electrical work, carpentry, home cleaning,
                appliance repair, landscaping, and more. We cater to various
                household needs to ensure your home functions smoothly.
              </p>
            </div>
          </div>

          <div className="shadow-md collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              How do I book a service?
            </div>
            <div className="collapse-content">
              <p>
                Booking a service is easy! Simply visit our website and navigate
                to the service you require. Choose your preferred date and time,
                provide your address, and complete the booking by making a
                secure online payment. Alternatively, you can call our customer
                service to assist in scheduling your service.
              </p>
            </div>
          </div>

          <div className="shadow-md collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Are your service professionals licensed and insured?
            </div>
            <div className="collapse-content">
              <p>
                Yes, all service professionals on our platform are thoroughly
                vetted, licensed, insured, and possess the necessary expertise
                in their respective fields. We prioritize safety and quality,
                ensuring that you receive the best service from qualified
                individuals.
              </p>
            </div>
          </div>

          <div className="shadow-md collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              What if I'm not satisfied with the service?
            </div>
            <div className="collapse-content">
              <p>
                Customer satisfaction is our priority. If you're not fully
                satisfied with the service provided, please contact our customer
                support within 24 hours. We'll review the issue and, if needed,
                arrange for a follow-up service at no additional cost.
              </p>
            </div>
          </div>

          <div className="shadow-md collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Do I need to provide any tools or equipment for the service?
            </div>
            <div className="collapse-content">
              <p>
                Our professionals arrive equipped with the necessary tools and
                equipment to complete the service. You don't need to provide
                anything unless there are specific requirements or preferences
                you wish to discuss before the service appointment.
              </p>
            </div>
          </div>

          <div className="shadow-md collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              What areas do you cover?
            </div>
            <div className="collapse-content">
              <p>
                We currently offer services in [list relevant
                areas/locations/cities]. Our aim is to expand our service areas,
                so please check our website or contact our support team for the
                most up-to-date information on the regions we cover.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
