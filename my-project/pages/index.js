export default function Home() {
  return (
    <main className="lg:relative bg-gray-200 w-full">
      <div className="mx-auto max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="block  xl:inline">Web3Basketball</span>{" "}
          </h1>
          <p className="mx-auto mt-3 max-w-md text-lg text-black sm:text-xl md:mt-5 md:max-w-3xl">
            Web3Basketball is a platform where we talk about the rules of the
            game, brands, equipment, playing techniques and much more.
          </p>

          <p className="mx-auto mt-3 max-w-md text-lg text-black sm:text-xl md:mt-5 md:max-w-3xl">
            Our content is suitable and will be interesting not only for
            beginners, but also for professional players.
          </p>

          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="/Beginners"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
              >
                For beginners
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="/market"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
              >
                Market
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.pexels.com/photos/1152853/pexels-photo-1152853.jpeg?auto=compress&cs=tinysrgb&w=900"
          alt=""
        />
      </div>
    </main>
  );
}
