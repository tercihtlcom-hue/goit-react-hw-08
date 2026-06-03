import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import styles from './Contacts.module.css';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>Contacts</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}