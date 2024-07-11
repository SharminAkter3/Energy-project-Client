import { useState } from 'react';

const Question = () => {
    const [collapsedItems, setCollapsedItems] = useState({});

    const handleToggle = (index) => {
        setCollapsedItems(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    return (
        <div className="container">
            <div>
                <h1 className='h1-text'>
                    <p className='text-black'>Frequently asked questions</p>
                </h1>
            </div>

            <div className="mx-40 p-4 text-left">
                {[{
                    question: "What types of renewable energy solutions do you offer?",
                    answer: "Lorem ipsum dolor sit amet consectetur. Suspendisse porta scelerisque vitae sociis ut quam scelerisque diam. Metus faucibus tortor malesuada nunc nec pharetra venenatis massa ut. Dictum vitae curabitur lorem etiam accumsan venenatis nec. Mi in vulputate sed sed viverra proin netus sollicitudin tincidunt. Porta imperdiet rutrum tortor phasellus id. Justo consequat neque semper velit laoreet donec vestibulum nisl nibh. Mauris ornare diam vitae a ullamcorper. Elit vulputate ac amet faucibus vestibulum augue donec lobortis. Interdum risus aenean amet arcu posuere semper cursus congue."
                }, {
                    question: "How can I get a quote for my energy needs?",
                    answer: "Lorem ipsum dolor sit amet consectetur. Suspendisse porta scelerisque vitae sociis ut quam scelerisque diam. Metus faucibus tortor malesuada nunc nec pharetra venenatis massa ut. Dictum vitae curabitur lorem etiam accumsan venenatis nec. Mi in vulputate sed sed viverra proin netus sollicitudin tincidunt. Porta imperdiet rutrum tortor phasellus id. Justo consequat neque semper velit laoreet donec vestibulum nisl nibh. Mauris ornare diam vitae a ullamcorper. Elit vulputate ac amet faucibus vestibulum augue donec lobortis. Interdum risus aenean amet arcu posuere semper cursus congue."
                }, {
                    question: "What is the difference between fixed price and pass-through pricing plans?",
                    answer: "Lorem ipsum dolor sit amet consectetur. Suspendisse porta scelerisque vitae sociis ut quam scelerisque diam. Metus faucibus tortor malesuada nunc nec pharetra venenatis massa ut. Dictum vitae curabitur lorem etiam accumsan venenatis nec. Mi in vulputate sed sed viverra proin netus sollicitudin tincidunt. Porta imperdiet rutrum tortor phasellus id. Justo consequat neque semper velit laoreet donec vestibulum nisl nibh. Mauris ornare diam vitae a ullamcorper. Elit vulputate ac amet faucibus vestibulum augue donec lobortis. Interdum risus aenean amet arcu posuere semper cursus congue."
                }, {
                    question: "Are your energy solutions certified?",
                    answer: "Lorem ipsum dolor sit amet consectetur. Suspendisse porta scelerisque vitae sociis ut quam scelerisque diam. Metus faucibus tortor malesuada nunc nec pharetra venenatis massa ut. Dictum vitae curabitur lorem etiam accumsan venenatis nec. Mi in vulputate sed sed viverra proin netus sollicitudin tincidunt. Porta imperdiet rutrum tortor phasellus id. Justo consequat neque semper velit laoreet donec vestibulum nisl nibh. Mauris ornare diam vitae a ullamcorper. Elit vulputate ac amet faucibus vestibulum augue donec lobortis. Interdum risus aenean amet arcu posuere semper cursus congue."
                }, {
                    question: "How do I manage my energy account online?",
                    answer: "Lorem ipsum dolor sit amet consectetur. Suspendisse porta scelerisque vitae sociis ut quam scelerisque diam. Metus faucibus tortor malesuada nunc nec pharetra venenatis massa ut. Dictum vitae curabitur lorem etiam accumsan venenatis nec. Mi in vulputate sed sed viverra proin netus sollicitudin tincidunt. Porta imperdiet rutrum tortor phasellus id. Justo consequat neque semper velit laoreet donec vestibulum nisl nibh. Mauris ornare diam vitae a ullamcorper. Elit vulputate ac amet faucibus vestibulum augue donec lobortis. Interdum risus aenean amet arcu posuere semper cursus congue."
                }].map((item, index) => (
                    <div key={index} style={{ borderBottom: '2px solid #6D6D6D' }}>
                        <div className="collapse mb-4">
                            <input type="radio" name="my-accordion-3" checked={collapsedItems[index]} onChange={() => handleToggle(index)} style={{ display: 'none' }} />
                            <div
                                className="collapse-title text-xl font-medium"
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}
                                onClick={() => handleToggle(index)}
                            >
                                <span>{item.question}</span>
                                <span
                                    style={{
                                        backgroundColor: '#4CAF50',
                                        color: 'white',
                                        paddingBottom: '3px',
                                        paddingTop: '2px',
                                        paddingLeft: '10px',
                                        paddingRight: '10px',
                                        fontSize: '18px',
                                        borderRadius: '50%'
                                    }}
                                >
                                    {collapsedItems[index] ? '-' : '+'}
                                </span>
                            </div>
                            {collapsedItems[index] && (
                                <div className="collapse-content">
                                    <p className="text-[#6D6D6D]">
                                        {item.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Question;
