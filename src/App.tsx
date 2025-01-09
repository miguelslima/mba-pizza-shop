import { Button } from "./components/ui/button";
import "./index.css";

export function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1>Pizza</h1>
      <Button variant="destructive">Button</Button>
    </div>
  );
}
