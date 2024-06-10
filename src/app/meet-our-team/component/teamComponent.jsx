'use client';

import React, { useEffect, useState } from 'react';
import { emptyImage } from '../../../../public/assets/images';
import { allExportedApi } from '@/utils/apis/Apis';

function TeamComponent() {
    const api = allExportedApi();
    const [result, setResult] = useState([]);
    const [popup, setPopup] = useState({ isVisible: false, image: null });
    const [selectedCategory, setSelectedCategory] = useState('All');

    const loadMeetTeamPageLists = async () => {
        let response = await api.fetchMeetOurTeam();
        setResult(response);
    }

    useEffect(() => {
        loadMeetTeamPageLists();
    }, []);

    const groupMembersByCategory = () => {
        const groupedMembers = {};
        result.forEach(member => {
            member.team_category.forEach(category => {
                if (!groupedMembers[category]) {
                    groupedMembers[category] = [];
                }
                groupedMembers[category].push(member);
            });
        });
        return groupedMembers;
    }

    const handleImageClick = (image) => {
        setPopup({ isVisible: true, image });
    }

    const closePopup = () => {
        setPopup({ isVisible: false, image: null });
    }

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    }

    const filteredMembers = (members) => {
        if (selectedCategory === 'All') {
            return members;
        }
        return members.filter(member => member.team_category.includes(selectedCategory));
    }

    const categories = ['All', ...new Set(result.flatMap(member => member.team_category))];

    return (
        <>
            <div className="team_component_outer">
                <div className="filter_section">
                    <label htmlFor="categoryFilter">Filter by team role: </label>
                    <select id="categoryFilter" value={selectedCategory} onChange={handleCategoryChange}>
                        {categories.map(category => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
                {Object.entries(groupMembersByCategory()).map(([category, members]) => {
                    const filteredCategoryMembers = filteredMembers(members);
                    if (filteredCategoryMembers.length === 0) {
                        return null; // Skip rendering this category if no members match the filter
                    }
                    return (
                        <React.Fragment key={category}>
                            <div className="category_header">
                                <h2>{category}</h2>
                            </div>
                            <div className="category_section">
                                {filteredCategoryMembers.map((member, index) => (
                                    <div className={`team_member_section ${index % 2 === 0 ? 'even' : 'odd'}`} key={member.id}>
                                        <div className="memebr_left_section">
                                            <div className="team-member_image" onClick={() => handleImageClick(member.acf.our_team_image || emptyImage.src)}>
                                                <img src={member.acf.our_team_image || emptyImage.src} alt="" />
                                                <p dangerouslySetInnerHTML={{ __html: member.acf.our_team_description.slice(0, 70) }}></p>
                                                <div className="team_member_description"></div>
                                            </div>
                                        </div>
                                        <div className="member_right_section">
                                            <div className="member_informations_section">
                                                <div className='members_image_mobile'>
                                                    <img src={member.acf.our_team_image || emptyImage.src} alt="our_team_image" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                                                </div>
                                                <div className="member_name">
                                                    <h4>{member.acf.our_team_name}</h4>
                                                </div>
                                                <div className="member_designation">
                                                    <p>{member.acf.our_team_designation}</p>
                                                </div>
                                                <div className="member_name">
                                                    {Array.isArray(member.acf?.our_team_social_connectivity) ? (
                                                        member.acf.our_team_social_connectivity.map((icons, index) => (
                                                            <div className="team_social_icon_wrapper" key={index}>
                                                                <div className="member_social_icons">
                                                                    <a href={icons.social_link || ""} target='_blank'><img src={icons.our_team_social_media || emptyImage.src} alt='social icons' /></a>
                                                                </div>
                                                            </div>
                                                        ))
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </React.Fragment>
                    );
                })}

                {popup.isVisible && (
                    <div className="popup_overlay" onClick={closePopup}>
                        <div className="popup_content">
                            <img src={popup.image} alt="Popup" />
                        </div>
                    </div>
                )}
            </div>

        </>
    )
}

export default TeamComponent;
