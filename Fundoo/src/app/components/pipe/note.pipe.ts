import { Pipe, PipeTransform } from '@angular/core';
import { Note } from 'src/app/model/note';

@Pipe({
  name: 'note'
})
export class NotePipe implements PipeTransform {

  
  transform(notes: Note[], searchTerm:string): Note[] {
    if(!notes || !searchTerm){
      return notes;
    }
    return notes.filter(notes=>
     (notes.description).toLowerCase().indexOf(searchTerm.toLowerCase())!=-1);
    
   }

}
