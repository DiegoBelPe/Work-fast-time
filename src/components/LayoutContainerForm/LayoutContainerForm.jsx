import { Outlet } from 'react-router-dom';

function LayoutContainerForm() {
  return (
    <div className="w-96 mx-auto mt-20 p-9 shadow-2xl">
      <Outlet />
    </div>
  );
}

export default LayoutContainerForm;
