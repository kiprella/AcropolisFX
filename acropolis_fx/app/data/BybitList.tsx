import React from 'react';

interface BybitItem {
  id: number;
  text: string;
}

interface BybitListProps {
  items: BybitItem[];
  onSelectedItem: (item: BybitItem) => void;
}

const BybitList: React.FC<BybitListProps> = ({ items, onSelectedItem }) =>  {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.id} onClick={() => onSelectedItem(item)}>
                    {item.text}
                </li>
            ))}
        </ul>
    )
}

export default BybitList;  // Only one default export here
