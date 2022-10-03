const Input = ({
    handleChange,
    type,
    name,
    value,
    placeholder,
    error,
    isDisabled,
}) => {
    return (
        <fieldset>
            <label>{name}</label>

            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                disabled={isDisabled}
            />

            {error && <p>{error}</p>}
        </fieldset>
    );
};

export default Input;
