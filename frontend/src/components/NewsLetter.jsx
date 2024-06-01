

const NewsLetter = () => {
  return (
    <section className="max_padd_container py-12 xl:py-28 bg-white">
        <div className="mx-auto xl:w-[80%] flexcenter flex-col gap-y-8
        w-full max-w-[666px]">
            <h3 className="h3">Get Exclusive Offers on Your Email</h3>
            <h4 className="uppercase bold-18">Subscribe to our News Letter and Stay updated</h4>
            <div className="flex between rounded-full ring-1 ring-slate-900/10 hover:ring-slate-900/15 
            bg-primary mt-8 w-full max-w[588px]">
                <input type="email" placeholder="your email address" 
                className="w-full bg-transparent ml-9  border-none outline-none regular-16"/>
                <button className="btn_dark_rounded">Subscribe</button>
            </div>
        </div>
    </section>
  )
}

export default NewsLetter