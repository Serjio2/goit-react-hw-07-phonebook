import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';

export const App = () => {
 
  return (
    <div>
      <GlobalStyle />

      <Section title="Phonebook">
        <ContactForm  />
      </Section>

      <Section title="Contacts">
        <Filter  />
        <ContactList />
      </Section>
    </div>
  );
};
