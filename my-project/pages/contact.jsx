export default function Contact() {
  return (
    <section class="py-10 bg-gray-200 from-fuchsia-600 to-blue-600 sm:py-16 lg:py-24">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Contact us
          </h2>
          <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-black">
            Here you can contact us.
          </p>
        </div>

        <div class="max-w-6xl mx-auto mt-12 overflow-hidden bg-white rounded-md shadow-md lg:mt-20">
          <div class="grid items-stretch grid-cols-1 lg:grid-cols-5">
            <div class="lg:col-span-3">
              <div class="p-6 sm:p-10">
                <h3 class="text-2xl font-semibold text-black">
                  Send us a message
                </h3>

                <form action="#" method="POST" class="mt-8">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                    <div>
                      <label for="" class="text-base font-medium text-gray-900">
                        {" "}
                        Your name{" "}
                      </label>
                      <div class="mt-2.5 relative">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder=""
                          class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label for="" class="text-base font-medium text-gray-900">
                        {" "}
                        Your email{" "}
                      </label>
                      <div class="mt-2.5 relative">
                        <input
                          type="email"
                          name=""
                          id=""
                          placeholder=""
                          class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label for="" class="text-base font-medium text-gray-900">
                        {" "}
                        Phone number{" "}
                      </label>
                      <div class="mt-2.5 relative">
                        <input
                          type="tel"
                          name=""
                          id=""
                          placeholder=""
                          class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label for="" class="text-base font-medium text-gray-900">
                        {" "}
                        Problem{" "}
                      </label>
                      <div class="mt-2.5 relative">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder=""
                          class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                        />
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <label for="" class="text-base font-medium text-gray-900">
                        {" "}
                        Message{" "}
                      </label>
                      <div class="mt-2.5 relative">
                        <textarea
                          name=""
                          id=""
                          placeholder=""
                          class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md resize-y bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                          rows="4"
                        ></textarea>
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <button
                        type="submit"
                        class="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-800 focus:bg-blue-700"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div class="bg-white lg:col-span-2">
              <div class="h-full p-6 sm:p-10">
                <div class="flex flex-col justify-between h-full">
                  <div>
                    <h4 class="text-2xl font-semibold text-black">
                      Contact info
                    </h4>

                    <div class="mt-8 space-y-7">
                      <div class="flex items-start">
                        <svg
                          class="flex-shrink-0 text-blue-600 w-7 h-7"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span class="block ml-3 text-base text-black">
                          {" "}
                          ewejwhekjwekwbekwe, Spain{" "}
                        </span>
                      </div>

                      <div class="flex items-start">
                        <svg
                          class="flex-shrink-0 text-blue-600 w-7 h-7"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <span class="block ml-3 text-base text-black">
                          {" "}
                          Web3Basketball@gmail.com{" "}
                        </span>
                      </div>

                      <div class="flex items-start">
                        <svg
                          class="flex-shrink-0 text-blue-600 w-7 h-7"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <div class="ml-3">
                          <span class="block text-base text-black">
                            {" "}
                            (111) 444-444{" "}
                          </span>
                          <span class="block mt-1 text-base text-black">
                            {" "}
                            (111) 555-5555{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="mt-8 lg:mt-auto">
                    <hr class="border-black" />
                    <div class="flex items-center justify-between mt-7">
                      <p class="text-lg font-semibold text-black">
                        Follow us on
                      </p>

                      <ul class="flex items-center justify-end space-x-3">
                        <li>
                          <a
                            href="https://twitter.com/Web3Basketball"
                            title=""
                            class="
                                                    flex
                                                    items-center
                                                    justify-center
                                                    text-gray-800
                                                    transition-all
                                                    duration-200
                                                    bg-transparent
                                                    border border-black
                                                    rounded-full
                                                    w-7
                                                    h-7
                                                    focus:bg-blue-600
                                                    hover:text-white
                                                    focus:text-white
                                                    hover:bg-blue-600 hover:border-blue-600
                                                    focus:border-blue-600
                                                "
                          >
                            <svg
                              class="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                            </svg>
                          </a>
                        </li>

                        <li>
                          <a
                            href="#"
                            title=""
                            class="
                                                    flex
                                                    items-center
                                                    justify-center
                                                    text-gray-800
                                                    transition-all
                                                    duration-200
                                                    bg-transparent
                                                    border border-black
                                                    rounded-full
                                                    w-7
                                                    h-7
                                                    focus:bg-blue-600
                                                    hover:text-white
                                                    focus:text-white
                                                    hover:bg-blue-600 hover:border-blue-600
                                                    focus:border-blue-600
                                                "
                          >
                            <svg
                              class="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                            </svg>
                          </a>
                        </li>

                        <li>
                          <a
                            href="#"
                            title=""
                            class="
                                                    flex
                                                    items-center
                                                    justify-center
                                                    text-gray-800
                                                    transition-all
                                                    duration-200
                                                    bg-transparent
                                                    border border-black
                                                    rounded-full
                                                    w-7
                                                    h-7
                                                    focus:bg-blue-600
                                                    hover:text-white
                                                    focus:text-white
                                                    hover:bg-blue-600 hover:border-blue-600
                                                    focus:border-blue-600
                                                "
                          >
                            <svg
                              class="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                              <circle cx="16.806" cy="7.207" r="1.078"></circle>
                              <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                            </svg>
                          </a>
                        </li>

                        <li>
                          <a
                            href="https://github.com/AlexFedotovqq"
                            title=""
                            class="
                                                    flex
                                                    items-center
                                                    justify-center
                                                    text-gray-800
                                                    transition-all
                                                    duration-200
                                                    bg-transparent
                                                    border border-black
                                                    rounded-full
                                                    w-7
                                                    h-7
                                                    focus:bg-blue-600
                                                    hover:text-white
                                                    focus:text-white
                                                    hover:bg-blue-600 hover:border-blue-600
                                                    focus:border-blue-600
                                                "
                          >
                            <svg
                              class="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                              ></path>
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
