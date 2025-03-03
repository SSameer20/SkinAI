import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import view from "../media/mountain-view-1.jpg";
import { TeamCard, ValueCard } from "@/components/ui/Card";
import { teamMembers, values } from "@/utils/SeedData";
import React from "react";

const About: React.FC = () => {
  return (
    <>
      <Navigation />
      <div className="max-w-5xl mx-auto py-12 px-4">
        <section className="flex flex-row justify-start items-center w-full h-[60vh]">
          <div className="flex flex-col justify-around items-stretch">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <p className="text-lg text-gray-600 mb-8 w-2/3">
              We're passionate about creating innovative solutions that make a
              difference in healthcare industry by integrating AI into
              traditional healthcare system. Founded in 2024, our team brings
              together expertise from diverse tech backgrounds like Machine
              learning and AI.
            </p>
          </div>
          <img src={view} alt="bg" className="h-1/2 w-full rounded-sm" />
        </section>

        <section className="flex flex-col gap-10 justify-center items-center w-[100%] h-[100vh]">
          <h1 className="text-4xl font-bold mb-6">Values</h1>

          <div className="flex flex-row gap-5 items-stretch">
            {values.map((item, index) => {
              return (
                <ValueCard key={index} logo={item.icon} name={item.name} />
              );
            })}
          </div>
        </section>

        <section className="flex flex-col gap-10 justify-center items-center">
          <h1 className="text-4xl font-bold mb-6">Meet the Team</h1>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 w-[100%]">
            {teamMembers.map((item, index) => {
              return (
                <TeamCard
                  className="hover:scale-110 transition duration-75"
                  key={index}
                  name={item.name}
                  role={item.role}
                  image={item.image as string}
                />
              );
            })}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
