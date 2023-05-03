import Title from './Title';
export const Section = ({ title, children }) => {
  return (
    <section>
      <Title title={title} />
      {children}
    </section>
  );
};
export default Section;
