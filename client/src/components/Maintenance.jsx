const Maintenance = ({
  scheduled = true,
  onScheduledChange = (f) => f,
  date = "1970-01-01",
  onDateChange = (f) => f,
}) => (
  <div className="maintenance-check">
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
        value={date.split("T")[0]}
        onChange={(event) => onDateChange(event.target.value)}
        disabled={!scheduled}
        aria-disabled={!scheduled}
      />
    </div>
  </div>
);

export default Maintenance;
