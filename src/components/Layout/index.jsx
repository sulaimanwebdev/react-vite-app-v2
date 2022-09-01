import Sidebar from "../Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex w-screen h-screen overflow-x-auto">
      <Sidebar />

      <main className="w-full overflow-x-hidden">{children}</main>
    </div>
  );
};

export default Layout;
