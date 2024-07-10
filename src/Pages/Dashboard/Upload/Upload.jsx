import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const Upload = () => {
    const [selectedOption, setSelectedOption] = useState('Products');
    const [subTitles, setSubTitles] = useState([]);
    const [sections, setSections] = useState([]);
    const [formData, setFormData] = useState({
        headerTitle: '',
        titleDescription: '',
        titlePrefix: '',
        cta: '',
        ctaImage: '',
    });



    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const addSubTitle = () => {
        setSubTitles([...subTitles, { subTitle: '', subTitleDescription: '', subTitlePrefix: '', cta: '', ctaImage: '' }]);
    };

    const addSection = () => {
        setSections([...sections, { title: '', description: '', prefix: '', cta: '', ctaImage: '' }]);
    };

    const handleSubTitleChange = (index, e) => {
        const { name, value } = e.target;
        const updatedSubTitles = subTitles.map((subTitle, i) => (
            i === index ? { ...subTitle, [name]: value } : subTitle
        ));
        setSubTitles(updatedSubTitles);
    };

    const handleSectionChange = (index, e) => {
        const { name, value } = e.target;
        const updatedSections = sections.map((section, i) => (
            i === index ? { ...section, [name]: value } : section
        ));
        setSections(updatedSections);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    console.log('from upload', formData);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const data = {
            headerTitle: formData.headerTitle,
            titleDescription: formData.titleDescription,
            titlePrefix: formData.titlePrefix,
            cta: formData.cta,
            ctaImage: formData.ctaImage,
            subTitles: subTitles,
            sections: sections
        };

        try {
            const response = await axios.post('https://energy-project-server.vercel.app/products', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('Data saved successfully:', response.data);
            if (response.data.insertedId) {
                // success model when data inserted successfully
                Swal.fire({
                    position: 'top-start',
                    icon: 'success',
                    title: 'Products Added Successfully.',
                    showConfirmButton: false,
                    timer: 2000
                });

                // Reset form fields and state
                form.reset();
            }

        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4 text-left">Post</h1>
            <div className="mb-4 flex">
                <label className="inline-flex items-center mr-4">
                    <input
                        type="radio"
                        className="form-radio"
                        name="postType"
                        value="Products"
                        checked={selectedOption === 'Products'}
                        onChange={handleOptionChange}
                    />
                    <span className="ml-2">Products</span>
                </label>
                <label className="inline-flex items-center mr-4">
                    <input
                        type="radio"
                        className="form-radio"
                        name="postType"
                        value="Services"
                        checked={selectedOption === 'Services'}
                        onChange={handleOptionChange}
                    />
                    <span className="ml-2">Services</span>
                </label>
                <label className="inline-flex items-center">
                    <input
                        type="radio"
                        className="form-radio"
                        name="postType"
                        value="Blog"
                        checked={selectedOption === 'Blog'}
                        onChange={handleOptionChange}
                    />
                    <span className="ml-2">Blog</span>
                </label>
            </div>

            {selectedOption === 'Products' && (
                <form className="bg-white p-6 rounded shadow-md" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <h2 className="text-2xl font-bold mb-4">Header</h2>
                    </div>
                    <div className="mb-4 flex justify-center">
                        <input
                            type="text"
                            className="input w-3/4 mt-2 shadow-md border border-gray-300"
                            name="headerTitle"
                            placeholder="Enter Header’s Title"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4 flex justify-center">
                        <textarea
                            className="textarea w-3/4 mt-2 shadow-md border border-gray-300"
                            name="titleDescription"
                            placeholder="Enter Title’s description"
                            onChange={handleInputChange}
                            rows="3"
                        ></textarea>
                    </div>
                    <div className="mb-4 flex justify-center">
                        <input
                            type="text"
                            className="input w-3/4 mt-2 shadow-md border border-gray-300"
                            name="titlePrefix"
                            placeholder="Enter Title’s prefix"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4 flex justify-center">
                        <input
                            type="text"
                            className="input w-3/4 mt-2 shadow-md border border-gray-300"
                            name="cta"
                            placeholder="Enter CTA"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4 flex justify-center items-center">
                        <div className="relative w-3/4 mt-2 shadow-md border border-gray-300 rounded">
                            <input
                                type="text"
                                className="input w-full h-full p-2"
                                name="ctaImage"
                                placeholder="Enter Image Link"
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    {sections.map((section, index) => (
                        <div key={index} className="mb-6">
                            <h2 className="text-2xl font-bold mb-4">1st Section {index + 1}</h2>
                            <div className="mb-4 flex justify-center">
                                <input
                                    type="text"
                                    className="input w-3/4 mt-2 shadow-md border border-gray-300"
                                    name="title"
                                    placeholder="Enter Title"
                                    value={section.title}
                                    onChange={(e) => handleSectionChange(index, e)}
                                />
                            </div>
                            <div className="mb-4 flex justify-center">
                                <textarea
                                    className="textarea w-3/4 mt-2 shadow-md border border-gray-300"
                                    name="description"
                                    placeholder="Enter Title’s description"
                                    value={section.description}
                                    onChange={(e) => handleSectionChange(index, e)}
                                    rows="3"
                                ></textarea>
                            </div>
                            <div className="mb-4 flex justify-center">
                                <input
                                    type="text"
                                    className="input w-3/4 mt-2 shadow-md border border-gray-300"
                                    name="prefix"
                                    placeholder="Enter Title’s prefix"
                                    value={section.prefix}
                                    onChange={(e) => handleSectionChange(index, e)}
                                />
                            </div>
                            <div className="mb-4 flex justify-center">
                                <input
                                    type="text"
                                    className="input w-3/4 mt-2 shadow-md border border-gray-300"
                                    name="cta"
                                    placeholder="Enter CTA"
                                    value={section.cta}
                                    onChange={(e) => handleSectionChange(index, e)}
                                />
                            </div>
                            <div className="mb-4 flex justify-center items-center">
                                <div className="relative w-3/4 mt-2 shadow-md border border-gray-300 rounded">
                                    <input
                                        type="text"
                                        className="input w-full h-full p-2"
                                        name="ctaImage"
                                        placeholder="Enter Image Link"
                                        onChange={(e) => handleSectionChange(index, e)}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}

                    {subTitles.map((subTitle, index) => (
                        <div key={index} className="mb-6">
                            <h2 className="text-2xl font-bold mb-4">Sub Title {index + 1}</h2>
                            <div className="mb-4 flex justify-center">
                                <input
                                    type="text"
                                    className="input w-3/4 mt-2 shadow-md border border-gray-300"
                                    name="subTitle"
                                    placeholder="Enter Sub Title"
                                    value={subTitle.subTitle}
                                    onChange={(e) => handleSubTitleChange(index, e)}
                                />
                            </div>
                            <div className="mb-4 flex justify-center">
                                <textarea
                                    className="textarea w-3/4 mt-2 shadow-md border border-gray-300"
                                    name="subTitleDescription"
                                    placeholder="Enter Sub Title's description"
                                    value={subTitle.subTitleDescription}
                                    onChange={(e) => handleSubTitleChange(index, e)}
                                    rows="3"
                                ></textarea>
                            </div>
                            <div className="mb-4 flex justify-center">
                                <input
                                    type="text"
                                    className="input w-3/4 mt-2 shadow-md border border-gray-300"
                                    name="subTitlePrefix"
                                    placeholder="Enter Sub Title's prefix"
                                    value={subTitle.subTitlePrefix}
                                    onChange={(e) => handleSubTitleChange(index, e)}
                                />
                            </div>
                            <div className="mb-4 flex justify-center">
                                <input
                                    type="text"
                                    className="input w-3/4 mt-2 shadow-md border border-gray-300"
                                    name="cta"
                                    placeholder="Enter CTA"
                                    value={subTitle.cta}
                                    onChange={(e) => handleSubTitleChange(index, e)}
                                />
                            </div>
                            <div className="mb-4 flex justify-center items-center">
                                <div className="relative w-3/4 mt-2 shadow-md border border-gray-300 rounded">
                                    <input
                                        type="text"
                                        className="input w-full h-full p-2"
                                        name="ctaImage"
                                        placeholder="Enter Image Link"
                                        onChange={(e) => handleSubTitleChange(index, e)}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="mt-4 w-full flex flex-col items-center">
                        <button type="button" onClick={addSubTitle} className="btn btn-[#FEFEFE] w-3/4 mb-2 shadow-md border border-gray-300">
                            Add Sub Title
                        </button>
                        <button type="button" onClick={addSection} className="btn btn-[#E8EFFF] w-3/4 mb-2 shadow-md border border-gray-300">
                            Add Section
                        </button>
                        <button type="submit" className="btn btn-primary w-3/4 mb-2 shadow-md border border-gray-300">
                            Submit
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default Upload;
