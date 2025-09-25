'use client';

import { ConfigProvider, Input } from 'antd';

export default function InputComponent() {
  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 4,
          controlHeight: 40,
        },
      }}
    >
      <Input placeholder="Type to search..." />
    </ConfigProvider>
  );
}
