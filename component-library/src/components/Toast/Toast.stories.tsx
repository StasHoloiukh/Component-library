import { Toast } from "./Toast";

export default { title: "Feedback/Toast", component: Toast };

export const Success = () => <Toast message="Success!" type="success" />;
export const Error = () => <Toast message="Error occurred!" type="error" duration={5000} />;