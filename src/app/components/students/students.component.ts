import { Component } from '@angular/core';
import { Student } from '../../models/Student'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  searchedText: string = '';
  displayedColumns = ['name', 'city', 'score']

  updateDataSource(e: any){
    this.searchedText = e.target.value;
    this.filteredDataSource = this.dataSource.filter(x => x.name.toLowerCase().includes(this.searchedText.toLowerCase()) || x.city.toLowerCase().includes(this.searchedText.toLowerCase()));
  }

  dataSource: Student[] = [
    {
      "id": 1,
      "name": "Charity Waters",
      "city": "Savannah",
      "score": 3
    },
    {
      "id": 2,
      "name": "Hahn Delacruz",
      "city": "Websterville",
      "score": 8
    },
    {
      "id": 3,
      "name": "Delores Harrington",
      "city": "Oley",
      "score": 7
    },
    {
      "id": 4,
      "name": "Curry Bates",
      "city": "Emory",
      "score": 3
    },
    {
      "id": 5,
      "name": "Sandy Short",
      "city": "Oasis",
      "score": 7
    },
    {
      "id": 6,
      "name": "Mercado Hurley",
      "city": "Como",
      "score": 3
    },
    {
      "id": 7,
      "name": "Farrell Bullock",
      "city": "Roeville",
      "score": 3
    },
    {
      "id": 8,
      "name": "Nash Allen",
      "city": "Vernon",
      "score": 7
    },
    {
      "id": 9,
      "name": "Farley Lang",
      "city": "Edgar",
      "score": 7
    }
  ];
  filteredDataSource = this.dataSource;

  isApproved = (score: number): boolean => {
    return score>=6;
  }

}
