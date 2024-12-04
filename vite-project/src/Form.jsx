import { useState } from "react"

function Form() {
    const roles = ['user', 'admin', 'guest'];
    const [formData, setFormData] = useState({
        username: '',
        isSubscribed: false,
        role: 'user'
    });

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setFormData({...formData, [name]:type === 'checkbox' ? checked : value});
    }

    return (
        <form>
            <p>name: {formData.username}</p>
            <p>role: {formData.role}</p>
            <p>subscribe: {String(formData.isSubscribed)}</p>

            <input 
                type="text"
                name="username"
                placeholder="UserName"
                value={formData.username}
                onChange={handleChange}
            /><br/><br/>

            <label>
                <input
                    type="checkbox"
                    name="isSubscribed"
                    checked={formData.isSubscribed}
                    onChange={handleChange}
                />
                Subscribe
            </label><br/><br/>

            <select
                name="role"
                value={formData.role}
                onChange={handleChange}
            >
                {roles.map((item, index) => <option key={index} value={item}>{item}</option>)}
            </select>
        </form>
    );


}

export default Form