import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlgoService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  // 1. Trie - Get Search Suggestions
  getSuggestions(prefix: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/trie/suggestions?prefix=${prefix}`);
  }

  // 2. Graph - Find Shortest Path
  getShortestPath(start: string, end: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/graph/shortest-path?start=${start}&end=${end}`);
  }

  // 3. DP - Solve Knapsack
  solveKnapsack(capacity: number, items: any[]): Observable<string> {
    return this.http.post(`${this.baseUrl}/optimize/knapsack?capacity=${capacity}`, items, { responseType: 'text' });
  }
}
