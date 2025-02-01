import Logo from "../assets/img/Logo.png";

const MaintenanceNotice = () => {
  return (
    <div className="flex items-center justify-center h-screen  p-4">
      <div className="relative max-w-md w-full bg-white p-8 rounded shadow text-center">
        <img src={Logo} alt="Logo" className="mx-auto mb-4 w-80" />

        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          We'll be back soon!
        </h1>
        <p className="text-lg text-gray-600 mb-2">
          Our website is currently undergoing some upgrades and improvements.
        </p>
        <p className="text-lg text-gray-600">Please check back later.</p>
      </div>
    </div>
  );
};

export default MaintenanceNotice;
