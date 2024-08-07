import { Box, Image, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const MotionBox = motion(Box);

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/FashionModel1.jpg",
    "/FashionModel2.jpg",
    "/Me.jpg",
    "/YourStoreName.png",
  ];
  const interval = 6000;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Box
      position="relative"
      overflow="hidden"
      border="1px solid gray"
      borderRadius="md"
      height="100%"
      width="100%"
    >
      <Box
        display="flex"
        transition="transform 1s ease-in-out"
        transform={`translateX(-${currentIndex * 100}%)`}
        height="100%"
        width="100%"
      >
        {images.map((src, index) => (
          <Box key={index} flex="0 0 100%">
            <Image
              src={src}
              alt={`Slide ${index}`}
              objectFit="cover"
              width="100%"
              height="100%"
            />
          </Box>
        ))}
      </Box>

      {/* Navigation Dots */}
      <Flex
        position="absolute"
        bottom="10px"
        left="50%"
        transform="translateX(-50%)"
        gap="2"
      >
        {images.map((_, index) => (
          <Box
            key={index}
            width="10px"
            height="10px"
            borderRadius="full"
            bg={index === currentIndex ? "white" : "gray.500"}
            cursor="pointer"
            onClick={() => handleDotClick(index)}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default ImageSlider;
