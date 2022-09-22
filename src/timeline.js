import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as SchoolIcon } from "./school.svg";
function Timeline() {
  return (
    <div className='container-fluid timelinewrapper'>
       <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2014 - 2015"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<SchoolIcon/>}
  >
    <h3 className="vertical-timeline-element-title">Velammal Vidhyashram , CBSE</h3>
    <h4 className="vertical-timeline-element-subtitle">Surapet , Chennai</h4>
    <p>
      High school , CGPA : 9.0 / 10.0
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2016 - 2017"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<SchoolIcon/>}
  >
    <h3 className="vertical-timeline-element-title">Velammal School of Excellence</h3>
    <h4 className="vertical-timeline-element-subtitle">Surapet , Chennai</h4>
    <p>
      Higher Secondary , Percentage : 86 %
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2017 - 2021 July"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<SchoolIcon/>}
  >
    <h3 className="vertical-timeline-element-title">Sri Venkateswara College of Engineering</h3>
    <h4 className="vertical-timeline-element-subtitle">Penalur , Kancheepuram </h4>
    <p>
      Anna University affiliated , CGPA : 7.6
    </p>
  </VerticalTimelineElement>
  </VerticalTimeline>

    </div>
  )
}

export default Timeline