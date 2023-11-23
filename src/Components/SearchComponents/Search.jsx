import React, {useState} from "react";
import "./search.css";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [triggerReason, setTriggerReason] = useState(''); 
    const [riskLevel, setRiskLevel] = useState('');
    
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };
    
    const handleTriggerReasonChange = (e) => {
        setTriggerReason(e.target.value);
    };
    
    const handleRiskLevelChange = (e) => {
        setRiskLevel(e.target.value);
    };

    return(
        <div className="container">
            <div className="search-container">
                <input type="text" placeholder="search....." value={searchTerm} onChange={handleSearchChange} />
            </div>

            <div className="spinner-container">
                <select id="triggerReason"
                        value={triggerReason}
                        onChange={handleTriggerReasonChange}
                >
                    <option value="">Select Trigger Reason</option>
                    <option value="hardFlag">Hard Flag</option>
                    <option value="tempFlag">Temp Flag</option>
                    <option value="rUnFlag">Restricted UnFlag</option>
                    <option value="unFlag">UnFlag</option>
                    <option value="reviewed">Reviewed</option>   
                </select>
                <select
                id="riskLevel"
                value={riskLevel}
                onChange={handleRiskLevelChange}
                >
                <option value="">Select Risk Level</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                </select>
            </div>
        </div>
    );
}

export default Search;