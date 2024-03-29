import React from "react";

const FormComponent = ({ formData, onFormChange, onSubmit }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onFormChange({ ...formData, [name]: value });
    };
    const handleSubmit = () => {
        onSubmit(formData);
    };

    return (
        <div className="shrink-0 contents">
            <form>
                {/* First Name Input */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-white">
                        First Name:
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded bg-darker text-white"
                    />
                </div>
                 {/* lastName */}
                <div className="mb-4">
                    <label htmlFor="age" className="block text-white">
                        Last Name:
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded bg-darker text-white"
                    />
                </div>
                {/* email */}
                <div className="mb-4">
                    <label htmlFor="age" className="block text-white">
                        E-mail:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded bg-darker text-white"
                    />
                </div>
                {/* Hidden ID Input */}
                <input
                    type="hidden"
                    name="id"
                    value={formData.id || ""}
                />
                {/* Submit Button */}
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="px-4 py-2 mr-2 bg-neutral-700 text-white rounded"
                >
                    {formData.id ? "Update" : "Add"}
                </button>
            </form>
        </div>
    );
};

export default FormComponent;