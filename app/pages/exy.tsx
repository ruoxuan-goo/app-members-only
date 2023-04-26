import { getSession, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Box,
  AspectRatio,
  Flex,
  Spacer,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import AddressBar from "../components/AddressBar";
import { useAccount } from "wagmi";
import ImageGrid from "@/components/ImageGrid";
import VideoCarousel from "@/components/VideoCarousel";
import ContentTitle from "@/components/ContentTitle";
import NavBar from "@/components/NavBar";

const images = [
  { src: "exy_1.jpg", alt: "Exy Lift Selfie" },
  { src: "exyLift.jpg", alt: "Exy Lift Selfie" },
  { src: "exy_2.jpg", alt: "Exy Lift Selfie" },
  { src: "exy_3.jpg", alt: "Exy Lift Selfie" },
];

const videos = [
  { src: "https://www.youtube.com/embed/g-Bhp_ea6os" },
  { src: "https://www.youtube.com/embed/eDff2WORFow" },
  { src: "https://www.youtube.com/embed/ZBPQCKpoe6c" },
  { src: "https://www.youtube.com/embed/aWX8_QER_qQ" },
];
function Exy() {
  const { address } = useAccount();
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const securePage = async () => {
      const session1 = await getSession();
      if (!session1) {
        router.push("/");
      } else {
        setLoading(false);
      }
    };
    securePage();
  }, [session]);

  if (loading) {
    return <h2>Loading。。。</h2>;
  }

  return (
    <Box className="exyImg">
      <NavBar />
      <AddressBar status={address !== undefined} username={address} />

      <Box marginTop="15vh" className="pagePadding">
        <ContentTitle
          title="EXY UNITED: SECRET ZONE"
          description="Members only content"
          images={images}
          videos={videos}
        />
        <ImageGrid image_list={images} />
      </Box>

      <VideoCarousel video_list={videos} />
      {/* <Flex>
        <AspectRatio maxW="400px" flex="1">
          <iframe
            title="Burinakae"
            src="https://www.youtube.com/embed/g-Bhp_ea6os"
            allowFullScreen
          />
        </AspectRatio>

        <AspectRatio maxW="400px" flex="2">
          <iframe
            title="Diamonds"
            src="https://www.youtube.com/embed/eDff2WORFow"
            allowFullScreen
          />
        </AspectRatio>

        <AspectRatio maxW="400px" flex="3">
          <iframe
            title="Gloomy Letter"
            src="https://www.youtube.com/embed/ZBPQCKpoe6c"
            allowFullScreen
          />
        </AspectRatio>

        <AspectRatio maxW="400px" flex="4">
          <iframe
            title="Wave"
            src="https://www.youtube.com/embed/aWX8_QER_qQ"
            allowFullScreen
          />
        </AspectRatio>
      </Flex> */}
    </Box>
  );
}

export default Exy;
