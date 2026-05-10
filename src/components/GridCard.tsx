import Image from "next/image";

export type Condition = "New with tags" | "Like new" | "Very good" | "Good";

export interface GridCardProps {
  image: string;
  price: string;
  condition: Condition;
  title: string;
  size: string;
}

const CONDITION_STYLES: Record<Condition, string> = {
  "New with tags": "bg-emerald-100 text-emerald-800",
  "Like new": "bg-teal-100 text-teal-800",
  "Very good": "bg-green-100 text-green-700",
  Good: "bg-gray-100 text-gray-600",
};

export default function GridCard({ image, price, condition, title, size }: GridCardProps) {
  return (
    <article
      className="group bg-white rounded-xl border border-gray-100 overflow-hidden
                 hover:border-gray-200 hover:shadow-md transition-all duration-200 cursor-pointer"
    >
      {/* Image */}
      <div className="relative w-full aspect-3/4 bg-gray-50 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
        />
      </div>

      {/* Card body */}
      <div className="p-3 flex flex-col gap-1.5">
        {/* Price */}
        <p className="text-[1.05rem] font-extrabold text-gray-900 leading-none">{price}</p>

        {/* Condition badge */}
        <span className={`self-start text-[0.65rem] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full ${CONDITION_STYLES[condition]}`}>{condition}</span>

        {/* Title */}
        <p className="text-xs font-medium text-gray-700 leading-snug line-clamp-2">{title}</p>

        {/* Size */}
        <p className="text-[0.7rem] text-gray-400 font-medium">{size}</p>
      </div>
    </article>
  );
}
