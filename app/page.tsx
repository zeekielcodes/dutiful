import Image from "next/image";

export default function Home() {
  return (
    <div className="py-4  xl:max-w-[1500px]">
      {/* Hero */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 px-4 md:px-8 lg:px-12 py-4 md:py-8 items-center">
        <div>
          <h1 className="text-[24px] md:text-[30px] lg:text-[36px] text-[#230B34] font-recoleta-alt font-semibold">
            List and grow your business with just few clicks
          </h1>
          <p className="text-small md:text-base text-sub">
            Eliminate manual work and save time by listing your business or
            service on the best business directory in Nigeria.
          </p>
        </div>
        <div className="bg-[url('/rectangle-bg.svg')] flex justify-center items-end bg-contain bg-no-repeat bg-bottom">
          <Image
            src="/dashboard-ui.png"
            height={563}
            width={428}
            alt="Dashboard"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 px-4 md:px-8 lg:px-12 py-4 md:py-8 items-center">
        <div className="">
          <Image
            src="/reviews.png"
            height={563}
            width={528}
            alt="Dashboard"
            className="w-full h-auto aspect-auto"
          />
        </div>
        <div>
          <h1 className="text-[24px] md:text-[30px] lg:text-[36px] text-[#230B34] font-recoleta-alt font-semibold">
            Collect reviews and ratings from customers
          </h1>
          <p className="text-small md:text-base text-sub">
            Accelerate your business reputation by 90% and gain social proof
            through reviews and ratings requested from customers.
          </p>
        </div>
      </div>

      <div className="px-4 md:px-8 lg:px-12 py-4 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 bg-[#FCFAFF] p-4 md:p-8 lg:p-12 rounded-2xl items-center">
          <div className="bg-[url('/mockup-bg.svg')] flex justify-center items-end bg-contain bg-no-repeat bg-bottom">
            <Image
              src="/phone.png"
              height={400}
              width={300}
              alt="Mock up"
              className="w-full h-auto aspect-auto"
            />
          </div>
          <div>
            <div className="p-4 md:p-6 lg:p-8 rounded-2xl shadow-sm bg-white mb-3">
              <Image
                src="/discover.svg"
                height={40}
                width={40}
                alt="Discover"
              />
              <h3 className="font-bold text-base text-[#464646] my-2">
                Get Discovered
              </h3>
              <p className="text-small font-[450] text-[#464646]">
                Dutiful is more than just a business directory; it also enhances
                your web profile. The platform makes use of SEO techniques to
                boost each listing's performance in the SERPs, providing any
                business the chance to rank, regardless of how strong their
                current online presence is.
              </p>
            </div>
            <div className="p-4 md:p-6 lg:-translate-x-24 lg:p-8 rounded-2xl shadow-sm bg-white mb-3">
              <Image src="/chat.svg" height={40} width={40} alt="Chat" />
              <h3 className="font-bold text-base text-[#464646] my-2">
                Instant Chat
              </h3>
              <p className="text-small font-[450] text-[#464646]">
                You'll be able to chat and send voice recordings with potential
                and existing customers, including managing your captured leads
                anytime, anywhere via the platform
              </p>
            </div>
            <div className="p-4 md:p-6 lg:p-8 rounded-2xl shadow-sm bg-white">
              <Image
                src="/quotation.svg"
                height={40}
                width={40}
                alt="Quotation"
              />
              <h3 className="font-bold text-base text-[#464646] my-2">
                Quotations
              </h3>
              <p className="text-small font-[450] text-[#464646]">
                In addition to providing customers with access to information,
                offering customer quotations is very advantageous to the way you
                conduct your business. On Dutiful, you'll be able to send and
                receive quotation from customers - an important step in lead
                management.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center lg:gap-8 px-4 md:px-8 lg:px-20 py-4 md:py-8">
        <div className="">
          <Image
            src="/calendar.svg"
            height={563}
            width={528}
            alt="Calendar"
            className="w-full h-auto aspect-auto"
          />
        </div>
        <div>
          <h1 className="text-[24px] md:text-[30px] lg:text-[36px] text-[#230B34] font-recoleta-alt font-semibold">
            Accept and sell appointments
          </h1>
          <p className="text-small md:text-base text-sub">
            Let customers book their own appointment or consultation. Start
            accepting payments for appointments through your booking page.
          </p>
        </div>
      </div>
    </div>
  );
}
