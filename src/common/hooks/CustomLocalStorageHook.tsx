import { useState } from "react";

export const useLocalStorage = (itemName: string, initialValue: any) => {
    const localStorageItem = localStorage.getItem(itemName);
    const parsedItem : any = localStorageItem ? JSON.parse(localStorageItem) : initialValue;
  
    const [item, setItem] = useState(parsedItem);
  
    const saveItem = (newItems: any) => 
    {
      const sItems = JSON.stringify(newItems);
      localStorage.setItem(itemName, sItems);
      setItem(newItems);
    }
  
    return [item, saveItem];
  }