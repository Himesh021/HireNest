import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "../../redux/jobSlice";
const Category = [
  "Frontend Developer",
  "Backend Developer",
  "Full Satck Developer",
  "Data Scientist",
  "Devops Engineer",
  "ML Engineer",
  "AI Engineer",
  "Cybersecurity Engineer",
  "Product Manager",
  "UX/UI Designer",
  "Graphics Engineer",
  "Graphics Designer",
  "Video Editor",
];

const Categories = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchjobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-center text-[#000000] mt-10">
          Explore Job Categories
        </h1>
      </div>
      <Carousel className="w-full max-w-xl mx-auto my-20 ">
        <CarouselContent>
          {Category.map((category, index) => {
            return (
              <CarouselItem className="md:basis-1/2  lg-basis-1/3">
                <Button
                  onClick={() => searchjobHandler(category)}
                  className="bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-full"
                >
                  {category}
                </Button>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Categories;
