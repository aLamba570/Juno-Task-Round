import React, {useState} from "react";

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
        </div>
    );
}

export default Search;