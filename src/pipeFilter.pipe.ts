import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './app/models/post.interface';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'pipeFilter'})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(posts: Post[], id: number): Post[] {
      for (let index = 0; index < posts.length; index++) {
          const element = posts[index];
          if (element.id == id) {
              
          }
      }
    return posts;
  }
}