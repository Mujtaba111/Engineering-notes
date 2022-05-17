import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mechanical',
  templateUrl: './mechanical.component.html',
  styleUrls: ['./mechanical.component.css']
})
export class MechanicalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 products=[

   
{'sno':1,'name':'Mathematics - I','year':'I','semester':'I','link':'https://drive.google.com/file/d/1Ibb-eCSz3ZSUzqfKThoeRMXnJyYA-2Vo/view?usp=sharing'},
{'sno':2,'name':'Programming for Problem Solving','year':'I','semester':'I','link':'https://drive.google.com/file/d/1Ibb-eCSz3ZSUzqfKThoeRMXnJyYA-2Vo/view?usp=sharing'},
{'sno':3,'name':'Chemistry','year':'I','semester':'I','link':'https://drive.google.com/file/d/1GQ_irhGSOz4unLSH5TiFHTMINCcq5RFS/view?usp=sharing'},
{'sno':4,'name':'Environmental Science','year':'I','semester':'I','link':'https://drive.google.com/file/d/1cARRCQFq-cqerIWdxI32gt6Bz7t8Y2St/view?usp=sharing'},
{'sno':5,'name':'Essence of Indian Traditional Knowledge','year':'I','semester':'I','link':'https://drive.google.com/file/d/1BAnnZ6A4bXmBC8uaKgjJvFffHVy50FLN/view?usp=sharing'},
{'sno':6,'name':'Mathematics -II','year':'I','semester':'II','link':'https://drive.google.com/file/d/1Fk3whxK418dcBvKS2lVBbxcUyYaP6_2-/view?usp=sharing'},
{'sno':7,'name':'Physics','year':'I','semester':'II','link':'https://drive.google.com/file/d/1bTzyOcVyWmVcmExnrcurkjG2dGzYSbNy/view?usp=sharing'},
{'sno':8,'name':'Basic Electrical Engineering','year':'I','semester':'II','link':'https://drive.google.com/file/d/1vzQ9kYZdK3TOoWeuP0PXYdU0jGs7IRz8/view?usp=sharing'},
{'sno':9,'name':'Indian Constitution','year':'I','semester':'II','link':'https://drive.google.com/file/d/17IypEZBj8eCA-bua0NIBok-EU3L-ZUlC/view?usp=sharing'},
{'sno':10,'name':'English','year':'I','semester':'II','link':'https://docs.google.com/document/d/1ghS8ML4-dtofOSGWoOQrKh8hu7OTBszo/edit?usp=sharing&ouid=106810835032773971794&rtpof=true&sd=true'},
{'sno':11,'name':'Effective Technical Communication in English','year':'II','semester':'III','link':'https://drive.google.com/file/d/1AKNajSbhfkbEBX9-zICtmM9T9ZNcmAW6/view?usp=sharing'},
{'sno':12,'name':'Mathematics - III','year':'II','semester':'III','link':'https://drive.google.com/file/d/1RB8MXK_ki0N7SJBCxSbuYfTAxz83fgPx/view?usp=sharing'},
{'sno':13,'name':'Basic Electronics','year':'II','semester':'III','link':'https://drive.google.com/file/d/1vZiMjfePgW_0sJ7vCC7bIf3CvxhO6zSb/view?usp=sharing'},
{'sno':14,'name':'Metallurgy and Material Science','year':'II','semester':'III','link':'https://drive.google.com/file/d/1xrw1AlLvpXSVZM1Z4YTHObhaWrkiKs97/view?usp=sharing'},
{'sno':15,'name':'Thermodynamics','year':'II','semester':'III','link':'https://drive.google.com/file/d/14NxXSn7XYtkUaFnpgVNlj-bUixZK7IYf/view?usp=sharing'},
{'sno':16,'name':'Engineering Electronics','year':'II','semester':'III','link':'http://engineering.nyu.edu/gk12/amps-cbri/pdf/Basic%20Electronics.pdf'},
{'sno':17,'name':'Biology for Engineers','year':'II','semester':'IV','link':'https://drive.google.com/file/d/1TOn-fGwkxVypfOajscQeS6K55kFk5DeE/view?usp=sharing'},
{'sno':18,'name':'Industrial Psychology','year':'II','semester':'IV','link':'https://drive.google.com/file/d/18wTtmqK0B0kWnCDLKj5MT_blyKfjMUlc/view?usp=sharing'},
{'sno':19,'name':'Energy Science and Engineering','year':'II','semester':'IV','link':'https://drive.google.com/file/d/1_2vUM7ZwTmPSxrPg0WwX6nzFOsXNifH2/view?usp=sharing'},
{'sno':20,'name':'Mechanics of Materials','year':'II','semester':'IV','link':'https://drive.google.com/file/d/166MwinJpTUys-2lrA42jG03WPLQ4nMVi/view?usp=sharing'},
{'sno':21,'name':'Applied Thermodynamics','year':'II','semester':'IV','link':'https://drive.google.com/file/d/1zXG4BjOMtYSnYnCdOyEKgbd_AjLuI9wL/view?usp=sharing'},
{'sno':22,'name':'Kinematics of Machinery','year':'II','semester':'IV','link':'https://drive.google.com/file/d/1EVGIMWYTDPFdg8Xr6pXziYlf-DbiMvPU/view?usp=sharing'},
{'sno':23,'name':'Manufacturing Process','year':'II','semester':'IV','link':'https://drive.google.com/file/d/1AB3XARD4UzPFJyOhWrUnZkVZAy3zT7C4/view?usp=sharing'},
{'sno':24,'name':'Metal Cutting and Machine Tools','year':'III','semester':'V','link':'https://drive.google.com/file/d/1xOicigwir1lzYCjNM72Y_47o-yTAuIkJ/view?usp=sharing'},
{'sno':25,'name':'Fluid Mechanics and Hydraulic Machines','year':'III','semester':'V','link':'https://drive.google.com/file/d/1IRtm4U4Q15DflfdldMtWTG8VSCg2GACo/view?usp=sharing'},
{'sno':26,'name':'Production Planning and Control','year':'III','semester':'V','link':'https://itcollege.ac.in/itdc/wp-content/uploads/2020/10/Dr-Pooja-Mishra-2.pdf'},
{'sno':27,'name':'Powder Metallurgy','year':'III','semester':'V','link':'https://www.iitg.ac.in/engfac/ganu/public_html/Powdermetallurgy.pdf'},
{'sno':28,'name':'Robotic Engineering','year':'III','semester':'V','link':'http://engineering.nyu.edu/mechatronics/smart/Archive/intro_to_rob/Intro2Robotics.pdf'},
{'sno':29,'name':'Theory of Elasticity','year':'III','semester':'V','link':'http://parastesh.usc.ac.ir/files/1538886893033.pdf'},
{'sno':30,'name':'Design of Machine Elements','year':'III','semester':'V','link':'https://drive.google.com/file/d/1zpWM15Moi4vwkwOxqK8oR9NoW6Ewblxb/view?usp=sharing'},
{'sno':31,'name':'Dynamics of Machines','year':'III','semester':'V','link':'https://drive.google.com/file/d/1bZ7DGd7fhDMJY0OKAKTw73JpmLbxz25G/view?usp=sharing'},
{'sno':32,'name':'Automata Languages and Computation','year':'III','semester':'V','link':'https://drive.google.com/drive/folders/1BljWHOWgF6wL47-Wid4_BfuSXeBQ6gMH'},
{'sno':33,'name':'Heat Transfer','year':'III','semester':'VI','link':'https://drive.google.com/file/d/1J3AqoxGDhTTihAxx5ZNWdspcO9yYo5DU/view?usp=sharing'},
{'sno':34,'name':'Metrology and Instrumentation','year':'III','semester':'VI','link':'https://drive.google.com/file/d/1opSIHWH1ZzZ4eg-CFcLdxufzLe7V7hpT/view?usp=sharing'},
{'sno':35,'name':'Machine Design','year':'III','semester':'VI','link':'https://drive.google.com/file/d/1LxHYsBzc00Mk0lTNqUOIzR1gZL_rOSpb/view?usp=sharing'},
{'sno':36,'name':'Finite Element Analysis','year':'III','semester':'VI','link':'https://drive.google.com/file/d/178tCSml28wicjWJhRKbzEvZd-xmSkZnw/view?usp=sharing'},
{'sno':37,'name':'Disaster Management','year':'III','semester':'VI','link':'https://drive.google.com/file/d/1zPYYLofPU5nOlsWWv3R5jOJZT4gNfy2h/view?usp=sharing'},
{'sno':38,'name':'OOP using Java','year':'III','semester':'VI','link':'https://drive.google.com/file/d/1ilQ-QVoTMzzn6Gw_NRRSpUBPBQcXgKyO/view?usp=sharing'},
{'sno':39,'name':'Automobile Engineering','year':'III','semester':'VI','link':'https://drive.google.com/file/d/1bOBtHAxM9nlVjmKHk4ZFpq8AHqfbY7EH/view?usp=sharing'},
{'sno':40,'name':'CAD / CAM','year':'III','semester':'VI','link':'https://drive.google.com/file/d/18Egj0XeKZEbVpD4iGd1NwUMfErGtRZXp/view?usp=sharing'},
{'sno':41,'name':'Design for Manufacturing','year':'III','semester':'VI','link':'https://drive.google.com/file/d/1-9dcEmA9JS70vZ_ip-WRsBoiLZgHgcPp/view?usp=sharing'},
{'sno':42,'name':'Production / Operations Management','year':'III','semester':'VI','link':'https://drive.google.com/file/d/1vftRyGIoWTZB-azb-DvvH_OXGQIXlz-q/view?usp=sharing'},
{'sno':43,'name':'Software Engineering','year':'IV','semester':'VII','link':'https://www.tutorialspoint.com/software_engineering/software_engineering_tutorial.pdf'},
{'sno':44,'name':'Thermal Turbo Machines','year':'IV','semester':'VII','link':'https://bmsit.ac.in/public/assets/pdf/mech/studymaterial/18ME54%20-%20Keerthi%20Kumar.pdf'},
{'sno':45,'name':'Finite Element Analysis','year':'IV','semester':'VII','link':'https://www.engr.uvic.ca/~mech410/lectures/FEA_Theory.pdf'},
{'sno':46,'name':'Mechatronics Systems','year':'IV','semester':'VII','link':'https://www.cet.edu.in/noticefiles/259_Lecturer%20Note%20on%20Mechatronics-ilovepdf-compressed.pdf'},
{'sno':47,'name':'Fundamentals of IOT','year':'IV','semester':'VII','link':'https://mrcet.com/pdf/Lab%20Manuals/IT/IoT%20&%20Applications%20Digital%20Notes.pdf'},
{'sno':48,'name':'Managerial Economics and Accountancy','year':'IV','semester':'VII','link':'https://mrcet.com/downloads/digital_notes/IT/Managerial%20Economics%20and%20Financial%20Automata.pdf'},
{'sno':49,'name':'Entrepreneurship','year':'IV','semester':'VII','link':'https://www.cmu.edu/swartz-center-for-entrepreneurship/education-and-resources/project-olympus/pdf/entrepreneurship-101.pdf'},
{'sno':50,'name':'Robotic Engineering','year':'IV','semester':'VIII','link':'http://engineering.nyu.edu/mechatronics/smart/Archive/intro_to_rob/Intro2Robotics.pdf'},
{'sno':51,'name':'Design of Solar Energy Systems','year':'IV','semester':'VIII','link':'https://www.nit.ac.in/teqip/pdf/REPORT.pdf'},
{'sno':52,'name':'Tool Design','year':'IV','semester':'VIII','link':'https://www.iare.ac.in/sites/default/files/lecture_notes/TOOL%20DESIGN_Lecture_Notes.pdf'},
{'sno':53,'name':'Power Plant Engineering','year':'IV','semester':'VIII','link':'https://mrcet.com/downloads/B.tech%20Digital%20Lecture%20notes/B.Tech%20IV%20Year%20I%20Semester/Power%20Plant%20Engineering%20Digital%20Material.pdf'},
{'sno':54,'name':'Machine Tool Engineering and Desig','year':'IV','semester':'VIII','link':'https://www.kousakukikai-zaidan.or.jp/wp-content/uploads/2019/03/MTEF-Book-02_20190319.pdf'},
{'sno':55,'name':'Waste Hear Recovery and Co-Generation','year':'IV','semester':'VIII','link':'https://www1.eere.energy.gov/manufacturing/intensiveprocesses/pdfs/waste_heat_recovery.pdf'},
{'sno':56,'name':'Aerodynamic Design of Thermal Turbines','year':'IV','semester':'VIII','link':'https://journals.sagepub.com/doi/pdf/10.1243/PIME_CONF_1968_183_232_02'}


];
}
