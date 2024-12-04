
function TempInput({value, unit, onChange}) {
    const handleChange = (e, subOnChange) => {
        subOnChange(e.target.value);
    };

    return (
        <div>
            <input type="number" value={value} onChange={(e) => handleChange(e, onChange)} placeholder={`In ${unit}`} />
            <span>{unit}</span>
        </div>
    );
}

export default TempInput