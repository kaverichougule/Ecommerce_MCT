import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { CgProfile } from "react-icons/cg";
import { PiBagBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
    const OnlineShopping=[
        "Men","Women","Kids", "Accessories","Beauty"
    ]
    const CustomerPolicies=[
        "Contact Us","FAQ","T&C","Terms of Use","Track Order"
    ]
    const ConnectUs=[
        "Facebook","Twitter","Instagram"
    ]
  return (
    <div className="bg-gray-800">
        <div className="flex justify-between p-20">
            <div className="flex flex-col">
                <img
                    className="h-8 w-auto mb-5"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                />
                <p>Making the world a better place through constructing elegant hierarchies</p>
            </div>

            <div className="">
                <h3 className="font-bold mb-5">Online Shopping</h3>
                <div className="flex flex-col">
                    {
                        OnlineShopping.map((items,index)=>{
                            return <p key={index} >{items}</p>
                        })
                    }
                </div>
            </div>
            <div className="">
                <h3 className="font-bold mb-5">Customer Policies</h3>
                <div className="flex flex-col">
                    {
                        CustomerPolicies.map((items,index)=>{
                            return <p key={index}>{items}</p>
                        })
                    }
                </div>
            </div>

            <div className="">
                <h3 className="font-bold mb-5">Connect Us</h3>
                <div className="flex flex-col">
                    {
                        ConnectUs.map((items,index)=>{
                            return <p key={index}>{items}</p>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  );
}
