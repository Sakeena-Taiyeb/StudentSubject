import { Component, OnInit } from '@angular/core';
import{SecondaryDataService} from 'src/app/service/secondary-data.service';
import{SecondaryStudentModel} from 'src/app/model/SecondaryStudent.model';
//import{SecondarySubject} from 'src/app/model/SecondarySubject.model';
@Component({ 

  selector: 'app-secondary-student-list',
  templateUrl: './secondary-student-list.component.html',
  styleUrls: ['./secondary-student-list.component.css'],
  providers:[SecondaryDataService]
})
export class SecondaryStudentListComponent implements OnInit {
  selectedItem:SecondaryStudentModel;
  subjectName=[]=[
    { "name":"English",
    "section":[ "Literature", "Grammar"] ,
    "MaxMarks":[80,20],
    "subjectType":1,
    "subjectCode":"ENG",
    "ExamType":"Written"},

   { "name":"Hindi", "section":[  "Hindi1", "Hindi2" ] ,"MaxMarks":[80,20],"subjectType":1,"subjectCode":"HIN","ExamType":"Written"},
   { "name":"Science", "section":[ "Physics", "Chemestry","Biology" ],"MaxMarks":[25,25,25,10],"subjectType":1,"subjectCode":"SCI","ExamType":["Written","Practical","Oral"]},
   { "name":"SocialScience", "section":[ "History", "civics","Geography","Economics"] ,"MaxMarks":[20,30,30,20],"subjectType":1,"subjectCode":"SOC","ExamType":"Written"},
   { "name":"Mathematics", "section":[ "Math1", "Geometry"],"MaxMarks":[60,40],"subjectType":1,"subjectCode":"MAT","ExamType":"Written"} ,
   {"name":"MoralScience","MaxMarks":50,"subjectType":2,"subjectCode":"MOR","ExamType":"Written"}
    
  ];
  
  toggleForm = false;
  student:SecondaryStudentModel;
  studentList: SecondaryStudentModel[] = [];
  constructor(private dataservice: SecondaryDataService) { }

  ngOnInit() {
    this.getItems();
   // this.dataservice.getStudentById().subscribe(data=>{
     // this.studentList=data;

    //});
    //console.log(this.studentList);
  }

  getItems() {
    this.dataservice.getItems().subscribe( items => {
      this.studentList = items;
    console.log('data from data service:' + this.studentList[0].name);
    });
    }
    
    addItem(form) {
     var newItem=  new SecondaryStudentModel();
    newItem.name= form.value.name ,
    newItem.Id= form.value.Id,
    newItem.class= form.value.class
    this.dataservice.addItem(newItem)
     .subscribe( item => {
       this.student=item;
       console.log(this.student.name);
       this.getItems();
    });
     }
    
     deleteItem(id) {
     this.dataservice.deleteItem(id)
     .subscribe(data => {
       console.log(data);
       if ( data.n === 1) {
       for (let i = 0; i < this.studentList.length; i++) {
           if (id === this.studentList[i].Id) {
     this.studentList.splice(i, 1);
          } // end if
         }// end for
      } // end if
     });
    }
    
    editItem(form) {
    let newItem : SecondaryStudentModel = {
    Id : this.selectedItem.Id,
    name: form.value.name ,
    class: form.value.class,
   
    };
    this.dataservice.updateItem(newItem)
    .subscribe(result => {
    console.log('Original Item to be Updated with old values:' + result);
    this.getItems();
    });
     this.toggleForm = !this.toggleForm ;
    }
    
    showEditForm(item) {
    this.selectedItem = item;
     this.toggleForm = !this.toggleForm;
    }
   
    
}
