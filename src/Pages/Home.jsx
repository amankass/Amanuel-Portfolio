import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="space-y-12 dark:bg-gray-100 dark:text-gray-800">
        <section>
          <div className="container flex flex-col items-center px-4 py-8 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
            <h1 className="text-4xl font-bold leading-none sm:text-5xl">
              Quisquam necessita vel
              <span className="dark:text-violet-600">laborum doloribus</span>
              delectus
            </h1>
            <p className="px-8 mt-8 mb-12 text-lg">
              Cupiditate minima voluptate temporibus quia? Architecto beatae
              esse ab amet vero eaque explicabo!
            </p>
            <div className="flex flex-wrap justify-center">
              <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">
                Get started
              </button>
              <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-900 dark:border-gray-300">
                Learn more
              </button>
            </div>
          </div>
        </section>
        <section className="p-6 dark:bg-gray-100 dark:text-gray-800">
          <div className="container grid justify-center grid-cols-2 mx-auto text-center lg:grid-cols-3">
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leading-none lg:text-6xl">50+</p>
              <p className="text-sm sm:text-base">Clients</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leading-none lg:text-6xl">89K</p>
              <p className="text-sm sm:text-base">Followers on social media</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leading-none lg:text-6xl">3</p>
              <p className="text-sm sm:text-base">Published books</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leading-none lg:text-6xl">8</p>
              <p className="text-sm sm:text-base">TED talks</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leading-none lg:text-6xl">22</p>
              <p className="text-sm sm:text-base">Years of experience</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leading-none lg:text-6xl">10+</p>
              <p className="text-sm sm:text-base">Workshops</p>
            </div>
          </div>
        </section>

        <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
          <div className="container flex flex-col justify-center p-4 mx-auto space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
            <div className="flex flex-col space-y-4 text-center lg:text-left">
              <h1 className="text-5xl font-bold leading-none">
                Get free weekly tips
              </h1>
              <p className="text-lg">
                Subscribe to my weekly newsletter to find out about the latest
                and greatest news about just about everything!
              </p>
            </div>
            <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
              <div className="flex flex-row">
                <input
                  type="text"
                  placeholder="example@email.com"
                  className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
                />
                <button
                  type="button"
                  className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-600 dark:text-gray-50"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container px-6 py-12 mx-auto">
            <div className="grid items-center gap-4 xl:grid-cols-5">
              <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                <h2 className="text-4xl font-bold">
                  Duo assum utroque appetere an
                </h2>
                <p className="dark:text-gray-600">
                  Pri ex magna scaevola moderatius. Nullam accommodare no vix,
                  est ei diceret alienum, et sit cetero malorum. Et sea iudico
                  consequat, est sanctus adipisci ex.
                </p>
              </div>
              <div className="p-6 xl:col-span-3">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="grid content-center gap-4">
                    <div className="p-6 rounded shadow-md dark:bg-gray-50">
                      <p>
                        An audire commodo habemus cum. Ne sed corrumpit
                        repudiandae. Tota aliquip democritum pro in, nec
                        democritum intellegam ne. Propriae volutpat dissentiet
                        ea sit, nec at lorem inani tritani, an ius populo
                        perfecto vituperatoribus. Eu cum case modus salutandi,
                        ut eum vocent sensibus reprehendunt.
                      </p>
                      <div className="flex items-center mt-4 space-x-4">
                        <img
                          src="https://source.unsplash.com/51x51/?portrait"
                          alt=""
                          className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                        />
                        <div>
                          <p className="text-lg font-semibold">Leroy Jenkins</p>
                          <p className="text-sm dark:text-gray-600">
                            CTO of Company Co.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 rounded shadow-md dark:bg-gray-50">
                      <p>
                        Sit wisi sapientem ut, pri civibus temporibus
                        voluptatibus et, ius cu hinc fabulas. Nam meliore
                        minimum et, regione convenire cum id. Ex pro eros mucius
                        consectetuer, pro magna nulla nonumy ne, eam putent
                        iudicabit consulatu cu.
                      </p>
                      <div className="flex items-center mt-4 space-x-4">
                        <img
                          src="https://source.unsplash.com/52x52/?portrait"
                          alt=""
                          className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                        />
                        <div>
                          <p className="text-lg font-semibold">Leroy Jenkins</p>
                          <p className="text-sm dark:text-gray-600">
                            CTO of Company Co.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid content-center gap-4">
                    <div className="p-6 rounded shadow-md dark:bg-gray-50">
                      <p>
                        Putant omnium elaboraret per ut. Id dicta tritani
                        nominavi quo, mea id justo errem elaboraret. Agam mollis
                        scripserit ea his, ut nec postea verear persecuti. Ea
                        noster senserit eam, ferri omittantur ei nec. Id mel
                        solet libris efficiantur, commune explicari et eos. Case
                        movet ad est, sed tota vocent appetere ea.
                      </p>
                      <div className="flex items-center mt-4 space-x-4">
                        <img
                          src="https://source.unsplash.com/53x53/?portrait"
                          alt=""
                          className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                        />
                        <div>
                          <p className="text-lg font-semibold">Leroy Jenkins</p>
                          <p className="text-sm dark:text-gray-600">
                            CTO of Company Co.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 rounded shadow-md dark:bg-gray-50">
                      <p>
                        Te omnes virtute volutpat sed. Ei esse eros interesset
                        vel, ei populo denique ocurreret vix, eu cum pertinax
                        mandamus vituperatoribus. Solum nihil luptatum per ex,
                        ei amet viderer eos. Ea illum labitur mnesarchum pro.
                        Eius meis salutandi ei nam, alterum expetenda et nec.
                        Expetenda intellegat at eum, per mazim sanctus
                        honestatis ad. Ei noluisse invenire vix. Te ancillae
                        patrioque qui, probo bonorum vivendum ex vim.
                      </p>
                      <div className="flex items-center mt-4 space-x-4">
                        <img
                          src="https://source.unsplash.com/54x54/?portrait"
                          alt=""
                          className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                        />
                        <div>
                          <p className="text-lg font-semibold">Leroy Jenkins</p>
                          <p className="text-sm dark:text-gray-600">
                            CTO of Company Co.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
