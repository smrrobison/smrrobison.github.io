import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import RoomIcon from '@mui/icons-material/Room';
import ComputerIcon from '@mui/icons-material/Computer';
import WebIcon from '@mui/icons-material/Web';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import AddLinkIcon from '@mui/icons-material/AddLink';
import StorageIcon from '@mui/icons-material/Storage';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
    return (
      <div className = 'Timeline' id="Experience">
          <h1 Color = "white">Professional Experience</h1>
            <VerticalTimeline>
                <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            //contentStyle={{ background: 'rgb(29,29,29)' }}
                            //contentArrowStyle={{ borderRight: '7px solid  rgb(29,29,29)', }}
                            date="May 2022 - Present"
                            dateClassName = "TimelineDate"
                            iconStyle={{ background: '#E5AE77', color: '#fff' }}
                            icon={<AccountBalanceIcon/>}            
                            ><h3 className="vertical-timeline-element-title">Software Engineer</h3>
                            <h4 className="vertical-timeline-element-subtitle">nCino</h4>
                            <p>
                                <ul>
                                    <li>
                                    Building and maintaining the most frequently used feature within nCino’s cloud-based banking software 
                                    on the Salesforce platform, utilized by over 1,850 financial institutions.
                                    </li>
                                    <li>
                                        Designing and implementing over 50 custom front-end Lightning Web Components in JavaScript, making 
                                        platform features more responsive and attractive to new and existing clients.
                                    </li>
                                    <li>
                                        Developing robust back-end services within a Service-Oriented Architecture (SOA) stack utilizing Apex and 
                                        Angular, contributing to a $108.4M increase in subscription revenues - up 19% year-over-year.
                                    </li>
                                    <li>
                                        Taking sole-ownership of automated testing design, creation, and training that has increased 
                                        test frequency from monthly to nightly and reduced test time by ~97%.
                                    </li>
                                    <li>
                                        Creating and supporting diverse API endpoints (Aura, Xpkg, URT, etc.) to enhance accessibility and 
                                        usage of platform services.
                                    </li>
                                    <li>
                                        Spearheading end-to-end agile epics from planning, to development, to testing and release.
                                    </li>
                                    <li>
                                        Conducting regular sprint reviews to showcase and demo completed features to stakeholders.
                                    </li>
                                </ul>
                            </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        //contentStyle={{ background: 'rgb(29,29,29)' }}
                        //contentArrowStyle={{ borderRight: '7px solid  rgb(29,29,29)', }}
                        date="Jan 2022 - May 2022"
                        dateClassName = "TimelineDate"
                        iconStyle={{ background: '#00AA68', color: '#fff' }}
                        icon={<BusinessCenterIcon/>}           
                ><h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">nCino</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    //contentStyle={{ background: 'rgb(29,29,29)' }}
                    //contentArrowStyle={{ borderRight: '7px solid  rgb(29,29,29)', }}
                    date="Mar 2021 - Nov 2021"
                    dateClassName = "TimelineDate"
                    iconStyle={{ background: '#00998B', color: '#fff' }}
                    icon={<RoomIcon />}            >
                    <h3 className="vertical-timeline-element-title">Full Stack Development Intern</h3>
                    <h4 className="vertical-timeline-element-subtitle">Wander App Inc.</h4>
                    <p>
                        <ul>
                            <li>
                                Created new features for a B2B mapping application on both web and mobile devices using React.JS and Docker.
                            </li>
                            <li>
                                Built a brand new customer login experience as part of the company’s brand redesign.
                            </li>
                            <li>
                                Wrote and utilized automated tests using Cypress to assess the functionality of the web application and ensure product quality.
                            </li>
                        </ul>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Feb 2018 - Oct 2020"
                    dateClassName = "TimelineDate"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WebIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Onsite Recommendation Specialist</h3>
                    <h4 className="vertical-timeline-element-subtitle">Boostability</h4> 
                    <p>
                        <ul>
                            <li>
                                Optimized front-end elements on client web pages according to best SEO practices.
                            </li>
                            <li>
                                Organized and facilitated meetings with cross-functional teams to discuss new user requirements, eliminate common customer pain 
                                points, and streamline multi-department communication channels.
                            </li>
                        </ul>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Mar 2017 - Feb 2018"
                    dateClassName = "TimelineDate"
                    iconStyle={{ background: '#F6781D', color: '#fff' }}
                    icon={<ManageSearchIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Keyword Research Analyst</h3>
                    <h4 className="vertical-timeline-element-subtitle">Boostability</h4>
                    <p>
                        <ul>
                            <li>Performed data analysis to execute and/or recommend targeted keyword campaigns.</li>
                            <li>Used Google analytics to consolidate, and organize data into specialized reports for both clients and team members.</li>
                            <li>Regularly completed competitive analysis to ensure proper recommendations were made.</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Feb 2016 - Mar 2017"
                    dateClassName = "TimelineDate"
                    iconStyle={{ background: '#FFCA2B', color: '#fff' }}
                    icon={<AddLinkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">SEO Fulfillment Specialist</h3>
                    <h4 className="vertical-timeline-element-subtitle">Boostability</h4>
                    <p>
                        <ul>
                            <li>Utilized automated macros for keyword link-building and social bookmarking tasks.</li>
                            <li>Performed article engagement to facilitate the indexing of client websites for search engine web crawlers based on specific keywords.</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Feb 2013 - Jun 2013"
                    dateClassName = "TimelineDate"
                    iconStyle={{ background: '#831401', color: '#fff' }}
                    icon={<StorageIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Data Research Analyst</h3>
                    <h4 className="vertical-timeline-element-subtitle">Auto Alert</h4>
                    <p>
                        <ul>
                            <li>
                                Tested software that assists car dealerships in the organization and maintenance of client data.
                            </li>
                            <li> 
                                Created extensive documentation for the manual testing process conducted before each scheduled release.
                            </li>
                        </ul>
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>

    );
}
export default Timeline