import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-civil',
  templateUrl: './civil.component.html',
  styleUrls: ['./civil.component.css']
})
export class CivilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    

}
productss=[

  	
{'sno':1,'name':'Mathematics - I','year':1,'semester':'I','link':'https://drive.google.com/file/d/1Ibb-eCSz3ZSUzqfKThoeRMXnJyYA-2Vo/view?usp=sharing'},
{'sno':2,'name':'Programming for Problem Solving','year':1,'semester':'I','link':'https://drive.google.com/file/d/1GQ_irhGSOz4unLSH5TiFHTMINCcq5RFS/view?usp=sharing'},
{'sno':3,'name':'Chemistry','year':1,'semester':'I','link':'https://drive.google.com/file/d/1GQ_irhGSOz4unLSH5TiFHTMINCcq5RFS/view?usp=sharing'},
{'sno':4,'name':'Environmental Science','year':1,'semester':'I','link':'https://drive.google.com/file/d/1cARRCQFq-cqerIWdxI32gt6Bz7t8Y2St/view?usp=sharing'},
{'sno':5,'name':'Essence of Indian Traditional Knowledge','year':1,'semester':'I','link':'https://drive.google.com/file/d/1BAnnZ6A4bXmBC8uaKgjJvFffHVy50FLN/view?usp=sharing'},
{'sno':6,'name':'Mathematics -II','year':1,'semester':'II','link':'https://drive.google.com/file/d/1Fk3whxK418dcBvKS2lVBbxcUyYaP6_2-/view?usp=sharing'},
{'sno':7,'name':'Physics','year':1,'semester':'II','link':'https://drive.google.com/file/d/17FosHvefVkX1OK8aa-p63mF4oi8xBlK0/view?usp=sharing'},
{'sno':8,'name':'Basic Electrical Engineering','year':1,'semester':'II','link':'https://drive.google.com/file/d/1vzQ9kYZdK3TOoWeuP0PXYdU0jGs7IRz8/view?usp=sharing'},
{'sno':9,'name':'English','year':1,'semester':'II','link':'https://docs.google.com/document/d/1ghS8ML4-dtofOSGWoOQrKh8hu7OTBszo/edit?usp=sharing&ouid=106810835032773971794&rtpof=true&sd=true'},
{'sno':10,'name':'Indian Constitutio','year':1,'semester':'II','link':'https://drive.google.com/file/d/17IypEZBj8eCA-bua0NIBok-EU3L-ZUlC/view?usp=sharing'},
{'sno':11,'name':'Biology For Engineers (BE)','year':2,'semester':'II','link':'https://drive.google.com/file/d/1TOn-fGwkxVypfOajscQeS6K55kFk5DeE/view?usp=sharing'},
{'sno':12,'name':'Industrial Psychology','year':2,'semester':'II','link':'https://drive.google.com/file/d/18wTtmqK0B0kWnCDLKj5MT_blyKfjMUlc/view?usp=sharing'},
{'sno':13,'name':'Energy Science and Engineering (ESE)','year':2,'semester':'II','link':'https://drive.google.com/file/d/1_2vUM7ZwTmPSxrPg0WwX6nzFOsXNifH2/view?usp=sharing'},
{'sno':14,'name':'Overview of Civil Engineering','year':2,'semester':'II','link':'https://webpages.charlotte.edu/~jmconrad/hsed/cveg_0in.pdf'},
{'sno':15,'name':'Solid Mechanics','year':2,'semester':'II','link':'https://nitsri.ac.in/Department/Mechanical%20Engineering/Mechanics_of_Solids.pdf'},
{'sno':16,'name':'Engineering Geology','year':2,'semester':'II','link':'https://geomuseu.ist.utl.pt/SEMINAR2012/Livros/EngenhariaGeologica.pdf'},
{'sno':17,'name':'Surveying and Geomatics','year':2,'semester':'II','link':'https://www.iare.ac.in/sites/default/files/IARE_SURVEYING_LECTURE_NOTES.pdf'},
{'sno':18,'name':'Effective Technical Communication in English','year':2,'semester':'IV','link':'https://drive.google.com/file/d/1AKNajSbhfkbEBX9-zICtmM9T9ZNcmAW6/view?usp=sharing'},
{'sno':19,'name':'Mathematics - III','year':2,'semester':'IV','link':'https://drive.google.com/file/d/1RB8MXK_ki0N7SJBCxSbuYfTAxz83fgPx/view?usp=sharing'},
{'sno':20,'name':'Elements of Mechanical Engineering','year':2,'semester':'IV','link':'https://drive.google.com/file/d/1AXdIAPaB635UWfMUgWJfc18HUBx5uU0z/view?usp=sharing'},
{'sno':21,'name':'Mechanics of Materials','year':2,'semester':'IV','link':'https://drive.google.com/file/d/1dDCMpmhxuQ8TsAoSGhdg-Rh_uisvlC4l/view?usp=sharing'},
{'sno':22,'name':'Fluid Mechanics','year':2,'semester':'IV','link':'https://arxiv.org/ftp/arxiv/papers/1407/1407.3162.pdf'},
{'sno':23,'name':'Materials : Testing and Evaluation','year':2,'semester':'IV','link':'https://www.vssut.ac.in/lecture_notes/lecture1497881261.pdf'},
{'sno':24,'name':'Structural Analysis - I','year':3,'semester':'V','link':'https://www.mitma.gob.es/recursos_mfom/02_0.pdf'},
{'sno':25,'name':'Hydraulic Engineering','year':3,'semester':'V','link':'https://johndfenton.com/Lectures/Hydraulics/Hydraulics.pdf'},
{'sno':26,'name':'Structural Engineering Design and Detailing','year':3,'semester':'V','link':'https://www.huduser.gov/publications/pdf/residential.pdf'},
{'sno':27,'name':'Geotechnical Engineering','year':3,'semester':'V','link':'https://www.hzu.edu.in/engineering/Geotechnical_Engineering.pdf'},
{'sno':28,'name':'Hydrology and Water Resources Engineering','year':3,'semester':'V','link':'https://www.ipcc.ch/site/assets/uploads/2018/03/wg2TARchap4.pdf'},
{'sno':29,'name':'Transportation Engineering','year':3,'semester':'V','link':'https://www.iare.ac.in/sites/default/files/lecture_notes/IARE_TEI_Lecture_Notes.pdf'},
{'sno':30,'name':'Steel Structures','year':3,'semester':'VI','link':'https://www.iare.ac.in/sites/default/files/lecture_notes/IARE_SSDD_LN.pdf'},
{'sno':31,'name':'Foundation Engineering','year':3,'semester':'VI','link':'https://www.usb.ac.ir/FileStaff/5495_2020-1-25-11-9-53.pdf'},
{'sno':32,'name':'Estimation and Specification','year':3,'semester':'VI','link':'https://kanchiuniv.ac.in/coursematerials/estimation,costingandvaluation.pdf'},
{'sno':33,'name':'Railway and Airport Engineering','year':3,'semester':'VI','link':'https://uomustansiriyah.edu.iq/media/lectures/5/5_2016_04_04!05_48_16_PM.pdf'},
{'sno':34,'name':'Road Safety Engineering','year':3,'semester':'VI','link':'https://www.tiipublications.ie/training/ST13/Road-Safety-Engineering-Update.pdf'},
{'sno':35,'name':'Ground Water Engineering','year':3,'semester':'VI','link':'https://www.un-igrac.org/sites/default/files/resources/files/Groundwater%20book%20-%20English.pdf'},
{'sno':36,'name':'Remote Sensing and Geographical Information','year':4,'semester':'VI','link':'http://ags.geography.du.ac.in/Study%20Materials_files/Punyatoya%20Patra_AM.pdf'},
{'sno':37,'name':'Software Engineering','year':4,'semester':'VII','link':'https://www.vssut.ac.in/lecture_notes/lecture1428551142.pdf'},
{'sno':38,'name':'Structural Engineering and Drawing - II','year':4,'semester':'VII','link':'https://bie.tg.nic.in/Pdf/civilenggdrawing.pdf'},
{'sno':39,'name':'Finite Element Techniques','year':4,'semester':'VII','link':'https://www.iitg.ac.in/mech/documents/128/introfem.pdf'},
{'sno':40,'name':'Data Science using R Programming','year':4,'semester':'VII','link':'https://www.cs.upc.edu/~robert/teaching/estadistica/rprogramming.pdf'},
{'sno':41,'name':'Principles of Electronic Communications','year':4,'semester':'VII','link':'http://e4uhu.com/down/communication%20electronics/Book%204th.pdf'},
{'sno':42,'name':'Non-Conventional Energy Sources','year':4,'semester':'VII','link':'https://www.beeindia.gov.in/sites/default/files/4Ch12.pdf'},
{'sno':43,'name':'Entrepreneurship','year':4,'semester':'VII','link':'https://www.cmu.edu/swartz-center-for-entrepreneurship/education-and-resources/project-olympus/pdf/entrepreneurship-101.pdf'},
{'sno':44,'name':'Principles of Green Building Practices','year':4,'semester':'VIII','link':'https://www.rcac.org/wp-content/uploads/2014/12/grn-bldg-guide_4-20-09.pdf'},
{'sno':45,'name':'Construction Management and Technology','year':4,'semester':'VIII','link':'https://ptu.ac.in/wp-content/uploads/2020/10/mctm-04.pdf'},
{'sno':46,'name':'Applied Hydrology','year':4,'semester':'VIII','link':'http://ponce.sdsu.edu/Applied_Hydrology_Chow_1988.pdf'},
{'sno':47,'name':'Structural Dynamics','year':4,'semester':'VIII','link':'https://www.chaocompute.com/wp-content/uploads/2020/07/Dynamics-of-Structures-Clough-Penzien.pdf'},
{'sno':48,'name':'Intelligent Transportation Systems','year':4,'semester':'VIII','link':'https://coeut.iitm.ac.in/ITS_synthesis.pdf'},
{'sno':49,'name':'Traffic Engineering and Infrastructure Design','year':4,'semester':'VIII','link':'https://onlinepubs.trb.org/onlinepubs/sr/sr290meyer.pdf'}
  
  ];
}