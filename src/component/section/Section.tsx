import React, {ReactNode} from 'react';
import {useCollapse} from 'react-collapsed';

type SectionProps = {
    icon: string;
    title: string;
    children: ReactNode;
};

const Section: React.FC<SectionProps> = ({
                                             icon,
                                             title,
                                             children,
                                         }) => {
    const {getCollapseProps, getToggleProps, isExpanded} = useCollapse();

    return (
        <div className="collapsible nav-item">
            <div className="header" {...getToggleProps()}>
                <div
                    className={`nav-link ${isExpanded ? '' : 'collapsed'}`}
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                >
                    <i className={`fas fa-fw ${icon}`}></i>
                    <span>{title}</span>
                </div>
            </div>
            <div {...getCollapseProps()} aria-labelledby="headingTwo">
                <div id="collapseUtilities" className="collapse-card" aria-labelledby="headingUtilities">
                    <div className="content">
                        <div className="bg-white py-2 collapse-inner rounded">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;