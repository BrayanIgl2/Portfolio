import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsContainerComponent } from './sections-container/sections-container.component';
import { AboutmeSectionComponent } from './aboutme-section/aboutme-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';



@NgModule({
  declarations: [
    SectionsContainerComponent,
    AboutmeSectionComponent,
    SkillsSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SectionsContainerComponent,
    AboutmeSectionComponent,
    SkillsSectionComponent
  ]
})
export class SectionsModule { }
