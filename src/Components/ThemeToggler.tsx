import React from "react";
import { Box, IconButton, useColorMode } from "@chakra-ui/react";

interface ThemeTogglerProps {
  icon: "moon" | "sun";
}

export default function ThemeToggler({ icon }: ThemeTogglerProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  const oppositeIcon = colorMode === "light" ? "moon" : "sun";
  return (
    <Box textAlign="right" py={4} mr={12}>
      <IconButton
        icon={icon}
        onClick={toggleColorMode}
        variant="ghost"
        aria-label={`Toggle ${oppositeIcon} mode`}
      />
    </Box>
  );
}
