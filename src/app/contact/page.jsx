import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="flex items-center gap-10">
      <div className="flex-1 relative h-[500px]">
        <Image
          src="/contact.png"
          alt="contact image"
          fill
          className="object-contain"
        />
      </div>
      <div className="flex-1 flex">
        <form action="" className="flex-1 flex flex-col gap-5">
          <input
            type="text"
            placeholder="Your name"
            className="p-4 rounded border-none outline-none bg-[#2d2b42]"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="p-4 rounded border-none outline-none bg-[#2d2b42]"
          />
          <input
            type="number"
            placeholder="Phone Number (Optional)"
            className="p-4 rounded border-none outline-none bg-[#2d2b42]"
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="5"
            placeholder="Message"
            className="p-4 rounded border-none outline-none bg-[#2d2b42]"
          ></textarea>
          <button className="px-4 py-3 bg-[#367dfd] text-white cursor-pointer font-bold border-none outline-none rounded">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
