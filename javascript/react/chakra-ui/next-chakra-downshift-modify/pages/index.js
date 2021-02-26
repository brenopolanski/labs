import React, { useEffect, useState } from "react";
import { useCombobox } from "downshift";
import { Input, List, ListItem, Flex, Text, IconButton } from "@chakra-ui/react";
import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";

const options = [
  { label: "BTC (Ƀ)", value: "BTC" },
  { label: "ETH (Ξ)", value: "ETH" },
  { label: "LTC (Ł)", value: "LTC" },
  { label: "AUD (A$)", value: "AUD" },
  { label: "BRL (R$)", value: "BRL" },
  { label: "CAD (C$)", value: "CAD" },
  { label: "CHF (CHF)", value: "CHF" },
  { label: "CNY (¥)", value: "CNY" },
  { label: "EUR (€)", value: "EUR" },
  { label: "GBP (£)", value: "GBP" },
  { label: "HKD (HK$)", value: "HKD" },
  { label: "IDR (IDR)", value: "IDR" },
  { label: "INR (₹)", value: "INR" },
  { label: "JPY (¥)", value: "JPY" },
  { label: "KRW (₩)", value: "KRW" },
  { label: "MXN (MX$)", value: "MXN" },
  { label: "RUB (₽)", value: "RUB" },
  { label: "USD ($)", value: "USD" },
];

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

const itemToString = (item) => item ? item.label : ""

export default function Home() {
  const [items, setItems] = useState(options)

  const {
    isOpen,
    closeMenu,
    openMenu,
    selectItem,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps
  } = useCombobox({
    items,
    itemToString,
    onInputValueChange: ({ inputValue, selectedItem, type }) => {
      setItems(options.filter((option) => option.label.toLowerCase().startsWith(inputValue.toLowerCase())))
    }
  });

  useEffect(() => {
    if (!isOpen) {
      setItems(options)
    }
  }, [isOpen])

  return (
    <Flex direction="column" align="center">
      <Text as="label" fontSize="lg" {...getLabelProps()}>
        Choose a city
      </Text>
      <Flex {...getComboboxProps()} direction="column" flex="1 1 auto">
        <Flex direction="row" alignItems="baseline">
          <ComboboxInput
            {...getInputProps({
              onClick: openMenu,
            })}
            placeholder="Search..."
            flex="0 0 auto"
            width={500}
            mt={3}
            cursor={isOpen ? 'text' : 'pointer'}
            bg={isOpen ? 'cyan' : 'trasparent'}
            _hover={{ background: 'cyan' }}
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
          {items.map((item, index) => (
            <ComboboxItem
              {...getItemProps({
                index,
                item,
                onMouseDown: () => {
                  selectItem(item)
                  closeMenu()
                }
              })}
              itemIndex={index}
              highlightedIndex={highlightedIndex}
              key={index}
            >
              {item.label}
            </ComboboxItem>
          ))}
        </ComboboxList>
      </Flex>
    </Flex>
  )
}
