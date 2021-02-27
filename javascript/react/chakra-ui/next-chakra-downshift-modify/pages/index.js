import React, { useEffect, useMemo, useState } from "react";
import { useCombobox } from "downshift";
import { Box, Input, List, ListItem, Flex, Text, IconButton } from "@chakra-ui/react";
import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";

const defaultValue = 'BRL';

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

const TypeAhead = ({ value }) => (
  <Box position="absolute" top={0} bottom={0} display="flex" alignItems="center" justifyContent="center" overflow="hidden">
    <Text as="span" pt={3} pl={4} color="lightgray">{value.toUpperCase()}</Text>
  </Box>
)

// TODO: Look for some helper to `textTransform: 'uppercase'` in `@chakra-ui/react`
const ComboboxInput = React.forwardRef(({ suggestion, isOpen, ...props }, ref) => {
  return (
    <Box position="relative" display="flex">
      {isOpen && suggestion && <TypeAhead value={suggestion} />}
      <Input {...props} ref={ref} cursor={isOpen ? 'text' : 'pointer'} style={{ textTransform: 'uppercase' }} />
    </Box>
  )
})

const ComboboxList = React.forwardRef(({ isOpen, ...props }, ref) => {
  return <List display={isOpen ? null : "none"} py={2} {...props} ref={ref} maxHeight="md" />
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

  const isMatch = (inputValue, option) =>
    inputValue && option.label.toLowerCase().startsWith(inputValue.toLowerCase())

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
    inputValue,
    highlightedIndex,
    getItemProps,
    reset,
    setInputValue
  } = useCombobox({
    items,
    itemToString,
    onInputValueChange: ({ inputValue, selectedItem, type }) => {
      setItems(inputValue ? options.filter((option) => isMatch(inputValue, option)) : options)

			if (!inputValue) {
				openMenu();
			}

			// TODO: Remove this:
      // Clear selection when user is changing input,
			// and input does not match previously selected item
			// if (selectedItem && selectedItem.label !== inputValue) {
			// 	reset();
			// }
    }
  });

  const inputTypeAhead = useMemo(() => {
    if (inputValue && items.length) {
      return [inputValue, items[0].label.slice(inputValue.length)].join('')
    }
  }, [inputValue, items]);

  const inputHighlightedSuggestion = useMemo(() => {
    if (highlightedIndex !== -1) {
      return options[highlightedIndex].label
    }
  }, [highlightedIndex, options])

  // const defaultSelectedItem = options.find((option) => option.value === defaultValue);

  // useEffect(() => {
	// 	selectItem(defaultSelectedItem || null);
	// }, [defaultSelectedItem, selectItem]);

  useEffect(() => {
    if (isOpen && selectItem) {
      setInputValue("")
    }

    if (!isOpen) {
      setItems(options)
    }
  }, [isOpen])

  return (
    <Flex direction="column" align="center">
      <Text as="label" fontSize="lg" {...getLabelProps()}>
        Choose a ticker
      </Text>
      <Flex {...getComboboxProps()} direction="column" flex="1 1 auto">
        <Flex direction="row" alignItems="baseline">
          <ComboboxInput
            isOpen={isOpen}
            suggestion={inputTypeAhead || inputHighlightedSuggestion || (selectedItem && selectedItem.label)}
            {...getInputProps({
              onClick: openMenu,
              onFocus: openMenu, // TODO: remove this?
              onBlur: () => {
                // TODO: Update this code in `onBlur()`
                const hasInputValue = options.find((option) => option.label.toLowerCase() === inputValue.toLowerCase());

                if (!hasInputValue) {
                  selectItem(selectedItem)
                }
              },
              onKeyDown: (event) => {
                // TODO: Update the `onKeyDown()`
                if (event.key === "Tab") {
                  // Select first match
                  if (inputValue && items.length > 0) {
                    selectItem(items[0]);
                   }

                  // TODO: Try to move this to top
                  event.preventDefault();
                  return;
                }

                // TODO: Test this again...
                if (event.key === "Enter") {
                  // Select first match
                  if (highlightedIndex !== -1 && inputValue && items.length > 0) {
                    selectItem(items[highlightedIndex]);
                    if (event.key === "Enter") {
                      closeMenu();
                    }
                  }
                  event.preventDefault();
                  return;
                }
              },
            })}
            // placeholder="Search..."
            flex="0 0 auto"
            width={500}
            mt={3}
            // bg={isOpen ? 'cyan' : 'trasparent'}
            // _hover={{ background: 'cyan' }}
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
