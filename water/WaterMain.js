import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Picker } from '@react-native-picker/picker';

export default function WaterMain() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState('');

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 25.0330, // Latitude for Taipei
          longitude: 121.5654, // Longitude for Taipei
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.iconContainer}>
          <Image source={require('../assets/menu.png')} style={styles.icon} />
          <Text style={styles.iconText}>選單</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={() => setModalVisible(true)}>
          <Image source={require('../assets/tip.png')} style={styles.icon} />
          <Text style={styles.iconText}>提示</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Image source={require('../assets/item.png')} style={styles.icon} />
          <Text style={styles.iconText}>道具</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Image source={require('../assets/task.png')} style={styles.icon} />
          <Text style={styles.iconText}>任務</Text>
        </TouchableOpacity>
      </View>

      {/* Modal for Task Tips */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>任務提示</Text>
            <View style={styles.modalLine} />
            <Text style={styles.modalSubtitle}>請選擇一項任務</Text>
            <Picker
              selectedValue={selectedTask}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedTask(itemValue)}
            >
              <Picker.Item label="任務 1" value="task1" />
              <Picker.Item label="任務 2" value="task2" />
              {/* Add more Picker.Items as needed */}
            </Picker>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>關閉</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA', // Light blue background color
  },
  map: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#FFF5DC',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  iconContainer: {
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 35,
    marginBottom: 5,
  },
  iconText: {
    fontSize: 12,
    color: '#004D40', // Darker shade for text
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  modalSubtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  picker: {
    width: '100%',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#00796B',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
