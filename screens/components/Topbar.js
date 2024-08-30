import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Appbar, Searchbar, Avatar, Menu, Divider} from 'react-native-paper';

const TopBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  return (
    <Appbar.Header style={styles.header}>
      <View style={styles.container}>
    
        <View style={styles.topBarContainer}>
          <Searchbar
            placeholder="Search products"
            style={styles.searchbar}
          />
          <Menu
            visible={menuVisible}
            onDismiss={closeMenu}
            anchor={
              <TouchableOpacity onPress={openMenu} style={styles.avatarContainer}>
                <Avatar.Image
                  size={40}
                  source={{ uri: 'https://via.placeholder.com/150' }}
                  style={styles.avatar}
                />
              </TouchableOpacity>
            }
            anchorPosition='bottom'
          >
            <Menu.Item onPress={() => {}} title="Profile" />
            <Menu.Item onPress={() => {}} title="Orders" />
            <Divider />
            <Menu.Item onPress={() => {}} title="Logout" />
          </Menu>
        </View>
      </View>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 0,
    flexDirection: 'column',
  },
  container: {
    width: '100%',
    paddingHorizontal: 10,
  },
  topBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchbar: {
    flex: 1,
    marginRight: 10,
  },
  avatarContainer: {
    marginLeft: 10,
  },
  avatar: {
    margin: 0,
  },
});

export default TopBar;
