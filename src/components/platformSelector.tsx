import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
//import usePlatfrom from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";
//import useGameQueryStore from "../store";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  //const setSelectedPlatfromId = useGameQueryStore((s) => s.setPlatformId);
  // const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  //const selectedPlatform = usePlatfrom(platformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : "All Platforms"}
      </MenuButton>
      <MenuList>
        {data?.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
