import { Button, Space } from "antd";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <Space>
        <Button type="primary">
          Primary Button
        </Button>
        <Button>Default Button</Button>
        <Button type="dashed">
          Dashed Button
        </Button>
      </Space>
    </div>
  );
}

export default App;
