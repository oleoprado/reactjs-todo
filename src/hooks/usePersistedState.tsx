import React from 'react';

interface Task {
  id: string;
  description: string;
  isCompleted: boolean;
}

// TODO: Ajustar tipagem do initialValue
export function usePersistedState<T>(key: string, initialValue: any) {
  const [storedValue, setStoredValue] = React.useState<Task[]>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(error);
    }
  };

  type StoredValue = [storedValue: Task[], setValue: (value: T) => void]

  return [storedValue, setValue] as StoredValue;
}