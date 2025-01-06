import {
  Button,
  Space,
  message,
} from "antd";
import { userService } from "@/services/userService";

function App() {
  const testUserService = async () => {
    try {
      // Test phone authentication
      const phoneAuthResult =
        await userService.authPhone({
          phone: "13800138000",
          authType: "sms",
        });
      console.log(phoneAuthResult);
      if (phoneAuthResult) {
        message.success(
          "Phone authentication test successful"
        );
      }
    } catch (error) {
      message.error(
        "Phone authentication test failed" +
          error
      );
    }
  };

  return (
    <Space
      direction="vertical"
      style={{ padding: 20 }}
    >
      <h1>UserService Test</h1>
      <Button
        type="primary"
        onClick={testUserService}
      >
        Test Phone Authentication
      </Button>
    </Space>
  );
}

export default App;
