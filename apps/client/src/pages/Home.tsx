import Banner from "@repo/ui/banner"
import Yapbanner from "@repo/ui/yapbanner"
import Trusted from "@repo/ui/liarbrands"

export const Home = () => {
  return <div>
    <Banner />

    <div className="features bg-yellow-400 dark:bg-gray-700 py-20 flex justify-center">
      <div className="container w-full max-w-7xl mx-auto flex items-center gap-16">
        <div className="item flex flex-col gap-4 flex-2">
          <h1 className="text-4xl font-semibold dark:text-white">Access freelancers on the go</h1>
          <div className="flex items-center gap-2">
            <p className="text-lg dark:text-white">The best for every budget</p>
          </div>
          <p className="text-base mb-4 dark:text-white">
            <i className='bx bx-check'></i>Find high-quality services at every price point. No hourly rates, just project-based pricing.
          </p>
          <div className="flex items-center gap-2">
            <p className="text-lg dark:text-white"><i className='bx bx-check'></i>Quality work done quickly</p>
          </div>
          <p className="text-base mb-4 dark:text-white">
            <i className='bx bx-check'></i>Find the right freelancer to begin working on your project within minutes.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md mt-auto">Learn More</button>
        </div>
        <div className="item">
          <iframe className="w-[600px] h-[315px]" src="https://www.youtube.com/embed/8PB0l7x73rM?si=AEAPr5t9VmRj50SO"
            title="YouTube video player" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </div>
    <Yapbanner />
    <Trusted />

  </div>
}
