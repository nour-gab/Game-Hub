import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticsScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 50 ? "yellow" : "red";
  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticsScore;
