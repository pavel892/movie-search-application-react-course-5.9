'use client';

import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import InputComponent from '@/components/Input';
import { useState } from 'react';
import MovieCard from './MovieCard';

interface MovieObject {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MovieObjectProps {
  movies: MovieObject[];
}

export default function TabsComponent({ movies }: MovieObjectProps) {
  const [currentTab, setCurrentTab] = useState<'tab1' | 'tab2'>('tab1');

  const onChange = (key: string) => {
    if (key === 'tab2') {
      setCurrentTab('tab2');
    } else {
      setCurrentTab('tab1');
    }
  };

  const items: TabsProps['items'] = [
    {
      key: 'tab1',
      label: 'Search',
    },
    {
      key: 'tab2',
      label: 'Rated',
    },
  ];
  return (
    <>
      <Tabs
        style={{ fontFamily: 'var(--font-inter)' }}
        centered={true}
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
      />

      <div className="flex justify-center">
        <div className="w-[388px] md:w-[92%] lg:w-[988px]">
          {currentTab === 'tab1' && <InputComponent />}
          <div className="lg:grid lg:grid-cols-[48%_48%] lg:gap-x-[4%] md:grid md:grid-cols-[48%_48%] md:gap-x-[4%] mt-2.5 md:mt-[34px] lg:mt-[34px]">
            {movies.map((movie) => {
              return (
                <MovieCard
                  key={movie.id}
                  image={movie.poster_path}
                  title={movie.title}
                  rating={movie.vote_average}
                  date={movie.release_date}
                  description={movie.overview}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
