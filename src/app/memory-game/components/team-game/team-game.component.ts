import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-team-game',
  templateUrl: './team-game.component.html',
  styleUrl: './team-game.component.scss',
})
export class TeamGameComponent implements OnInit {
  public openedCardOne: any = undefined;
  public openedCardTwo: any = undefined;

  public teams = [
    {
      name: 'Pilice',
      score: 0,
      active: false,
    },
    {
      name: 'Loknice',
      score: 0,
      active: false,
    },
  ];

  public team1: any = undefined;

  public team2: any = undefined;

  public cards: any = [];

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
  }

  handleCardClick(card: any) {
    if (this.openedCardOne === undefined || this.openedCardTwo === undefined) {
      let cardElement = document.getElementById(card?.index.toString());
      if (cardElement) {
        if (cardElement.classList.contains('show')) {
          cardElement.classList.remove('show');
          cardElement.classList.add('hide');

          if (this.openedCardOne === undefined) {
            this.openedCardOne = card;
          } else {
            if (this.openedCardTwo === undefined) {
              this.openedCardTwo = card;
              this.handleTwoCardsSelected();
            }
          }
        }
      }
    }
  }

  handleTwoCardsSelected() {
    if (this.isPair()) {
      this.removeActiveCards();
    } else {
      this.closeActiveCards();
    }
  }

  isPair() {
    if (this.openedCardOne.id === this.openedCardTwo.id) {
      return true;
    } else {
      return false;
    }
  }

  closeActiveCards() {
    setTimeout(() => {
      let card1Element = document.getElementById(
        this.openedCardOne.index.toString()
      );
      if (card1Element) {
        card1Element.classList.remove('hide');
        card1Element.classList.add('show');
      }
      let card2Element = document.getElementById(
        this.openedCardTwo.index.toString()
      );
      if (card2Element) {
        card2Element.classList.remove('hide');
        card2Element.classList.add('show');
      }

      this.openedCardOne = undefined;
      this.openedCardTwo = undefined;
      this.team1.active = !this.team1.active;
      this.team2.active = !this.team2.active;

    }, 1500);
  }

  removeActiveCards() {
    setTimeout(() => {
      let card1Element = document.getElementById(
        this.openedCardOne.index.toString()
      );
      if (card1Element) {
        card1Element.classList.remove('hide');
        card1Element.classList.add('show');
      }
      let card2Element = document.getElementById(
        this.openedCardTwo.index.toString()
      );
      if (card2Element) {
        card2Element.classList.remove('hide');
        card2Element.classList.add('show');
      }

      this.removePair();
      this.openedCardOne = undefined;
      this.openedCardTwo = undefined;

      if(this.team1.active) [
        this.team1.score = this.team1.score+1
      ]

      if(this.team2.active) [
        this.team2.score = this.team2.score+1
      ]
      if(this.isGameOver()){
        this.resetGame()
      }
    }, 1500);
  }

  removePair() {
    let card1 = document.getElementById(this.openedCardOne.index.toString());
    if (card1) {
      card1.classList.remove('show');
      card1.classList.add('hide');
    }
    let card2 = document.getElementById(this.openedCardTwo.index.toString());
    if (card2) {
      card2.classList.remove('show');
      card2.classList.add('hide');
    }

    let img1 = document.getElementById(
      `img-${this.openedCardOne.index.toString()}`
    );
    if (img1) {
      img1.classList.remove('show');
      img1.classList.add('hide');
    }
    let img2 = document.getElementById(
      `img-${this.openedCardTwo.index.toString()}`
    );
    if (img2) {
      img2.classList.remove('show');
      img2.classList.add('hide');
    }
  }


  isGameOver() {
    if(this.team1.score+this.team2.score === 20) {
      return true
    } else {
      return false
    }
  }
  resetGame() {
    this.team1 = undefined;
    this.team2 = undefined;
    this.cards = [];
  }



  setTeam(teamName: any) {
    let data = this.cardService.getChickenCards();
    this.cards = data;
    let selectedTeam = this.teams.find((team: any) => team.name === teamName);
    let team2 = this.teams.find((team: any) => team.name !== teamName);

    if (selectedTeam) {
      selectedTeam.active = true;
    }

    this.team1 = selectedTeam;
    this.team2 = team2;
  }
}
