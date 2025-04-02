import { useEffect, useRef, useState } from 'react';
import { Checkbox, Combobox, Group, Input, Pill, PillsInput, useCombobox } from '@mantine/core';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MultiInput = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const combobox = useCombobox({
    onDropdownClose: () => {
      combobox.resetSelectedOption();
      setIsOpen(false); // Sync state when dropdown closes
    },
    onDropdownOpen: () => {
      combobox.updateSelectedOptionIndex('active');
      setIsOpen(true); // Sync state when dropdown opens
    },
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        combobox.closeDropdown(); // Properly close the dropdown
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setData(props.options);
  }, [props.options]);

  const [search, setSearch] = useState('');
  const [data, setData] = useState<string[]>([]);
  const [value, setValue] = useState<string[]>([]);
  const exactOptionMatch = data.some((item) => item === search);

  const handleValueSelect = (val: string) => {
    setSearch('');

    if (val === '$create') {
      setData((current) => [...current, search]);
      setValue((current) => [...current, search]);
    } else {
      setValue((current) =>
        current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
      );
    }
  };

  const handleValueRemove = (val: string) => setValue((current) => current.filter((v) => v !== val));

  const values = value.slice(0, 1).map((item) => (
    <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
      {item}
    </Pill>
  ));

  const options = data
    .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
    .map((item) => (
      <Combobox.Option value={item} key={item} active={value.includes(item)}>
        <Group gap="sm">
          <Checkbox
            checked={value.includes(item)}
            onChange={() => {}}
            aria-hidden
            tabIndex={-1}
            style={{ pointerEvents: 'none' }}
          />
          <span>{item}</span>
        </Group>
      </Combobox.Option>
    ));

  return (
    
    <Combobox  store={combobox} onOptionSubmit={handleValueSelect} withinPortal={false}>
      <Combobox.DropdownTarget>
        <div ref={dropdownRef}>
          <PillsInput
            variant="unstyled"
            rightSection={
              <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className="h-3" />
            }
            onClick={() => combobox.toggleDropdown()} // Toggle dropdown properly
            leftSection={
              <div className="mr-2 text-bright-sun-400">
                <FontAwesomeIcon icon={props.icon} />
              </div>
            }
          >
            <Pill.Group>
              {value.length > 0 ? (
                <>
                  {values}
                  {value.length > 1 && <Pill>+{value.length - 1} more</Pill>}
                </>
              ) : (
                <Input.Placeholder className="!text-mine-shaft-200">
                  {props.title}
                </Input.Placeholder>
              )}
            </Pill.Group>
          </PillsInput>
        </div>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown style={{ maxHeight: "200px", overflowY: "auto" }}>
        <Combobox.Search
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
          placeholder="Search options"
        />

        <Combobox.Options>
          {options}

          {!exactOptionMatch && search.trim().length > 0 && (
            <Combobox.Option value="$create">+ Create {search}</Combobox.Option>
          )}

          {exactOptionMatch && search.trim().length > 0 && options.length === 0 && (
            <Combobox.Empty>Nothing found</Combobox.Empty>
          )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
    
  );
};

export default MultiInput;
