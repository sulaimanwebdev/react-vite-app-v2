import { Link, useLocation } from "react-router-dom";
import routes from "./routes";

const IconStyle = {
  active: "text-blue-500 w-5 fill-current",
  default: "opacity-30 hover:opacity-100 w-5 fill-current",
};

const Icons = () => {
  const location = useLocation();
  console.log(location)
  return (
    <div className="gap-8 flex flex-col">
      {routes.map((route) => (
        <Link to={route.path} key={route.path}>
          <div className="flex justify-center group">
            <route.icon
              className={
                IconStyle[location.pathname === route.path ? "active" : "default"]
              }
            />
                   <div class="hidden group-hover:flex z-10">
			<span class="absolute ml-2 text-s leading-none text-white bg-gray-700 rounded px-3 py-1 whitespace-no-wrap">{route.name}</span>
		</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Icons;
