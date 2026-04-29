import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlgoService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getSuggestions(prefix: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/trie/suggestions?prefix=${prefix}`);
  }

  // THIS IS THE MISSING PIECE:
 getShortestPath(start: string, end: string): Observable<string[]> {
   // Make sure this matches @RequestMapping("/api/graph") and @GetMapping("/shortest-path")
   return this.http.get<string[]>(`${this.baseUrl}/graph/shortest-path?start=${start}&end=${end}`);
 }
 solveKnapsack(capacity: number, items: any[]): Observable<string> {
   return this.http.post(`${this.baseUrl}/optimize/knapsack?capacity=${capacity}`, items, {
     responseType: 'text' // <--- CRITICAL: Tell Angular Java is sending a String
   });
 }
}
