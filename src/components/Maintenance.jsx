const Maintenance = ({
  scheduled = true,
  onScheduledChange = (f) => f,
  date = "1970-01-01",
  onDateChange = (f) => f,
}) => (
  <div>
    <div>
      <label>Schedule Maintenance?</label>
      <input
        type="checkbox"
        checked={scheduled}
        onChange={() => onScheduledChange()}
      />
    </div>
    <div style={{ visibility: scheduled ? "visible" : "hidden" }}>
      <label>Schedule Date</label>
      <input
        type="date"
        value={date}
        onChange={(event) => onDateChange(event.target.value)}
      />
    </div>
  </div>
);

export default Maintenance;
