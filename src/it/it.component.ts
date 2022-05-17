import { Component, OnInit } from '@angular/core';
import { Product } from 'src/products';
import { ProductService } from 'src/productservice';

@Component({
  selector: 'app-it',
  templateUrl: './it.component.html',
  styleUrls: ['./it.component.css']
})

export class ItComponent {
  constructor() { }

  ngOnInit(): void {
    
  }
  products=[

   

    {'sno':1,'name':'Mathematics - I','year':'I','semester':'I','link':'https://drive.google.com/file/d/1Ibb-eCSz3ZSUzqfKThoeRMXnJyYA-2Vo/view?usp=sharing'},
    {'sno':2,'name':'Programming for Problem Solving','year':'I','semester':'I','link':'https://drive.google.com/file/d/16kIDDGDBIUYfKvLhyifFzNAAj_8cdkZk/view?usp=sharing'},
    {'sno':3,'name':'Chemistry','year':'I','semester':'I','link':'https://drive.google.com/file/d/1GQ_irhGSOz4unLSH5TiFHTMINCcq5RFS/view?usp=sharing'},
    {'sno':4,'name':'Environmental Science','year':'I','semester':'I','link':'https://drive.google.com/file/d/1cARRCQFq-cqerIWdxI32gt6Bz7t8Y2St/view?usp=sharing'},
    {'sno':5,'name':'Essence of Indian Traditional Knowledge','year':'I','semester':'I','link':'https://drive.google.com/file/d/1BAnnZ6A4bXmBC8uaKgjJvFffHVy50FLN/view?usp=sharing'},
    {'sno':6,'name':'Mathematics -II','year':'I','semester':'II','link':'https://drive.google.com/file/d/1Fk3whxK418dcBvKS2lVBbxcUyYaP6_2-/view?usp=sharing'},
    {'sno':7,'name':'Physics','year':'I','semester':'II','link':'https://drive.google.com/file/d/1ECRc24EZAJ3zl3W80h1w1IdTfHrIAoPT/view?usp=sharing'},
    {'sno':8,'name':'Basic Electrical Engineering','year':'I','semester':'II','link':'https://drive.google.com/file/d/1vzQ9kYZdK3TOoWeuP0PXYdU0jGs7IRz8/view?usp=sharing'},
    {'sno':9,'name':'Indian Constitution','year':'I','semester':'II','link':'https://drive.google.com/file/d/1szkoc_IPEVLWjCN0ykbyRGL-gMUasWzQ/view?usp=sharing'},
    {'sno':10,'name':'English','year':'I','semester':'II','link':'https://docs.google.com/document/d/1ghS8ML4-dtofOSGWoOQrKh8hu7OTBszo/edit?usp=sharing&ouid=106810835032773971794&rtpof=true&sd=true'},
    {'sno':11,'name':'Effective Technical Communication in English','year':'II','semester':'III','link':'https://drive.google.com/file/d/1AKNajSbhfkbEBX9-zICtmM9T9ZNcmAW6/view?usp=sharing'},
    {'sno':12,'name':'Mathematics - III','year':'II','semester':'III','link':'https://drive.google.com/file/d/1RB8MXK_ki0N7SJBCxSbuYfTAxz83fgPx/view?usp=sharing'},
    {'sno':13,'name':'Basic Electronics','year':'II','semester':'III','link':'https://drive.google.com/file/d/1vZiMjfePgW_0sJ7vCC7bIf3CvxhO6zSb/view?usp=sharing'},
    {'sno':14,'name':'Digital Electronics','year':'II','semester':'III','link':'https://drive.google.com/file/d/1VjrFooyBOVZjXquOblFSLgGaLfi5gwvf/view?usp=sharing'},
    {'sno':15,'name':'Data Structures','year':'II','semester':'III','link':'https://drive.google.com/file/d/1jeKakTh-UswOVv9T8KytBPLBRV3JsgFH/view?usp=sharing'},
    {'sno':16,'name':'Mathematical Foundation of Information Technology','year':'II','semester':'III','link':'https://drive.google.com/file/d/1RTTWvXqZoMg8ut5-ABoLjyhLM3Ov05QF/view?usp=sharing'},
    {'sno':17,'name':'Biology for Engineers','year':'II','semester':'IV','link':'https://drive.google.com/file/d/1TOn-fGwkxVypfOajscQeS6K55kFk5DeE/view?usp=sharing'},
    {'sno':18,'name':'Operations Research','year':'II','semester':'IV','link':'https://drive.google.com/file/d/1FAsO3RztQ89hGONa2W-1laz82UfBIfjH/view?usp=sharing'},
    {'sno':19,'name':'Signals and Systems','year':'II','semester':'IV','link':'https://drive.google.com/file/d/1LzzU7NG-79WPGc9sQq1Mo3WkfphASIbJ/view?usp=sharing'},
    {'sno':20,'name':'Java Programming','year':'II','semester':'IV','link':'https://drive.google.com/file/d/1ilQ-QVoTMzzn6Gw_NRRSpUBPBQcXgKyO/view?usp=sharing'},
    {'sno':21,'name':'Database Management Systems','year':'II','semester':'IV','link':'https://drive.google.com/file/d/1BxxOO9LFs5c7uZQlqkYd6JQw0c7ldmBz/view?usp=sharing'},
    {'sno':22,'name':'Computer Organization and Microprocessors','year':'II','semester':'IV','link':'https://drive.google.com/file/d/1JE23Ha9zoc9H11_Dfm5D_EgAgfWR0sNA/view?usp=sharing'},
    {'sno':23,'name':'Data Communications','year':'II','semester':'IV','link':'https://drive.google.com/file/d/1H3Vm96_JhLqY7DjfpceIxZCo_lor-lrg/view?usp=sharing'},
    {'sno':24,'name':'Software Engineering','year':'II','semester':'IV','link':'https://drive.google.com/file/d/1A2ZWp0Fmp3rYyBTjhRSnnCGNp1LRaLmJ/view?usp=sharing'},
    {'sno':25,'name':'Operating Systems','year':'III','semester':'V','link':'https://drive.google.com/drive/folders/1rFIUHT6EKA1cLW36wLRgnywEbR_fLc'},
    {'sno':26,'name':'Computer Graphics','year':'III','semester':'V','link':'https://www.dgp.toronto.edu/~hertzman/418notes.pdf'},
    {'sno':27,'name':'Multimedia Technologies','year':'III','semester':'V','link':'https://www.baschools.org/pages/uploaded_files/chap13.pdf'},
    {'sno':28,'name':'Artificial Intelligence','year':'III','semester':'V','link':'https://www.vssut.ac.in/lecture_notes/lecture1428643004.pdf'},
    {'sno':29,'name':'Computer Networks','year':'III','semester':'V','link':'https://mrcet.com/downloads/digital_notes/CSE/III%20Year/COMPUTER%20NETWORKS%20NOTES.pdf'},
    {'sno':30,'name':'Design and Analysis of Algorithms','year':'III','semester':'VI','link':'https://courses.cs.duke.edu/fall08/cps230/Book.pdf'},
    {'sno':31,'name':'Compiler Construction','year':'III','semester':'VI','link':'https://www.cs.cmu.edu/~aplatzer/course/Compilers/waitegoos.pdf'},
    {'sno':32,'name':'Distributed Systems','year':'III','semester':'VI','link':'https://mrcet.com/downloads/digital_notes/CSE/III%20Year/Distributed%20systems.pdf'},
    {'sno':33,'name':'Data Mining','year':'III','semester':'VI','link':'https://www.vssut.ac.in/lecture_notes/lecture1428550844.pdf'},
    {'sno':34,'name':'Machine Learning','year':'III','semester':'VI','link':'https://alex.smola.org/drafts/thebook.pdf'},
    {'sno':35,'name':'Information Storage and Management','year':'III','semester':'VI','link':'https://download.e-bookshelf.de/download/0000/5732/07/L-G-0000573207-0002358484.pdf'},
    {'sno':36,'name':'Object Oriented Analysis and Design','year':'III','semester':'VI','link':'https://www.tutorialspoint.com/object_oriented_analysis_design/ooad_tutorial.pdf'},
    {'sno':37,'name':'Data Science Using R Programming','year':'III','semester':'VI','link':'https://www.cs.upc.edu/~robert/teaching/estadistica/rprogramming.pdf'},
    {'sno':38,'name':'Software Engineering','year':'IV','semester':'VII','link':'https://www.vssut.ac.in/lecture_notes/lecture1428551142.pdf'},
    {'sno':39,'name':'Big Data Analysis','year':'IV','semester':'VII','link':'https://mrcet.com/downloads/digital_notes/IT/(R17A0528)%20BIG%20DATA%20ANALYTICS.pdf'},
    {'sno':40,'name':'Fundamentals of IOT','year':'IV','semester':'VII','link':'https://mrcet.com/pdf/Lab%20Manuals/IT/IoT%20&%20Applications%20Digital%20Notes.pdf'},
    {'sno':41,'name':'Principles of Electronic Communications','year':'IV','semester':'VII','link':'http://e4uhu.com/down/communication%20electronics/Book%204th.pdf'},
    {'sno':42,'name':'Entrepreneurship','year':'IV','semester':'VII','link':'https://www.cmu.edu/swartz-center-for-entrepreneurship/education-and-resources/project-olympus/pdf/entrepreneurship-101.pdf'},
    {'sno':43,'name':' Illumination and Electric Traction Systems','year':'IV','semester':'VII','link':'https://arxiv.org/ftp/arxiv/papers/1512/1512.03568.pdf'},
    {'sno':44,'name':'Human Computer Intelligence','year':'IV','semester':'VIII','link':'https://paragnachaliya.in/wp-content/uploads/2017/08/HCI_Alan_Dix.pdf'},
    {'sno':45,'name':'ADHOC and Sensors Networks','year':'IV','semester':'VIII','link':'https://mrcet.com/downloads/digital_notes/CSE/IV%20Year/Ad-hoc%20Sensor%20Networks.pdf'},
    {'sno':46,'name':'Web Services and Architecture','year':'IV','semester':'VIII','link':'https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.91.822&rep=rep1&type=pdf'},
    {'sno':47,'name':'Neutral Language Processing','year':'IV','semester':'VIII','link':'https://london.ac.uk/sites/default/files/study-guides/introduction-to-natural-language-processing.pdf'}
    
    
    
    
    
    
    
    ];
   
   
   
     
   
}
