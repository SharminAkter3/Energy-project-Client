
const BlogHeader = () => {
    return (
        <div className="section-container">
            <div className="text-left mx-40">
                <h1 className='h1-text'>
                    <p className='text-black'>How to measure energy usage</p>
                </h1>
            </div>
            <div className="text-left mx-40">
                <p className="text-[#6D6D6D]">The simplest and most accurate way to see how much energy you’re consuming is to use an energy monitor or smart meter. These devices monitor how much gas and electricity is being used in real time, allowing you to see your energy usage on a simple display screen. Some will let you know how much your bills could amount to based on current levels of usage and even allow you to look at past data (e.g. the last month or the last week) to see how your usage changes over time.
                    <br />
                    <br />
                    If you don’t have an energy monitor or smart meter device, don’t worry. You can still track your energy usage, but you may have to do so manually. When your energy bills come through, the details should include information about the price you pay per unit of energy and the total cost, allowing you to calculate how much energy you’ve used. All you need to do is divide the total cost of your electricity usage by the price per unit and that will tell you how many units of electricity you’ve used over the period that bill covers. Do the same with your gas bill to get a fuller picture.</p>
            </div>
        </div>
    );
};

export default BlogHeader;