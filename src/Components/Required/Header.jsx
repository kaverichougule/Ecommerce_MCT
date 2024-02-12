import { Fragment, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { CgProfile } from "react-icons/cg";
import { PiBagBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoggedIn,
  setCurrentUser,
  userAuthentication,
} from "../../Redux/AuthSlice";
import "./Header.css"

const navigation = [
  { name: "CLOTHING", to: "/clothing", current: true, data: "clothing" },
  { name: "ACCESSORIES", to: "/accessories", current: false, data: "grocery" },
  { name: "GROCERIES", to: "/groceries", current: false, data: "accessories" },
  { name: "ELECTRONICS", to: "/electronics", current: false, data: "laptops" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser, isLoggedIn } = useSelector((state) => state.User);
  useEffect(() => {
    if (Object.keys(currentUser).length !== 0) {
      dispatch(setLoggedIn(true));
      if(location.pathname === "/"  || location.pathname === "/Register"){
        navigate("/");
      }
    } else {
      dispatch(setLoggedIn(false));
    }
  }, [currentUser]);

  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("currentUser")) !== null &&
      Object.keys(JSON.parse(localStorage.getItem("currentUser"))).length !== 0
    ) {
      dispatch(setCurrentUser(JSON.parse(localStorage.getItem("currentUser"))));
    }
  }, []);
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <div>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center cursor-pointer">
                  <NavLink to="/">
                    <h1 className="projectName">TrendBazaar</h1>
                  </NavLink>
                </div>
                <div className="flex items-center gap-10">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex items-center space-x-4">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.to}
                          className={({ isActive, isPending }) =>
                            isPending
                              ? "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                              : isActive
                              ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                              : ""
                          }
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                  <div className="flex w-[30rem] bg-[#3B3B3B] rounded-md p-2">
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-[30rem] rounded-md outline-none"
                    />
                    <IoSearch className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <div className="absolute gap-[1rem] inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <FaRegHeart className="h-6 w-6" aria-hidden="true" />
                </button>
                <NavLink to="/cart">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <PiBagBold className="h-6 w-6" aria-hidden="true" />
                </button>
                </NavLink>

                {/* Profile dropdown */}

                {!isLoggedIn ? (
                  <Menu as="div" className="relative ml-3 flex gap-2">
                    <NavLink to={"/register"}>
                      <button className="p-2 rounded-md text-[#9CA3AF]">
                        Login/Register
                      </button>
                    </NavLink>
                  </Menu>
                ) : (
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <CgProfile className="h-8 w-8 rounded-full" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Orders
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <p
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                              onClick={() => {
                                dispatch(
                                  userAuthentication({ type: "SIGNOUT" })
                                );
                                localStorage.removeItem("currentUser");
                              }}
                            >
                              Sign out
                            </p>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
