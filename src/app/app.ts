import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlgoService } from './services/algo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  searchPrefix: string = '';
  suggestions: string[] = [];

  // MUST HAVE THESE THREE:
  startNode: string = '';
  endNode: string = '';
  path: string[] = [];

  constructor(private algoService: AlgoService) {}

  onType() {
    if (this.searchPrefix.trim().length > 0) {
      this.algoService.getSuggestions(this.searchPrefix).subscribe((data: string[]) => {
        this.suggestions = data;
      });
    } else {
      this.suggestions = [];
    }
  }

  // MUST HAVE THIS METHOD:
  findPath() {
    if (this.startNode && this.endNode) {
      this.algoService.getShortestPath(this.startNode, this.endNode).subscribe((data: string[]) => {
        this.path = data;
      });
    }
  }
// Add these to your class variables
capacity: number = 10;
knapsackResult: string = '';

// Add this method
solveKnapsack() {
  const dummyItems = [
    { name: 'Item 1', weight: 2, value: 10 },
    { name: 'Item 2', weight: 5, value: 20 }
  ];
  this.algoService.solveKnapsack(this.capacity, dummyItems).subscribe(res => {
    this.knapsackResult = res;
  });
}
}
