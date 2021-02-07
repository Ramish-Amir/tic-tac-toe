import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  one = '';
  two = '';
  three = '';
  four = '';
  five = '';
  six = '';
  seven = '';
  eight = '';
  nine = '';
  turn = 'Player 1';
  winner;
  winningLine = '';

  restart(): void {
    this.one = '';
    this.two = '';
    this.three = '';
    this.four = '';
    this.five = '';
    this.six = '';
    this.seven = '';
    this.eight = '';
    this.nine = '';
    this.turn = 'Player 1';
    this.winner = '';
    this.winningLine = '';
  }

  winnerCheck(selectedSymbol, selectedValue): void {
    if (selectedValue === 1) {
      if ((this.two === selectedSymbol && this.three === selectedSymbol)) {
        this.winner = this.turn;
        this.winningLine = 'h1';
        return;
      }
      if ((this.four === selectedSymbol && this.seven === selectedSymbol)) {
        this.winner = this.turn;
        this.winningLine = 'v1';
        return;
      }
      if ((this.five === selectedSymbol && this.nine === selectedSymbol)) {
        this.winner = this.turn;
        this.winningLine = 'd1';
        return;
      }
    }
    if (selectedValue === 2) {
      if ((this.one === selectedSymbol && this.three === selectedSymbol)) {
        this.winner = this.turn;
        this.winningLine = 'h1';
        return;
      }
      if ((this.five === selectedSymbol && this.eight === selectedSymbol)) {
        this.winner = this.turn;
        this.winningLine = 'v2';
        return;
      }
    }
    if (selectedValue === 3) {
      if ((this.two === selectedSymbol && this.one === selectedSymbol)) {
        this.winner = this.turn;
        this.winningLine = 'h1';
        return;
      }
      if ((this.five === selectedSymbol && this.seven === selectedSymbol)) {
        this.winner = this.turn;
        this.winningLine = 'd2';
        return;
      }
      if ((this.six === selectedSymbol && this.nine === selectedSymbol)) {
        this.winner = this.turn;
        this.winningLine = 'v3';
        return;
      }
    }
    if (selectedValue === 4) {
      if (this.five === selectedSymbol && this.six === selectedSymbol) {
        this.winner = this.turn;
        this.winningLine = 'h2';
        return;
      }
      if (this.four === selectedSymbol && this.seven === selectedSymbol) {
        this.winner = this.turn;
        this.winningLine = 'v1';
        return;
      }
    }
    if (selectedValue === 5) {
      if (this.four === selectedSymbol && this.six === selectedSymbol) {
        this.winner = this.turn;
        this.winningLine = 'h2';
        return;
      }
      if (this.one === selectedSymbol && this.nine === selectedSymbol) {
        this.winner = this.turn;
        this.winningLine = 'd1';
        return;
      }
      if (this.three === selectedSymbol && this.seven === selectedSymbol) {
        this.winner = this.turn;
        this.winningLine = 'd2';
        return;
      }
      if (this.two === selectedSymbol && this.eight === selectedSymbol) {
        this.winner = this.turn;
        this.winningLine = 'v2';
        return;
      }
    }
    if (selectedValue === 6) {
      if (this.three === selectedSymbol && this.nine === selectedSymbol) {
        this.winner = this.turn;
        this.winningLine = 'v3';
        return;
      }
      if (this.four === selectedSymbol && this.five === selectedSymbol) {
        this.winner = this.turn;
        this.winningLine = 'h2';
        return;
      }
    }
    if (selectedValue === 7) {
      if (this.one === selectedSymbol && this.four === selectedSymbol) {
        this.winner = this.turn;
        this.winningLine = 'v1';
        return;
      }
      if (this.eight === selectedSymbol && this.nine === selectedSymbol) {
        this.winner = this.turn;
        this.winningLine = 'h3';
        return;
      }
      if (this.five === selectedSymbol && this.three === selectedSymbol) {
        this.winner = this.turn;
        this.winningLine = 'd2';
        return;
      }
    }
    if (selectedValue === 8) {
      if (this.five === selectedSymbol && this.two === selectedSymbol) {
        this.winner = this.turn;
        this.winningLine = 'v2';
        return;
      }
      if (this.nine === selectedSymbol && this.seven === selectedSymbol) {
        this.winner = this.turn;
        this.winningLine = 'h3';
        return;
      }
    }
    if (selectedValue === 9) {
      if (this.seven === selectedSymbol && this.eight === selectedSymbol) {
        this.winner = this.turn;
        this.winningLine = 'h3';
        return;
      }
      if (this.three === selectedSymbol && this.six === selectedSymbol) {
        this.winner = this.turn;
        this.winningLine = 'v3';
        return;
      }
      if (this.one === selectedSymbol && this.five === selectedSymbol) {
        this.winner = this.turn;
        this.winningLine = 'd1';
        return;
      }
    }
  }

  fill(value): void {
    if (this.winner === 'Player 1' || this.winner === 'Player 2') {
      return;
    }

    if (this.turn === 'Player 1') {
      if (value === 1 && this.one === '') {
        this.one = '✓';
        this.winnerCheck('✓', value);
        this.turn = 'Player 2';
      }
      if (value === 2 && this.two === '') {
        this.two = '✓';
        this.winnerCheck('✓', value);
        this.turn = 'Player 2';
      }
      if (value === 3 && this.three === '') {
        this.three = '✓';
        this.winnerCheck('✓', value);
        this.turn = 'Player 2';
      }
      if (value === 4 && this.four === '') {
        this.four = '✓';
        this.winnerCheck('✓', value);
        this.turn = 'Player 2';
      }
      if (value === 5 && this.five === '') {
        this.five = '✓';
        this.winnerCheck('✓', value);
        this.turn = 'Player 2';
      }
      if (value === 6 && this.six === '') {
        this.six = '✓';
        this.winnerCheck('✓', value);
        this.turn = 'Player 2';
      }
      if (value === 7 && this.seven === '') {
        this.seven = '✓';
        this.winnerCheck('✓', value);
        this.turn = 'Player 2';
      }
      if (value === 8 && this.eight === '') {
        this.eight = '✓';
        this.winnerCheck('✓', value);
        this.turn = 'Player 2';
      }
      if (value === 9 && this.nine === '') {
        this.nine = '✓';
        this.winnerCheck('✓', value);
        this.turn = 'Player 2';
      }
    }

    if (this.turn === 'Player 2') {
      if (value === 1 && this.one === '') {
        this.one = '✖';
        this.winnerCheck('✖', value);
        this.turn = 'Player 1';
      }
      if (value === 2 && this.two === '') {
        this.two = '✖';
        this.winnerCheck('✖', value);
        this.turn = 'Player 1';
      }
      if (value === 3 && this.three === '') {
        this.three = '✖';
        this.winnerCheck('✖', value);
        this.turn = 'Player 1';
      }
      if (value === 4 && this.four === '') {
        this.four = '✖';
        this.winnerCheck('✖', value);
        this.turn = 'Player 1';
      }
      if (value === 5 && this.five === '') {
        this.five = '✖';
        this.winnerCheck('✖', value);
        this.turn = 'Player 1';
      }
      if (value === 6 && this.six === '') {
        this.six = '✖';
        this.winnerCheck('✖', value);
        this.turn = 'Player 1';
      }
      if (value === 7 && this.seven === '') {
        this.seven = '✖';
        this.winnerCheck('✖', value);
        this.turn = 'Player 1';
      }
      if (value === 8 && this.eight === '') {
        this.eight = '✖';
        this.winnerCheck('✖', value);
        this.turn = 'Player 1';
      }
      if (value === 9 && this.nine === '') {
        this.nine = '✖';
        this.winnerCheck('✖', value);
        this.turn = 'Player 1';
      }
    }
  }
}
