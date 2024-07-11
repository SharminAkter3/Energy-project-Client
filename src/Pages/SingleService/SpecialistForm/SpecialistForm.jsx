
const SpecialistForm = () => {
    return (
        <div className="section-container my-52">
            <h1 className="text-3xl text-center font-bold">Request a call from a Specialist</h1>
            <p className="text-[#6D6D6D]">Please enter your business information. A representative will reach out to you shortly.</p>
            <form className="mx-40 px-8">
                <div className="form-control mt-5">
                    <input type="text" name='name' placeholder="Name" className="input shadow-lg" />
                </div>

                <div className="form-control mt-5">
                    <input type="number" name='phone' placeholder="Phone" className="input shadow-lg" />
                </div>

                <div className="form-control mt-5">
                    <input type="text" name='email' placeholder="Email address" className="input shadow-lg" />
                </div>

                <div className="form-control mt-5">
                    <input type="text" name='business_name' placeholder="Business Name" className="input shadow-lg" />
                </div>

                <div className="form-control mt-5">
                    <input type="text" name='business_address' placeholder="Business Address" className="input shadow-lg" />
                </div>

                <div className="form-control mt-5">
                    <textarea rows="10" cols="150" name="comment" placeholder="How can we help you?" className="p-5 shadow-lg" />
                </div>

                <div className="text-left mt-5 mb-10">
                    <input
                        type="checkbox"
                    />
                    By clicking submit I acknowledge that my information will be shared for the purpose of discussing solutions.
                </div>

                <div className="form-control mt-6">
                    <input className="btn bg-[#4CAF50] text-white" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default SpecialistForm;