import React, { useState } from 'react';

function CustomForm({ member, showList }) {
    const [formData, setFormData] = useState(member);

    let method;
    let url;
    let saveText;
    let deleteText;
    if (member.first_name == null) {
        url = 'http://localhost:8000/api/teammember/';
        method = 'POST';
        saveText = 'Save';
        deleteText = null;
    } else {
        url = `http://localhost:8000/api/teammember/${member.id}/`;
        method = 'PUT';
        saveText = 'Save';
        deleteText = 'Delete';
    }

    const handleAction = (event, url, method) => {

        console.log('handleAction:' + method);
        console.log('handleAction:' + url);

        // Example: Send data using Fetch API
        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => {
                if (response.status === 201) {
                    console.log('Success:', response);
                    showList();
                }
                else if (response.status !== 200) {
                    console.log('Error:', response);
                }
            })
            .then(data => {
                console.log('Success:', data);
                showList();
            })
            .catch(error => {
                console.error('Error:', error)
            });
    };

    const handleDelete = () => {
        handleAction(null, url, 'DELETE');
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Custom logic to handle form data
        console.log('Form submitted:', formData);

        handleAction(event, url, method);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <form
            onSubmit={handleSubmit}>
            <label>
                First Name:
                <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} />
            </label>
            <label>
                Last Name:
                <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
                Phone:
                <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} />
            </label>
            {
                deleteText === null ? '' : <button type="button" onClick={handleDelete}>{deleteText}</button>
            }
            <button type="submit">{saveText}</button>
        </form>
    );
}

export default CustomForm;