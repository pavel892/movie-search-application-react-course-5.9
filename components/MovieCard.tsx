import GenreTag from './GenreTag';
import MovieRating from './MovieRating';
import RateComponent from './Rate';
import { format, parseISO } from 'date-fns';

interface MovieCardProps {
  image: string;
  title: string;
  rating: number;
  date: string;
  description: string;
}

export default function MovieCard({ image, title, rating, date, description }: MovieCardProps) {
  const formatted = parseISO(date);
  const formattedDate = format(formatted, 'LLLL d, yyyy');
  return (
    <>
      <div
        style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
        className="h-[245px] lg:h-[279px] mb-5 md:mb-[37px] lg:mb-[37px] hidden lg:flex"
      >
        <div>
          <img
            className="mt-1.5 ml-2.5 lg:mt-0 lg:ml-0 h-[91px] w-[60px] lg:h-[100%] lg:w-[183px] max-w-none"
            src={`https://image.tmdb.org/t/p/w1280${image}`}
            alt="poster"
          />
        </div>

        <div className="mt-[4px] ml-[13px] lg:mt-[10px] mr-[20px] mb-[10px] lg:ml-[20px]">
          <div className="flex justify-between">
            <h1 className="text-xl mb-[7px]">{title}</h1>
            <MovieRating rating={rating} />
          </div>

          <p className="text-xs mb-[7px]" style={{ color: '#827E7E' }}>
            {formattedDate}
          </p>
          <div className="mb-[7px]">
            <GenreTag />
            <GenreTag />
          </div>

          <div className="top-[120px]">
            <p className="mb-[7px] text-xs line-clamp-4 lg:line-clamp-6">{description}</p>
            <div className="flex">
              <div className="ml-auto lg:ml-0">
                <RateComponent rating={Number(rating.toFixed(1))} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
        className="h-[255px] mb-5 md:mb-[37px] lg:hidden md:flex-col sm:flex-col"
      >
        <div className="flex">
          <div>
            <img
              className="mt-1.5 ml-2.5  h-[91px] w-[60px] max-w-none"
              src={`https://image.tmdb.org/t/p/w1280${image}`}
              alt="poster"
            />
          </div>

          <div className="mt-[4px] ml-[13px]  mr-[20px] mb-[10px]  w-full">
            <div className="flex justify-between">
              <h1 className="text-xl mb-[7px]">{title}</h1>
              <MovieRating rating={rating} />
            </div>

            <p className="text-xs mb-[7px]" style={{ color: '#827E7E' }}>
              {formattedDate}
            </p>
            <div className="mb-[7px]">
              <GenreTag />
              <GenreTag />
            </div>
          </div>
        </div>

        <div className="top-[120px]">
          <p className="ml-2.5 mr-2.5 mb-[7px] text-xs line-clamp-4">{description}</p>
          <div className="flex">
            <div className="ml-auto mr-2.5">
              <RateComponent rating={Number(rating.toFixed(1))} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
