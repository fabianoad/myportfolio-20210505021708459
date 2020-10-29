import React from 'react'
import ExperienceItem from './ExperienceItem'

const experience = [
        {role: 'SOFTWARE ENGINEER', company: 'Mythic Table - Vancouver, BC, Canada', 
            activity: [
                '● Development of Role-Playing Games',
                '● Technologies: Javascript (VueJs), Unity, C# (.Net Core), MongoDB, Google Cloud, DevOps practices, testing, Kubernetes, Git, Docker, and more.',
                '● Responsible for the first Campaign Manager frontend layout in Vuejs, and Bootstrap.'
            ],
            date: "June 2020 - Present"
        },
        {role: "Web Developer", company: "Freelance - Vancouver, BC, Canada",
            activity: [
                '● Execucao de projetos em Javascript em geral.',
                '● Execucao de Projetos em PHP, Javascript e MySQL.',
                '● Execucao de Projetos em NodeJs, ReactJs, Vuejs e MongoDB.',
                '● Design e execucao de projetos de Banco de dados Relacionais Oracle.',
                '● Execucao de games em Javascript.',
                '● Execucao de projetos na AWS e utilizacao de plataforma de desenvolvimento Cloud9.',
                '● Uso de Git e metodologia Agile development cycle'
            ],
            date: "December 2018 - June 2020"},
        {role: "SYSTEM ANALYST", company: "Solutis Tecnologias - Salvador, BA, Brazil",
            activity: [
                '● Responsible for the administration of Linux environment at Bahia\'s Tribunal of Justice - Brazil',
                '● Experienced on VMWare ESX, Red Hat, Debian, Apache, Jboss, Tomcat, and Wildfly web servers, Ansible, Jenkins, and shell scripting for automating server environment tasks, such as installing, monitoring, and deploying applications.',
                '● Responsible for deploying Java Web Applications by using Ansible , and Jenkins.',
                '● Advanced use of Shell Script for automating tasks on Linux servers.',
                '● Successful Project: The electronic Judicial Process Migration from Pje1g Application to Pje2g (https://pje2g.tjba.jus.br/pje-web/login.seam), which is an important tool that facilitates consultation and monitoring of judicial processes.'
            ],
            date: "October 2017 - September 2018"},
        {role: "STORAGE ANALYST", company: "Petrobras SA - Salvador, BA, Brazil",
            activity: [
                '● I was responsible for the administration of Netapp Storages at Petrobras - Brazil.',
                '● I managed Netapp snapshot and recovery methods for storage volumes, configured and maintained replicas by using Snapmirror, installed and configured OSSV Backup software on Linux as well as on Windows Systems.',
                '● Administered qtrees quotas, user quotas, iSCSI Luns, FC Luns providing high availability of data to all important applications of Petrobras IT environment.',
                '● During the period I worked at Petrobras, I participated in many projects, therefore performed many data migrations, and recommended Netapp upgrades on firmware, DataOntap, and equipment models.'
            ],
            date: "August 2011 - June 2016"},
            {role: "TECHNICAL FIELD ENGINEER", company: "Sertenge SA - Salvador, BA, Brazil",
            activity: [
                '● Operational management of the Civil Engineering / Land Development Team. Project: Minha Casa Minha Vida (My house My life) from the Federal Government of Brazil.',
                '● Leadership experience'
            ],
            date: "January 2010 - December 2010"},
            {role: "TELECOM SUPPORT ANALYST", company: "Odebrecht SPT - Telecommunication Private System - Luanda, Angola - Africa",
            activity: [
                '● Responsible for the Wireless branch in Angola at Odebrecht Telecom Office.',
                '● Leader of a team made of ten telecommunication technicians from Angola.',
                '● Coached my team to achieve better results related to technical daily activities, and projects.',
                '● Successfully organized meetings, daily team-building activities, and a 20-hour basic TCP/IP course + outdoor radios workshop.',
                '● Had to quickly adapt to changes when living in Luanda/Angola.',
                '● Importance of the team\'s role: Establishing communication between construction sites, and projects in Luanda. Without telecommunication service provided by our team, all sites would have become isolated and incapable of running their own business.',
                '● Leadership experience'
            ],
            date: "January 2009 - October 2009"},
            {role: "SENIOR SUPPORT ANALYST", company: "Petrobras SA - Salvador, BA, Brazil",
            activity: [
                '● Participation in an ECM infrastructure consolidation project at a major subsidiary and in numerous ECM environment migrations, and applications development process. We also work together with suppliers to constantly update, and deploy specific applications.',
                '● Responsible for deploying Java web applications, and other proprietary ECM applications.'
            ],
            date: "January 2009 - October 2009"},
            {role: "SYSTEM ANALYST", company: "Embasa SA - Salvador, BA, Brazil",
            activity: [
                '● Responsible for the migration from Windows to Linux servers (DNS and DHCP). The costs with software licenses and subsequent administration were reduced. I also Managed Tomcat and Apache web servers, wrote scripts to automate repetitive tasks, installed and configured customized versions of Apache as frontend, Postfix, Sendmail, MySQL and Php on RedHat and Suse Linux environments.',
                '● Leader of a five-member team that was responsible for all Linux systems at Embasa.',
                '● Successful Project: implementation of a comprehensive and intuitive customized Linux interface/applications for company\'s branches and stores in order to provide services to the local community such as payment of water supply bills, water systems maintenance, installations, and services in general. The company did not have to pay for the O.S. Licenses, and started to grow/distribute services over its branches by reducing bureaucracy, and also started to profit out of the services which had been provided.'
            ],
            date: "February 2002 - December 2005"}
]

class Experience extends React.Component {

  

    render() {
        return <React.Fragment>


<section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <h2 className="mb-5">Experience</h2>
                    
                    {experience.map((experience,i) => {
                        return <ExperienceItem key={i} {...experience} />
                    })}
                    
                </div>
            </section>



        </React.Fragment>
    }
}
export default Experience
