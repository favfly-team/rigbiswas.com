const Schema = ({ schemaItems }) => {
  return (
    <>
      {schemaItems.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: item?.schema }}
        />
      ))}
    </>
  );
};

export default Schema;
