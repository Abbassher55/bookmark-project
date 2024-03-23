export default function Newsletter() {
  return (
    <section className="bg-primary">
      <div className="container py-8 text-white max-sm:px-3">
        <div className="flex justify-center">
          <div className="flex flex-col items-center justify-center space-y-6 md:w-1/2">
            <p className="text-center text-sm font-medium tracking-[.4rem]">35,000+ ALREADY JOINED</p>
            <h2 className="max-w-sm text-center text-3xl font-medium leading-10">Stay up-to-date with what we’re doing</h2>
            <form action="">
              <div className="flex gap-2 max-sm:flex-wrap">
                <label htmlFor="email" className="hidden">Email</label>
                <input type="email" id="email" className="w-full rounded-md px-2 text-custom-dark focus-visible:border focus-visible:border-custom-grey focus-visible:outline-none max-sm:py-3 md:min-w-80" required />
                <button type="submit" className="w-full rounded-md bg-secondary px-6 py-3 capitalize">
                  Contact us
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
