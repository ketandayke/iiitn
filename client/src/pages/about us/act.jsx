import React from "react";

export default function AboutUs() {
  return (
    <div className="bg-gradient-to-b from-blue-300 to-blue-100 min-h-screen p-10">
      {/* Title */}
      <h1 className="text-center text-5xl font-bold text-gray-800 mb-10">
        WHO WE ARE
      </h1>

      {/* First Image - Keeps Original Size */}
      <div className="flex justify-center mb-16">
        <img
          src="../../../images/ThumbnailImage.jpg"
          alt="Institute Image 1"
          className="w-full max-w-6xl h-auto rounded-lg shadow-xl"
        />
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto mb-12">
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Act PPP</h2>
          <p className="text-lg text-gray-700">
            The Indian Institute of Information Technology (IIIT), Nagpur is one
            of the IIIT under the Indian Institute of Information Technology
            (Public-Private Partnership) Act, 2017.
          </p>
          <p className="mt-4 text-blue-600 font-bold">
            For more details Click Here
          </p>
        </div>
        <img
          src="../../../images/2.jpg"
          alt="Institute Image 2"
          className="md:w-1/3 w-2/3 rounded-lg shadow-lg self-start"
        />
      </div>

      {/* Section 3 */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between max-w-6xl mx-auto mb-12">
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Statute</h2>
          <p className="text-lg text-gray-700">
            The Indian Institute of Information Technology, Nagpur governs by
            the Statutes formulated by GoI. These Statutes may be called the
            Statutes of the Indian Institute of Information Technology, Nagpur,
            2017.
          </p>
          <p className="mt-4 text-blue-600 font-bold">
            For more details Click Here
          </p>
        </div>
        <img
          src="../../../images/3.png"
          alt="Institute Image 3"
          className="md:w-1/3 w-2/3 rounded-lg shadow-lg self-end"
        />
      </div>

      {/* Section 4 */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto mb-12">
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Institute Profile
          </h2>
          <p className="text-lg text-gray-700">
            IIITN is one of the 20 IIITs established under the Public-Private
            Partnership Scheme by the Ministry of Education, Government of
            India. It was declared an “Institution of National Importance” under
            the 2017 Act.
          </p>
          <p className="mt-4 text-blue-600 font-bold">
            For more details Click Here
          </p>
        </div>
        <img
          src="../../../images/4.jpeg"
          alt="Institute Image 4"
          className="md:w-1/3 w-2/3 rounded-lg shadow-lg self-start"
        />
      </div>

      {/* Section 5 */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between max-w-6xl mx-auto mb-12">
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">MoU</h2>
          <p className="text-lg text-gray-700">
            IIIT Nagpur has signed multiple MoUs with leading institutions for
            research and development collaborations.
          </p>
          <p className="mt-4 text-blue-600 font-bold">
            For more details Click Here
          </p>
        </div>
        <img
          src="../../../images/5.jpeg"
          alt="Institute Image 5"
          className="md:w-1/3 w-2/3 rounded-lg shadow-lg self-end"
        />
      </div>
    </div>
  );
}
