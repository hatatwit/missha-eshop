import { useState } from "react";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import "./CollapsibleSection.scss";

export default function CollapsibleSection({title, content}) {
  const [activeSection, setActiveSection] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const toggleSection = (sectionIndex) => {
    setActiveSection((prevSection) =>
      prevSection === sectionIndex ? null : sectionIndex
    );
  };

  return (
     
       <div className="collapsible-section" onClick={() => setIsActive(!isActive)}>
            {title}
            <ExpandMoreOutlinedIcon className="expandIcon"/>
            <div className={`collapsible-content ${isActive ? "active" : ""}`}>
                {content}
            </div>
        </div>
  );
}
