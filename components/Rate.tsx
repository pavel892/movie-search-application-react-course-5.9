import { ConfigProvider, Rate } from 'antd';

interface RateComponentProps {
  rating: number;
}

export default function RateComponent({ rating }: RateComponentProps) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Rate: {
            starSize: 16,
          },
        },
      }}
    >
      <Rate allowHalf defaultValue={rating} count={10} />
    </ConfigProvider>
  );
}
