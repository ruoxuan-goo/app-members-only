import AddressBar from "@/components/AddressBar";
import KeyGranted from "@/components/KeyGranted";
import NavBar from "@/components/NavBar";
import TitleAndDescription from "@/components/TitleAndDescription";
import { Flex, Box } from "@chakra-ui/react";
import NavigationButton from "@/components/NavigationButton";

export type PageComponentProps = {
  title: string;
  description: string;
  address: string | undefined;
  image_lock: string;
  image: string;
  backgroundClassName: string;
  gotoLeft: string;
  gotoRight: string;
  access: boolean;
  clubName: string;
  price: string;
  tokenId: number | undefined;
  displayRemainingToken: number;
  handleMint(): void;
};

const PageComponent = ({
  title,
  description,
  address,
  image_lock,
  image,
  backgroundClassName,
  gotoLeft,
  gotoRight,
  access,
  clubName,
  price,
  tokenId,
  displayRemainingToken,
  handleMint,
}: PageComponentProps) => {
  return (
    <Box
      height={{ base: "fit-content", md: "100vh" }}
      min-height={{ base: "100vh", md: "auto" }}
      className={backgroundClassName}
    >
      <NavBar />
      <AddressBar status={address !== undefined} username={address} />
      {/* //TODO: remove top margin */}
      <Flex className="pagePadding itemBox">
        <NavigationButton direction="left" goto={gotoLeft} />
        <Flex className="itemDesc">
          <Box
            mb={{ base: "30px", md: "0px" }}
            mr={{ base: "0px", md: "30px" }}
          >
            <TitleAndDescription title={title} description={description} />
          </Box>

          <KeyGranted
            handleMint={handleMint}
            accessGranted={access}
            clubName={clubName}
            image_lock={image_lock}
            image={image}
            price={price}
            remainingToken={displayRemainingToken}
            totalToken={200}
            tokenNumber={tokenId}
          />
        </Flex>
        <NavigationButton direction="right" goto={gotoRight} />
      </Flex>
    </Box>
  );
};

export default PageComponent;