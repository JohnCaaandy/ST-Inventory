<<<<<<< HEAD
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertToSpaces'
})

export class ConvertToSpacesPipe implements PipeTransform {
    transform (value: string, character: string): string{
        return value.replace(character, ' ');
    }
=======
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertToSpaces'
})

export class ConvertToSpacesPipe implements PipeTransform {
    transform (value: string, character: string): string{
        return value.replace(character, ' ');
    }
>>>>>>> 1e628ebbcf0564cb5fa67c76ae7a5a17fa410d91
}