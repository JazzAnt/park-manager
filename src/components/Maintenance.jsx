const Maintenance = ({ scheduled = true, onCheckboxChange = f=>f , date = "1970-01-01", onDateChange = f=>f}) =>
  scheduled ? (
    <div>
      <div>
        <label>Schedule Maintenance?</label>
        <input type="checkbox" checked={scheduled} onChange={() => onCheckboxChange()}/>
      </div>
      <div>
        <label>Schedule Date</label>
        <input type="date" value={date} onChange={(event) => onDateChange(event.target.value)}/>
      </div>
    </div>
  ) : (
    <div>
      <label>Schedule Maintenance?</label>
      <input type="checkbox" checked={scheduled} onChange={() => onCheckboxChange()} />
    </div>
  );

export default Maintenance;
