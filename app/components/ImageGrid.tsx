// This is the code for the ImageBox component which is used in the content page:
import { SimpleGrid, Box, Image } from "@chakra-ui/react";

type ImageProps = {
  alt: string;
  src: string;
};

export type ImageGridProps = {
  image_list: ImageProps[];
};
//export type NavBarProps = {};
const ImageGrid = ({ image_list }: ImageGridProps) => {
  return (
    <SimpleGrid
      minChildWidth="200px"
      spacing="50px"
      className="contentPagePadding"
    >
      {image_list.map((image) => (
        <Box key={image.src}>
          <Image
            height="100%"
            objectFit="cover"
            src={image.src}
            alt={image.alt}
          />
        </Box>
      ))}
    </SimpleGrid>
  );
};
export default ImageGrid;

//import { SimpleGrid, Box, Image } from "@chakra-ui/react";

// const images = [
//   { src: "https://example.com/image1.jpg", alt: "Image 1" },
//   { src: "https://example.com/image2.jpg", alt: "Image 2" },
//   { src: "https://example.com/image3.jpg", alt: "Image 3" },
//   // Add more images as needed
// ];

// export default function ImageGrid() {
//   return (
//     <SimpleGrid columns={[1, 2, 3]} spacing={4}>

//     </SimpleGrid>
//   );
// }

// <Box>
//   <Image height="100%" objectFit="cover" src={src_} alt={alt_} />
// </Box>