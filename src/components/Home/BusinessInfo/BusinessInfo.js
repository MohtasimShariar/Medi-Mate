import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import {faClock, faMapMarked, faPhone,} from "@fortawesome/free-solid-svg-icons";


const infosData = [
  {
    title: "Opning Hours",
    description: "We are open for 7 days",
    icon: faClock,
    background: "primary",
  },
  {
    title: "Visit ours location",
    description: "Dhaka bangladesh ",
    icon: faMapMarked,
    background: "dark",
  },
  {
    title: "Call us now",
    description: "01754194004",
    icon: faPhone,
    background: "primary",
  },
];

const BusinessInfo = () => {
  return (
    <section className="d-flex justify-content-center">
      <div className="w-75 row">
        {infosData.map((info) => (
          <InfoCard info={info}></InfoCard>
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
