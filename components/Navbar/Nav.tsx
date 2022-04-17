import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { NavItem, NAV_ITEMS } from "./Config";
import Section from "../AnimatedSection/Section";

export const Nav: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position={"absolute"} top={"2"} w="full" zIndex={"100"}>
      <Section delay={"0.8"} duration={"1"} yparameter={-18}>
        <Flex
          m="auto"
          maxW="978px"
          color="white"
          minH={"82px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              _focus={{ outline: "none" }}
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={6} h={6} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex
            flex={{ base: 1 }}
            justify={{ base: "center", md: "start" }}
            alignItems="center"
          >
            <Image w="70px" src={"/assets/logo_ripio.svg"} alt="" />

            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Button
              _focus={{ outline: "none" }}
              fontFamily="body"
              as={"a"}
              fontSize={"sm"}
              fontWeight={600}
              variant={"link"}
              href={"/SignIn"}
              color="white"
              _hover={{ textDecoration: "none" }}
              mr="3"
              display={{
                lg: "inherit",
                md: "inherit",
                sm: "none",
                base: "none",
              }}
            >
              Iniciar Sesión
            </Button>
            <Button
              _focus={{ outline: "none" }}
              borderWidth="thin"
              borderColor="white"
              rounded="3xl"
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"transparent"}
              _hover={{
                bg: "transparent",
              }}
              ml="5"
              p="4"
              h="2.5"
            >
              Registrate
            </Button>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Section>
    </Box>
  );
};

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                role="group"
                p={1}
                href={navItem.href ?? "#"}
                fontFamily="body"
                fontSize={"16px"}
                fontWeight="bold"
                color={"white"}
                _hover={{
                  textDecoration: "none",
                }}
                _focus={{ outline: "none" }}
              >
                {navItem.label}
                <Icon
                  as={ChevronDownIcon}
                  transition={"all .25s ease-in-out"}
                  _groupHover={{ transform: "rotate(180deg)" }}
                  w={6}
                  h={6}
                />
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={"primary.50"}
                p={1.5}
                rounded={"xl"}
                maxW={"200px"}
                mt="1"
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: "violet.100" }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "white" }}
            fontWeight={600}
          >
            {label}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"violet.50"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <>
      <Stack bg={"white"} p={6} pb="4" display={{ md: "none" }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
      <Stack
        pb="9"
        px="4"
        bg="white"
        flexDirection="column"
        w="full"
        roundedBottom="lg"
      >
        <Button
          as="a"
          p="4"
          h="2.5"
          color="white"
          bg="violet.100"
          rounded="full"
          fontSize="15px"
          cursor="pointer"
          borderWidth="2px"
          borderColor="violet.100"
          mb="2"
        >
          Registrarse
        </Button>
        <Button
          as="a"
          href={"/SignIn"}
          p="4"
          h="2.5"
          color="violet.100"
          borderWidth="2px"
          borderColor="violet.100"
          bg="transparent"
          rounded="full"
          fontSize="15px"
          _hover={{
            bg: "transparent",
          }}
          cursor="pointer"
        >
          Iniciar Sesión
        </Button>
        <Stack pt="7" alignItems="center" w="full">
          <Image w="60px" src={"/assets/logo_violet.svg"} alt="" />
        </Stack>
      </Stack>
    </>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={2} onClick={children && onToggle}>
      <Flex
        py={1}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={"extrabold"} fontSize="17px" color={"black"}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
            color="violet.100"
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack mt={2} pl={4} align={"start"}>
          {children &&
            children.map((child) => (
              <Link color="black" key={child.label} py={1} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
