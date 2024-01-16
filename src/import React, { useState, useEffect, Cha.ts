import React, { useState, useEffect, ChangeEvent } from 'react';
import './ChipComponent.css'; 

interface ChipData {
  name: string;
  id?: string | number; // Optional ID for unique identification
  profileImageUrl?: string; 
}

const ChipComponent = ({ items, onChipChange }: { items: ChipData[]; onChipChange?: (chips: ChipData[]) => void }) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedChips, setSelectedChips] = useState<ChipData[]>([]);
  const [isListOpen, setIsListOpen] = useState(false);

  useEffect(() => {
    onChipChange?.(selectedChips); // Update parent component with chip changes
  }, [selectedChips, onChipChange]);

  // Add autocomplete functionality
const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
  setInputValue(event.target.value);
  setIsListOpen(true);

  // Filter items for autocomplete
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().startsWith(inputValue.toLowerCase())
  );
  if (filteredItems.length === 1) {
    handleItemClick(filteredItems[0]); // Autocomplete if a single match
  }
};

  const handleItemClick = (item: ChipData) => {
    setSelectedChips([...selectedChips, item]);
    setInputValue('');
    setIsListOpen(false);
  };

  const handleChipRemove = (item: ChipData) => {
    setSelectedChips(selectedChips.filter((chip) => chip.id !== item.id));
  };

  const handleBackspace = (event: KeyboardEvent) => {
    if (event.key === 'Backspace' && inputValue === '' && selectedChips.length > 0) {
      const lastChip = selectedChips[selectedChips.length - 1];
      // Highlight last chip (implement visually using CSS)
      setSelectedChips(selectedChips.slice(0, -1)); // Remove last chip on second backspace
    }
  };

  

  const filteredItems = items.filter((item) => item.name.toLowerCase().startsWith(inputValue.toLowerCase()));

  return (
    <div className="chip-container">
      <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      onKeyDown={handleBackspace}
      aria-autocomplete="list" // ARIA attribute for autocomplete
      aria-expanded={isListOpen}
      aria-owns={isListOpen ? 'chip-list' : undefined}
    />
    {isListOpen && (
      <ul className="chip-list" id="chip-list">
        {filteredItems.map((item) => (
          <li key={item.id} onClick={() => handleItemClick(item)}>
            <img src={item.profileImageUrl} alt={item.name} /> {/* Display profile image */}
            {item.name}
          </li>
        ))}
      </ul>
    )}
      <ul className="chip-group">
        {selectedChips.map((chip) => (
          <li key={chip.id} className="chip">
            <img src={chip.profileImageUrl} alt={chip.name} /> {/* Display profile image */}
            {chip.name}
            <button onClick={() => handleChipRemove(chip)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChipComponent;


