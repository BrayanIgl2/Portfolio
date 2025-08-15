import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent {
 skillsCategories = [
  {
    title: 'Lenguajes de Programación',
    skills : [
      { name : 'CSS3', img: './assets/icons/css3.svg'},
      { name : 'HTML5', img: './assets/icons/html5.svg'},
      { name : 'Java', img: './assets/icons/java.svg'},
      { name : 'JavaScript', img: './assets/icons/javascript.svg'},
      { name : 'SQL', img: './assets/icons/sql.svg'},
    ]
  },
  {
    title: 'Frameworks y Librerías',
    skills: [
      { name: 'Angular', img: './assets/icons/angular.svg'},
      { name: 'Hibernate', img: './assets/icons/hibernate.svg'},
      { name: 'JDBC', img: './assets/icons/jdbc.svg'},
      { name: 'Spring Boot', img: './assets/icons/springboot.svg'}
    ]
  },
  {
    title: 'Herramientas y Otros',
    skills: [
      { name: 'Git', img: './assets/icons/git.svg'},
      { name: 'GitHub', img: './assets/icons/github.svg'},
      { name: 'IntelliJ IDEA', img: './assets/icons/intellij.svg'},
      { name: 'Jira', img: './assets/icons/jira.svg'},
      { name: 'Maven', img: './assets/icons/maven.svg'},
      { name: 'Postman', img: './assets/icons/postman.svg'},
      { name: 'Scrum', img: './assets/icons/scrum.svg'},
      { name: 'Visual Studio Code', img: './assets/icons/vsc.svg'}
    ]
  }
]
}
