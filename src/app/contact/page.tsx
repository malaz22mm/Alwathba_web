export default function Home() {
  return (
    <div className="flex flex-col content-stretch bg-[#0c243b] ">
      <div className="flex h-screen justify-center py-10 ">
        <div
          className="text-card-foreground w-[800px] rounded-lg border bg-white p-8 shadow-sm"
          data-v0-t="card"
        >
          <div className="flex flex-col space-y-1.5 p-6 text-right">
            <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
              اتصل بنا
            </h3>
            <p className="text-muted-foreground text-sm">
              أي سؤال أو ملاحظات؟ فقط اكتب لنا رسالة!
            </p>
          </div>
          <div className="p-6">
            <form className="grid gap-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1.5">
                  <label
                    htmlFor="first-name"
                    className="text-right text-sm font-medium"
                  >
                    الاسم الأخير
                  </label>
                  <input
                    className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-right text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="first-name"
                    placeholder="الاسم الأخير"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <label
                    htmlFor="last-name"
                    className="text-right text-sm font-medium"
                  >
                    الاسم الأول
                  </label>
                  <input
                    className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-right text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="last-name"
                    placeholder="الاسم الأول"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-1.5 text-right">
                <label
                  htmlFor="email"
                  className="text-right text-sm font-medium"
                >
                  البريد الإلكتروني
                </label>
                <input
                  className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-right text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="email"
                  placeholder="البريد الإلكتروني"
                  type="email"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label
                  htmlFor="phone"
                  className="text-right text-sm font-medium"
                >
                  رقم الهاتف
                </label>
                <input
                  className="border-input bg-background  ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-right text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50  "
                  id="phone"
                  placeholder="رقم الهاتف"
                  type="tel"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-right text-sm font-medium"
                >
                  الرسالة
                </label>
                <input
                  className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-24 w-full rounded-md border px-3 py-2 text-right text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="message"
                  placeholder="الرسالة "
                />
              </div>

              <button className="ring-offset-background  focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 ml-auto inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ">
                إرسال
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
