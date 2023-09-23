import { SectionForm } from "./Section.styled";

export const Section = ({title, children}) => {
  return (
    <SectionForm>
      <h2>{title}</h2>
      {children}
    </SectionForm>
  );
};
