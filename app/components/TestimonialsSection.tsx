import Image from "next/image";

const CARDS = [
  { type: "photo", src: "/people1.png", alt: "Ikenna Agozie" },
  {
    type: "quote",
    quote:
      "When you explained it, it just clicked. Most of us already buy soup in bulk from someone, an auntie, a caterer, someone in the estate. The difference is that this feels structured and reliable. If I can order 5–8 litres of soup properly packaged and know when to restock, that’s a smarter way to eat.",
    name: "Ikenna Agozie",
    location: "Lekki Phase 1",
    avatar: "/people1.png",
  },
  { type: "photo", src: "/people2.png", alt: "Chinelo Okafor" },
  {
    type: "quote",
    quote:
      "What I like is that it’s not another ‘order in 30 minutes’ app. It’s about planning your week. That makes more sense long term. Instead of spending small amounts every day that add up, I’d rather order once and be sorted. It feels more intentional.",
    name: "Amara Osei",
    location: "Magodo",
    avatar: "/people2.png",
  },
  { type: "photo", src: "/people5.png", alt: "Amara Nwosu" },
  {
    type: "quote",
    quote:
      "Honestly, the idea makes so much sense for how we already live. I already know a few women in my area who cook and sell. Getameal just makes it cleaner, safer, and more predictable for both sides.",
    name: "Amara Nwosu",
    location: "Ikeja",
    avatar: "/people2.png",
  },
  { type: "photo", src: "/people4.png", alt: "Ify Eze" },
  {
    type: "quote",
    quote:
      "Selling through WhatsApp works, but it’s informal. Being on a proper platform makes it feel like I’m running a structured kitchen business. That builds trust with customers.",
    name: "Ify Eze",
    location: "Victoria Island",
    avatar: "/people2.png",
  },
  { type: "photo", src: "/people3.png", alt: "Michael Awolabi" },
  {
    type: "quote",
    quote:
      "What matters to me is steady volume. If Getameal can bring repeat customers who order weekly or monthly, that’s stability. I’d rather have predictable bulk orders than many small random ones.",
    name: " Michael Awolabi",
    location: "Ikoyi",
    avatar: "/people2.png",
  },
];

const CARD_W = 689;
const CARD_H = 856;

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-4">
          What People Are Saying
        </h2>
        <p className="text-gray-400 text-sm max-w-xs mx-auto leading-relaxed">
          Early reactions from customers and cooks who have seen the vision of
          Getameal ahead of July 4.
        </p>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto scrollbar-hide">
        <div
          className="flex gap-5 px-6 lg:px-12"
          style={{ width: "max-content" }}
        >
          {CARDS.map((card, i) =>
            card.type === "photo" ? (
              <div
                key={i}
                className="relative shrink-0 overflow-hidden rounded-[30px]"
                style={{ width: CARD_W, height: CARD_H }}
              >
                <Image
                  src={(card as { type: string; src: string; alt: string }).src}
                  alt={(card as { type: string; src: string; alt: string }).alt}
                  fill
                  className="object-cover object-top"
                  sizes="689px"
                />
              </div>
            ) : (
              <div
                key={i}
                className="shrink-0 bg-white rounded-[30px] flex flex-col justify-between p-14 shadow-sm"
                style={{ width: CARD_W, height: CARD_H }}
              >
                <p className="text-gray-800 text-2xl leading-relaxed font-medium">
                  {(card as { type: string; quote: string }).quote}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900 text-lg">
                      {(card as { type: string; name: string }).name}
                    </p>
                    <p className="text-gray-400 text-sm mt-0.5">
                      {(card as { type: string; location: string }).location}
                    </p>
                  </div>
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gray-100 shrink-0">
                    <Image
                      src={(card as { type: string; avatar: string }).avatar}
                      alt={(card as { type: string; name: string }).name}
                      fill
                      className="object-cover object-top"
                      sizes="48px"
                    />
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
