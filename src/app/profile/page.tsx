import Image from "next/image";
import Profile_header from "./profile_components/ProfileHeader";

export default function Profile() {
  return (
    <>
      <Profile_header
        Name="Jose Puente"
        Profile_image="https://picsum.photos/300/300"
        Featured_image="https://picsum.photos/1600/300"
        Description="lawyer"
        Instagram="https://picsum.photos/300/300"
        Facebook="https://picsum.photos/300/300"
      />
    </>
  );
}
