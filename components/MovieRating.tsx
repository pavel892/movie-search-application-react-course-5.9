interface MovieRatingProps {
  rating: number;
}

export default function MovieRating({ rating }: MovieRatingProps) {
  return (
    <div className="rounded-full border-2 border-[#E9D100] w-[30px] h-[30px] -mr-3 lg:-mr-[11px] text-xs flex items-center justify-center shrink-0">
      {rating.toFixed(1)}
    </div>
  );
}
