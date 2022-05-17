import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-previous-papers',
  templateUrl: './previous-papers.component.html',
  styleUrls: ['./previous-papers.component.css']
})
export class PreviousPapersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  productss=[

  	
    {'sno':1,'year':1,'semester':1,'name':'Mathematics - I','link':'https://drive.google.com/file/d/18ycpP9hNWEH5oUxnZ9P9tkxPfEWIRy1h/view'},
{'sno':2,'year':1,'semester':1,'name':'Environmental Science','link':'https://drive.google.com/file/d/1IF3jmVTuWLDp_V1TcEbaVolPpKJUlmlF/view'},
{'sno':3,'year':2,'semester':3,'name':'Operations Research','link':'https://drive.google.com/file/d/1W5-xmDWJMESfW3t1xtDibbJG-BD5dFP5/view'},
{'sno':4,'year':2,'semester':3,'name':'Programming Languages','link':'https://drive.google.com/file/d/1n6-BqZb-OZl-zEVMAPa_M7oxZcaJLA30/view?usp=sharing'},
{'sno':5,'year':2,'semester':4,'name':'Finance And Accounting','link':'https://drive.google.com/file/d/1VjaYrzS1ry5JBsQn-NtvH7JfD-uir1mq/view?usp=sharing'},
{'sno':6,'year':2,'semester':4,'name':'Database Management Systems','link':'/https://docs.google.com/document/d/1NJx_AN-ZkWhgTs1u3H43v_OloRFKbXMg/edit?usp=sharing&ouid=106810835032773971794&rtpof=true&sd=true'},
{'sno':7,'year':3,'semester':5,'name':'Computer Networking','link':'https://drive.google.com/file/d/1Ux235fpvzzG2LSPWmtFazK6I_6scGZvR/view?usp=sharing'},
{'sno':8,'year':3,'semester':5,'name':'Compiler Construction','link':'https://drive.google.com/file/d/1hsvr48jCv8tmSZi2lUaKj1yYP7h_tXf6/view?usp=sharing'}

      ];
    
}
