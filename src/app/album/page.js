import Image from "next/image";
import React from "react";
import nextImage from "@/assets/newImages.jpg";

const AlbumPage = () => {
  return (
    <div>
      <h1>Image component</h1>
      <Image
        src={
          "https://images.unsplash.com/photo-1440227537815-f4476b789291?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="next image"
        height={500}
        width={500}
      />
      <Image src={nextImage} alt="next image" height={500} width={500} />
    </div>
  );
};

export default AlbumPage;
