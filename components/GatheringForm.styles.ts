import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#33a800',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  headerTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 85,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingBottom: 10,
    color: '#144000',
  },
  section: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    padding: 12,
    fontSize: 14,
    backgroundColor: '#e8e8e8',
    color: '#333',
  },
  dateInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    padding: 12,
    fontSize: 14,
    backgroundColor: '#e8e8e8',
    color: '#333',
    marginBottom: 4,
  },
  timeInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    padding: 12,
    fontSize: 14,
    backgroundColor: '#e8e8e8',
    color: '#333',
    width: '40%',
  },
  descriptionInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  errorText: {
    color: '#e74c3c',
    fontSize: 13,
    marginTop: 4,
    fontWeight: '600',
    fontStyle: 'italic',
  },
  publishButton: {
    padding: 16,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  publishButtonActive: {
    backgroundColor: '#144000',
  },
  publishButtonInactive: {
    backgroundColor: '#999',
  },
  publishButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  spacer: {
    height: 20,
  },
  footer: {
    backgroundColor: '#33a800',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#2a8000',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerLabel: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
});