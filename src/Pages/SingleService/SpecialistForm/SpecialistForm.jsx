import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Providers/AuthProvider';

const SpecialistForm = () => {
    const { user } = useContext(AuthContext);
    console.log('SpecialistForm',user);
    const [formData, setFormData] = useState({
        username: '',
        phone: '',
        email: '',
        businessName: '',
        businessAddress: '',
        comment: ''
    });
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/users/${user.email}`);
                const userData = response.data;
                setFormData({
                    username: userData?.username || '',
                    phone: userData?.personalInfo?.phone || '',
                    email: userData?.email || '',
                    businessName: userData?.businessInfo?.businessName || '',
                    businessAddress: userData?.businessInfo?.businessAddress || '',
                    comment: ''
                });
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        if (user?.email) {
            fetchUserData();
        }
    }, [user?.email]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleCheckboxChange = () => {
        setIsCheckboxChecked(!isCheckboxChecked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/specialists', formData);
            if (response.status === 201) {
                Swal.fire({
                    position: 'top-start',
                    icon: 'success',
                    title: 'Form submitted successfully.',
                    showConfirmButton: false,
                    timer: 2000
                });
                setFormData({
                    username: '',
                    phone: '',
                    email: '',
                    businessName: '',
                    businessAddress: '',
                    comment: ''
                });
                setIsCheckboxChecked(false);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            Swal.fire({
                position: 'top-start',
                icon: 'error',
                title: 'Error submitting form.',
                showConfirmButton: false,
                timer: 2000
            });
        }
    };

    return (
        <div className="section-container my-52">
            <h1 className="text-3xl text-center font-bold">Request a call from a Specialist</h1>
            <p className="text-[#6D6D6D]">Please enter your business information. A representative will reach out to you shortly.</p>
            <form className="mx-40 px-8" onSubmit={handleSubmit}>
                <div className="form-control mt-5">
                    <input type="text" name='username' placeholder="Full Name" className="input shadow-lg" value={formData.username} onChange={handleChange} />
                </div>

                <div className="form-control mt-5">
                    <input type="text" name='phone' placeholder="Phone" className="input shadow-lg" value={formData.phone} onChange={handleChange} />
                </div>

                <div className="form-control mt-5">
                    <input type="text" name='email' placeholder="Email address" className="input shadow-lg" value={formData.email} onChange={handleChange} />
                </div>

                <div className="form-control mt-5">
                    <input type="text" name='businessName' placeholder="Business Name" className="input shadow-lg" value={formData.businessName} onChange={handleChange} />
                </div>

                <div className="form-control mt-5">
                    <input type="text" name='businessAddress' placeholder="Business Address" className="input shadow-lg" value={formData.businessAddress} onChange={handleChange} />
                </div>

                <div className="form-control mt-5">
                    <textarea rows="10" cols="150" name="comment" placeholder="How can we help you?" className="p-5 shadow-lg" value={formData.comment} onChange={handleChange} />
                </div>

                <div className="text-left mt-5 mb-10">
                    <input type="checkbox" checked={isCheckboxChecked} onChange={handleCheckboxChange} /> By clicking submit I acknowledge that my information will be shared for the purpose of discussing solutions.
                </div>

                <div className="form-control mt-6">
                    <input className="btn bg-[#4CAF50] text-white" type="submit" value="Submit" disabled={!isCheckboxChecked} />
                </div>
            </form>
        </div>
    );
};

export default SpecialistForm;
