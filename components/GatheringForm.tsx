import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './GatheringForm.styles';

interface GatheringFormProps {
  issueId: number;
  isResolved: boolean;
}

const GatheringForm: React.FC<GatheringFormProps> = ({ issueId, isResolved }) => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [time, setTime] = useState('12:00');
  const [description, setDescription] = useState('');
  const [capacity, setCapacity] = useState('');
  const [dateError, setDateError] = useState('');

  React.useEffect(() => {
    if (isResolved) {
      Alert.alert(
        'Cannot Create Gathering',
        'Gatherings cannot be created for resolved issues.'
      );
      router.back();
    }
  }, [isResolved, issueId, router]);

  const validateDate = (dateString: string): boolean => {
    if (!dateString) return false;

    try {
      const selectedDate = new Date(dateString);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      selectedDate.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        setDateError('Events must be scheduled for the future.');
        return false;
      } else {
        setDateError('');
        return true;
      }
    } catch (e) {
      setDateError('Invalid date format');
      return false;
    }
  };

  const handleDateChange = (dateString: string) => {
    setSelectedDate(dateString);
    validateDate(dateString);
  };

  const isFormValid = (): boolean => {
    return (
      title.trim() !== '' &&
      selectedDate !== '' &&
      description.trim() !== '' &&
      dateError === ''
    );
  };

  const handlePublish = () => {
    if (!isFormValid()) {
      Alert.alert('Validation Error', 'Please complete all required fields.');
      return;
    }

    Alert.alert('Success', 'Gathering created successfully!');
    setTitle('');
    setSelectedDate('');
    setTime('12:00');
    setDescription('');
    setCapacity('');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <MaterialIcons name="menu" size={28} color="#fff" />
        <Text style={styles.headerTitle}>EcoAlert</Text>
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Organize a Gathering</Text>

        {/* Title Input */}
        <View style={styles.section}>
          <Text style={styles.label}>Title:</Text>
          <TextInput
            style={styles.input}
            placeholder=""
            value={title}
            onChangeText={setTitle}
            placeholderTextColor="#ccc"
          />
        </View>

        {/* Date Input */}
        <View style={styles.section}>
          <Text style={styles.label}>Day:</Text>
          <TextInput
            style={styles.dateInput}
            placeholder="YYYY-MM-DD"
            value={selectedDate}
            onChangeText={handleDateChange}
            placeholderTextColor="#ccc"
          />
          {dateError && <Text style={styles.errorText}>{dateError}</Text>}
        </View>

        {/* Time Input */}
        <View style={styles.section}>
          <Text style={styles.label}>Hour (Pt):</Text>
          <TextInput
            style={styles.timeInput}
            placeholder="HH:mm"
            value={time}
            onChangeText={setTime}
            placeholderTextColor="#ccc"
          />
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.label}>Description:</Text>
          <TextInput
            style={[styles.input, styles.descriptionInput]}
            placeholder="What should volunteers bring?..."
            multiline
            numberOfLines={4}
            value={description}
            onChangeText={setDescription}
            placeholderTextColor="#ccc"
          />
        </View>

        {/* Capacity */}
        <View style={styles.section}>
          <Text style={styles.label}>Capacity [optional]:</Text>
          <TextInput
            style={styles.input}
            placeholder=""
            keyboardType="numeric"
            value={capacity}
            onChangeText={setCapacity}
            placeholderTextColor="#ccc"
          />
        </View>

        {/* Publish Button */}
        <TouchableOpacity
          style={[
            styles.publishButton,
            isFormValid() ? styles.publishButtonActive : styles.publishButtonInactive
          ]}
          onPress={handlePublish}
          disabled={!isFormValid()}
          testID="publish-button"
        >
          <Text style={styles.publishButtonText}>Publish Event</Text>
        </TouchableOpacity>

        <View style={styles.spacer} />
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <MaterialIcons name="public" size={24} color="#fff" />
          <Text style={styles.footerLabel}>Reports</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>
          <MaterialIcons name="forum" size={24} color="#fff" />
          <Text style={styles.footerLabel}>Communities</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>
          <MaterialIcons name="settings" size={24} color="#fff" />
          <Text style={styles.footerLabel}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GatheringForm;