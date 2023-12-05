import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { debounce } from 'lodash';

const SearchBar = ({onSearch} ) => {
    const [searchText, setSearchText] = useState('');

    const debouncedSearch = debounce((text) => {
      onSearch(text);
    }, 50);

    const handleSearchChange = (text) => {
      setSearchText(text);
      debouncedSearch(text); 
    };

    return (
      <View style={searchbarstyles.container}>
        <TextInput
          style={searchbarstyles.input}
          placeholder="Search for a receipt"
          value={searchText}
          onChangeText={handleSearchChange}
          placeholderTextColor="black" 
        />
      </View>
    );
};

const searchbarstyles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    
  },
  input: {
    height: 40,
    width: 250,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 18,
  },
});

export default SearchBar;
  