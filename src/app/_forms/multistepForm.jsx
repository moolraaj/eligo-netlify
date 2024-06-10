import { allExportedApi } from "@/utils/apis/Apis";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import formClose from '../../../public/assets/headerAssets/formclose.png';

export default function MultistepForm({ onHideForm, onCompleteForm }) {
    const [formData, setFormData] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [selectedRedirection, setSelectedRedirection] = useState(null);
    const [selectedLabels, setSelectedLabels] = useState({}); // New state for storing selected labels
    const api = allExportedApi();

    useEffect(() => {
        const fetchData = async () => {
            const data = await api.multistepFormApi();
            setFormData(data[0].acf); // Assuming the API returns an array with the form data at index 0
        };

        fetchData();
    }, []);

    
    
    const handleOptionClick = (index, optIndex, redirectionLink, redirectOption, label) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [index]: optIndex,
        }));

        setSelectedLabels((prev) => ({
            ...prev,
            [index]: label,
        }));

        if (redirectionLink) {
            setSelectedRedirection(redirectionLink);
        } else if (redirectOption) {
            setSelectedRedirection(redirectOption);
        } else {
            setSelectedRedirection(null); // Reset if no redirection link or option is provided
        }
    };

    if (!formData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="multistep_form_outer">
            <div className="multistep_form_inner">
                <div className="form_heading_section">
                    <div className="form_heading_close_btn">
                        <h2>{formData.form_heading_one}</h2>
                        <div className="cf7_right_section">
                            <div className="close_button">
                                <button onClick={onHideForm} className="close_button">
                                    <img src={formClose.src} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <h3>{formData.form_heading_two}</h3>
                    <p>{formData.form_heading_three}</p>
                </div>
                <div className="form_questions_section">
                    {formData.form_questions_outer.map((question, index) => (
                        <div key={index} className="form_question_block">
                            <h4>{question.form_question}</h4>
                            
                            <div className="form_options">
                                {question.options_for_question.map((option, optIndex) => (
                                    <div key={optIndex} className="form_option">
                                        <input
                                            className="popup_radioboxes"
                                            type="radio"
                                            name={`question-${index}`}
                                            onClick={() =>
                                                handleOptionClick(
                                                    index,
                                                    optIndex,
                                                    option.nested_options ? null : option.nested_option_redirection,
                                                    option.redirect_main_option,
                                                    option.choose_one_options_for_question // Pass the label to handleOptionClick
                                                )
                                            }
                                        />
                                        <label>{option.choose_one_options_for_question}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="nested_options_section">
                    {formData.form_questions_outer.map((question, index) => (
                        selectedOptions[index] !== undefined &&
                        question.options_for_question[selectedOptions[index]].nested_options && (
                            <div key={`nested-${index}`} className="nested_options_block">
                                <h4>{selectedLabels[index]}</h4>
                                <div className="nested_options">
                                    {question.options_for_question[selectedOptions[index]].nested_options.map((nestedOption, nestedIndex) => (
                                        <div key={nestedIndex} className="nested_option">
                                             <input
                                                className="nexted_inputs"
                                                    type="radio"
                                                    name={`nested-question-${index}-${selectedOptions[index]}`}
                                                    onClick={() => setSelectedRedirection(nestedOption.nested_option_redirection)}
                                                />
                                            <label>  {nestedOption.nested_options_tittle}
                                            </label>
                                               
                                              
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    ))}
                </div>

                <div className="form_redirection_btn">
                    {Object.keys(selectedOptions).some(index => selectedOptions[index] !== undefined && selectedRedirection) && (
                        <Link href={selectedRedirection} onClick={onCompleteForm}>Next</Link>
                    )}
                </div>
            </div>
        </div>
    );
}
