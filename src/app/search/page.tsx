import Image from "next/image";
import SearchHeader from "../global_components/headers/SearchHeader";
import SectionTitle from "../global_components/headers/Section_title";
import Single_Service from "../global_components/reusable_ui/Single_Service";

export default function Search() {
  return (
    <>
      <SearchHeader />
      <SectionTitle title="Results for : " subtitle="found 20 results" />

      <div className="container max-w-7xl m-auto  mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5 md:px-0">
          {dummy_data.map((item, index) => {
            return (
              <Single_Service
                key={index}
                title={item.title}
                description={item.description}
                featured_img={item.featured_img}
                avatar_img={item.avatar_img}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

const dummy_data = [
  {
    title: "Glen Harris",
    description: "Lesotho",
    featured_img: "https://picsum.photos/500/178",
    avatar_img: "https://picsum.photos/200/124",
  },
  {
    title: "Francis Craig",
    description: "Bermuda",
    featured_img: "https://picsum.photos/410/375",
    avatar_img: "https://picsum.photos/182/109",
  },
  {
    title: "Bill Love",
    description: "Poland",
    featured_img: "https://picsum.photos/450/350",
    avatar_img: "https://picsum.photos/185/200",
  },

  {
    title: "Bill Love",
    description: "Poland",
    featured_img: "https://picsum.photos/450/350",
    avatar_img: "https://picsum.photos/185/200",
  },
  {
    title: "Bill Love",
    description: "Poland",
    featured_img: "https://picsum.photos/450/350",
    avatar_img: "https://picsum.photos/185/200",
  },
  {
    title: "Bill Love",
    description: "Poland",
    featured_img: "https://picsum.photos/450/350",
    avatar_img: "https://picsum.photos/185/200",
  },
];
