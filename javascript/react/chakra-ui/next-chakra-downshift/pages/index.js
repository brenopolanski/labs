import React, { useState } from "react";
import { useCombobox } from "downshift";
import { Input, List, ListItem, Flex, Text, IconButton } from "@chakra-ui/react";
import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";

const items = ["Seattle", "San Francisco", "Springfield", "New York", "Boston"];

const ComboboxInput = React.forwardRef(({ ...props }, ref) => {
  return <Input {...props} ref={ref} />
})

const ComboboxList = React.forwardRef(({ isOpen, ...props }, ref) => {
  return <List display={isOpen ? null : "none"} py={2} {...props} ref={ref} />
})

const ComboboxItem = React.forwardRef(({ itemIndex, highlightedIndex, ...props }, ref) => {
  const isActive = itemIndex === highlightedIndex

  return (
    <ListItem
      transition="background-color 220ms, color 220ms"
      bg={isActive ? "teal.100" : null}
      px={4}
      py={2}
      cursor="pointer"
      {...props}
      ref={ref}
    />
  )
})

export default function Home() {
  const [inputItems, setInputItems] = useState(items)
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        items.filter((item) =>
          item.toLowerCase().startsWith(inputValue.toLowerCase())
        )
      )
    }
  });

  return (
    <Flex direction="column" align="center">
      <Text as="label" fontSize="lg" {...getLabelProps()}>
        Choose a city
      </Text>
      <Flex {...getComboboxProps()} direction="column" flex="1 1 auto">
        <Flex direction="row" alignItems="baseline">
          <ComboboxInput
            {...getInputProps()}
            placeholder="Search..."
            flex="0 0 auto"
            width={500}
            mt={3}
          />
          <IconButton
            {...getToggleButtonProps()}
            aria-label="toggle menu"
            colorScheme={isOpen ? "gray" : "teal"}
            icon={isOpen ? <ArrowDownIcon /> : <ArrowUpIcon /> }
          />
        </Flex>
        <ComboboxList
          isOpen={isOpen}
          {...getMenuProps()}
          flex={1}
          overflowY="auto"
          mt={0}
        >
          {inputItems.map((item, index) => (
            <ComboboxItem
              {...getItemProps({ item, index })}
              itemIndex={index}
              highlightedIndex={highlightedIndex}
              key={index}
            >
              {item}
            </ComboboxItem>
          ))}
        </ComboboxList>
      </Flex>
    </Flex>
  )
}
