const Filter = ({ filterData, active, setActive }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center marginB-3">
      {filterData.map((item, index) => (
        <div
          className={`filterItem ${active == item ? "active" : ""}`}
          key={index}
          onClick={() => setActive(item)}>
          {item}
        </div>
      ))}
      <style jsx>{`
        .filterItem {
          padding: 0.25rem 0.5rem;
          line-height: 1.5;
          border: 1px solid #5a0465;
          margin: 0 10px;
          border-radius: 30px;
          color: #5a0465;
          cursor: pointer;
          margin-bottom: 10px;
          transition: all 0.5s ease;
        }

        @media (max-width: 591px) {
          .filterItem {
            font-size: 0.875rem;
          }
        }
        .filterItem:hover,
        .active {
          background: #5a0465;
          color: #fff;
        }
        .marginB-3 {
          margin-bottom: 3rem !important;
        }
      `}</style>
    </div>
  );
};

export default Filter;
