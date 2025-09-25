import { ConfigProvider, Tag } from 'antd';

export default function GenreTag() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: 'rgba(0,0,0,0.65)',
          borderRadiusSM: 2,
        },
      }}
    >
      <Tag style={{ fontFamily: 'var(--font-inter)' }}>Genre</Tag>
    </ConfigProvider>
  );
}
