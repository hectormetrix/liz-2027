import { Star } from "lucide-react";
import SectionHeading from "@/components/home/SectionHeading";

// Client reviews carried over from the current site
const REVIEWS = [
  {
    name: "Michael Hernandez",
    text: "My wife and I could not have been represented by a better attorney. She has handled our case with the utmost professionalism, patience, and extreme dedication. The passion she carries for her cases and her clients is unmatched! She represented us as if she were a part of our family. Highly recommended!!!!",
  },
  {
    name: "Em GMoreira",
    text: "I definitely recommend! Excellent lawyer!! We had someone else working on our case for many years and nothing was resolved, until I came to Mrs. Valdez-Garza. We were beyond satisfied as to how she handled everything and how quickly it concluded. She rocks!!",
  },
  {
    name: "Freddy Gonzalez Jr",
    text: "She is a strong, intelligent, and empathic attorney. She takes no short cuts and has changed my life and my family's for the best! Thanks Liz!",
  },
  {
    name: "Yvonne Barraza",
    text: "Great attorney. Cares about clients and wants to do her best for them. Will do her best for her clients!",
  },
];

const ClientReviews = () => (
  <section className="relative isolate overflow-hidden bg-brand-charcoal px-6 py-24 text-white">
    <img
      src="/images/seal-white.png"
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute -right-32 top-1/2 -z-10 w-[640px] -translate-y-1/2 opacity-[0.03]"
    />
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        tone="dark"
        eyebrow="Client Reviews"
        title={
          <>
            What Our <span className="text-brand-red">Clients Say</span>
          </>
        }
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {REVIEWS.map((review) => (
          <figure
            key={review.name}
            className="relative flex flex-col rounded-lg border border-white/10 bg-black/40 p-8 transition-colors hover:border-brand-red/50"
          >
            <span className="absolute right-7 top-3 font-cinzel text-7xl font-black leading-none text-brand-red/25" aria-hidden="true">
              &ldquo;
            </span>
            <div className="flex gap-1" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-brand-red text-brand-red" aria-hidden="true" />
              ))}
            </div>
            <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-white/80">“{review.text}”</blockquote>
            <figcaption className="mt-6 border-t border-white/10 pt-5 font-cinzel text-base font-bold tracking-wider">
              {review.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default ClientReviews;
