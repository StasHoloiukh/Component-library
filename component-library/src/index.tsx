import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Input } from './components/Input/Input';
import { Toast } from './components/Toast/Toast';
import { SidebarMenu } from './components/SidebarMenu/SidebarMenu';

function App() {
  const [toastVisible, setToastVisible] =  useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <h1>Test Components</h1>

      <h2>Input</h2>
      <Input placeholder="Type something..." clearable type="text" />
      <Input placeholder="Password..." type="password" />

      <h2>Toast</h2>
      <button onClick={() => setToastVisible(true)}>Show Toast</button>
      {toastVisible && (

        <Toast
          message="Hello! This is a toast."
          type="success"
          onClose={() => setToastVisible(false)}
        />
      )}

      <h2>SidebarMenu</h2>
      <button onClick={() => setSidebarOpen(true)}>Open Sidebar</button>
      <SidebarMenu
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        items={[
          { label: 'Home' },
          { label: 'Products', subItems: [{ label: 'Shoes' }, { label: 'Hats' }] },
        ]}
      />
    </div>
  );
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
