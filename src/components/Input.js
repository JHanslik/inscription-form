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
            <div className="flex flex-col items-center  my-3">
                <label className="text-white">{name}</label>
                <input
                    className="block w-[300px] text-white py-2.5 px-0 text-sm bg-transparent border-0 border-b-2 appearance-none border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    disabled={isDisabled}
                />
            </div>

            {error && <p className="text-red-600">{error}</p>}
        </fieldset>
    );
};

export default Input;
