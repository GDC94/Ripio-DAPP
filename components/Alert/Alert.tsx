import { Stack } from "@chakra-ui/layout";
import { Tag, TagLabel } from "@chakra-ui/tag";

interface Props {}

const Alert: React.FC<Props> = () => {
  return (
    
      <Tag position="fixed"
      top="20%"
      left="0"  bg='red' color='white' fontWeight='bold' size="lg" colorScheme="red" borderRadius="lg">
        <TagLabel>Este no es el sitio oficial de RIPIO</TagLabel>
      </Tag>

  );
};

export default Alert;
