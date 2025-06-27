export default function Datasheet() {
  return (
    <div className="md:w-full 2xl:w-[80%] mx-auto min-h-screen items-center bg-[url('img/login.png')] bg-cover bg-center px-4 md:px-20">
      <div className="absolute inset-0 bg-black/60 z-0 h-[100%]">
        <div className=" min-h-screen flex items-center justify-center px-4 py-5">
            <div className="max-w-5xl w-full bg-white p-8 rounded-xl shadow-lg">
              <h1 className="text-3xl font-bold text-red-700 mb-4 text-center">
              </h1>
              <p className="text-gray-700 text-lg mb-4">
                <strong>Crash Champions</strong> is the authorized repair center team
                of choice for Hyundai Motor America (HMA) white paint warranty
                repairs. With over <strong>650 high-quality repair centers</strong>{' '}
                across the United States, our team is ready to assist you with
                warranty assignments.
              </p>

              <div className="my-6 border border-gray-200 rounded-lg p-6 bg-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    START YOUR ESTIMATE
                  </h2>
                <p className="text-gray-700 mb-4">
                  To start the estimate process, click the button below. Mark an 'X'
                  on the warranty panels requiring paint repair and another 'X' on
                  adjacent panels requiring a blend for proper color match.
                </p>

                <a
                  href="https://crashchampions.com/sites/default/files/Hyundai/Hyundai-paint_2_(1)_1.pdf" // may need to move to cc public server file
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition duration-200"
                >
                  START YOUR ESTIMATE
                </a>
              </div>

              <div className="mb-6">
                <p className="text-gray-700 text-base">
                  Please email the completed form to{' '}
                  <a
                    href="mailto:paintwarranty@crashchampions.com"
                    className="text-blue-600 underline"
                  >
                    paintwarranty@crashchampions.com
                  </a>
                  , and our team will reach out to provide you with an initial repair
                  estimate.
                </p>
              </div>

              <div className="mb-6">
                <p className="text-gray-700 text-base">
                  If you have any questions, feel free to call us directly at:{' '}
                  <span className="font-semibold">Toll-Free: 833-881-6083</span>.<br/> <br/>Hours of Operation:  <span className="font-semibold">8:00 am - 5:00 pm cst Monday-Friday</span>.
                </p>
                <p className="font-semibold text-gray-700 text-base">
                  Hours of Operation 8:00 am - 5:00 pm cst Monday-Friday
                </p>
              </div>

              <div className="mt-6 border-t pt-4">
                <p className="text-sm text-gray-500 italic">
                  This website will continue to be updated and will eventually include
                  a full interactive catalog for warranty claims, as well as a direct
                  portal for submitting estimates.
                </p>
              </div>
            </div>
        </div>
       </div>
    </div>
  );
}