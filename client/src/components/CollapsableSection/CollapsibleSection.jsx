import { useState } from "react";
import { ExpandMoreOutlined, ExpandLessOutlined } from "@mui/icons-material";
import "./CollapsibleSection.scss";

export default function CollapsibleSection({title, content}) {
  const [isActive, setIsActive] = useState(false);

  return (
     
       <div className="collapsible-section" onClick={() => setIsActive(!isActive)}>
            {title}
            {isActive ? <ExpandLessOutlined className="expandIcon"/> : <ExpandMoreOutlined className="expandIcon"/>}
            <div className={`collapsible-content ${isActive ? "active" : ""}`}>
                {content}
            </div>
        </div>
  );
}
